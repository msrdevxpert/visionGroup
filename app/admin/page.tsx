"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { TrendingUp, Bell, DollarSign, Briefcase } from "react-feather";
import { Col, Row, Card, Form } from "react-bootstrap";

interface Stats {
  totalCapacityKw: number;
  totalProjects: number;
  completedProjects: number;
  totalEnquiries: number;

  projectsByType: Record<string, number>;
  servicesByType: Record<string, number>;
  enquiriesByType: Record<string, number>;
  projectsByStatus: Record<string, number>;
}

export default function Dashboard() {
  const authTokenStr = localStorage.getItem("authLogin");
  const authToken = authTokenStr ? JSON.parse(authTokenStr) : null;

  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  // filters
  const [projectType, setProjectType] = useState("ALL");
  const [serviceType, setServiceType] = useState("ALL");
  const [enquiryType, setEnquiryType] = useState("ALL");
  const [projectStatus, setProjectStatus] = useState("ALL");

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard/stats`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken?.accessToken}`,
            },
          }
        );

        const json = await res.json();
        setStats(json?.data);
      } catch (err) {
        console.error("Dashboard stats error:", err);
      } finally {
        setLoading(false);
      }
    };

    getStats();
  }, []);

  if (loading) return <h4 className="text-center mt-5">Loading dashboard…</h4>;
  if (!stats) return <h5 className="text-center mt-5">No data found</h5>;

  // 🎯 Derived values based on filters
  const filteredProjects =
    projectType === "ALL"
      ? stats.totalProjects
      : stats.projectsByType?.[projectType] || 0;

  const filteredServices =
    serviceType === "ALL"
      ? Object.values(stats.servicesByType || {}).reduce(
          (a, b) => a + b,
          0
        )
      : stats.servicesByType?.[serviceType] || 0;

  const filteredEnquiries =
    enquiryType === "ALL"
      ? stats.totalEnquiries
      : stats.enquiriesByType?.[enquiryType] || 0;

  const filteredCompleted =
    projectStatus === "ALL"
      ? stats.completedProjects
      : stats.projectsByStatus?.[projectStatus] || 0;

  return (
    <>
      {/* ===== Filters ===== */}
      <Card className="mb-3 p-3">
        <Row className="gy-2">
          <Col md={3}>
            <Form.Label>Project Type</Form.Label>
            <Form.Select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            >
              <option value="ALL">All</option>
              <option value="CIVIL">Civil</option>
              <option value="AGRI">Agri</option>
              <option value="SOLAR">Solar</option>
            </Form.Select>
          </Col>

          <Col md={3}>
            <Form.Label>Service Type</Form.Label>
            <Form.Select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="ALL">All</option>
              <option value="CIVIL">Civil</option>
              <option value="AGRI">Agri</option>
              <option value="SOLAR">Solar</option>
            </Form.Select>
          </Col>

          <Col md={3}>
            <Form.Label>Enquiry Type</Form.Label>
            <Form.Select
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
            >
              <option value="ALL">All</option>
              <option value="CIVIL">Civil</option>
              <option value="AGRI">Agri</option>
              <option value="SOLAR">Solar</option>
            </Form.Select>
          </Col>

          <Col md={3}>
            <Form.Label>Project Status</Form.Label>
            <Form.Select
              value={projectStatus}
              onChange={(e) => setProjectStatus(e.target.value)}
            >
              <option value="ALL">All</option>
              <option value="pending">Pending</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </Form.Select>
          </Col>
        </Row>
      </Card>

      {/* ===== Cards ===== */}
      <Row className="g-3">
        {/* Total Projects */}
        <Col lg={3} md={6}>
          <Card className="shadow-sm">
            <Card.Body className="d-flex justify-content-between">
              <div>
                <h6>Total Projects</h6>
                <h3>
                  <CountUp end={filteredProjects} separator="," duration={1.2} />
                </h3>
              </div>
              <div className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  background: "linear-gradient(135deg,#6a11cb,#2575fc)",
                  width: 50,
                  height: 50,
                  color: "#fff",
                }}
              >
                <TrendingUp size={22} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Completed / Status */}
        <Col lg={3} md={6}>
          <Card className="shadow-sm">
            <Card.Body className="d-flex justify-content-between">
              <div>
                <h6>Projects ({projectStatus})</h6>
                <h3>
                  <CountUp end={filteredCompleted} separator="," duration={1.2} />
                </h3>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg,#ff6a00,#ee0979)",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Bell size={22} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Enquiries */}
        <Col lg={3} md={6}>
          <Card className="shadow-sm">
            <Card.Body className="d-flex justify-content-between">
              <div>
                <h6>Enquiries</h6>
                <h3>
                  <CountUp end={filteredEnquiries} separator="," duration={1.2} />
                </h3>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DollarSign size={22} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* Total Services */}
{/* Total Services */}
<Col lg={3} md={6} >
  <Card className="shadow-sm">
    <Card.Body className="d-flex align-items-center justify-content-between">
      <div>
        <h6>
          {serviceType === "ALL"
            ? "Total Services"
            : `Services (${serviceType})`}
        </h6>

        <h3 className="mb-1">
          <CountUp
            end={filteredServices}
            separator=","
            duration={1.2}
          />
        </h3>

        {/* <small className="text-info">
          Services across {serviceType === "ALL" ? "all categories" : serviceType}
        </small> */}
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #00c6ff, #0072ff)",
          width: 50,
          height: 50,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Briefcase size={24} />
      </div>
    </Card.Body>
  </Card>
</Col>



        {/* Capacity */}
        <Col lg={3} md={6}>
          <Card className="shadow-sm">
            <Card.Body className="d-flex justify-content-between">
              <div>
                <h6>Total Capacity (KW)</h6>
                <h3>
                  <CountUp
                    end={stats.totalCapacityKw || 0}
                    separator=","
                    duration={1.2}
                  />
                </h3>
              </div>
              <div
                style={{
                  background: "linear-gradient(135deg,#56ccf2,#2f80ed)",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Briefcase size={22} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
