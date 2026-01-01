"use client";
import client1 from "@/public/images/client-1.png";
import logoBlack from "@/public/images/visionGroupLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
const [testimonial, setTestimonial] = useState<any>(null);
const [tLoading, setTLoading] = useState(false);
useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      setTLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/testimonials`
      );

      const data = await res.json();

      if (res.ok && data?.status === "success" && Array.isArray(data?.data)) {
        // pick first active
        const active = data.data.filter((t: any) => t.isActive);
        setTestimonial(active?.[0] || data.data?.[0]);
      }
    } catch (e) {
      console.log("testimonial fetch error", e);
    } finally {
      setTLoading(false);
    }
  };

  fetchTestimonials();
}, []);
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMsg("");
  setLoading(true);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const result = await res.json();
    console.log("Login response:", result); // <--- check structure

    if (!res.ok || result.status !== "success") {
      setErrorMsg(result.message || "Invalid email or password");
      setLoading(false);
      return;
    }

    // Save token and user info
    if (result?.data?.accessToken) {
      localStorage.setItem("authToken", result.data.accessToken);
      localStorage.setItem("authLogin", JSON.stringify(result.data));
    }

    setLoading(false);
    router.push("/admin");
  } catch (error) {
    console.log(error);
    setErrorMsg("Something went wrong. Please try again.");
    setLoading(false);
  }
};


  return (
    <section className="signup-page signin-bg">
      <div className="page-content">
        <div className="container">
          <div className="row">
            <form className="col-lg-6 col-xxl-5" onSubmit={handleLogin}>
              <div className="pb-120">
                <Link href="/" className="py-2 py-xl-3 d-flex justify-content-center">
                  <Image src={logoBlack} className="img-fluid" alt="" />
                </Link>
              </div>

              <div className="mb-4 mb-xl-5 pb-xxl-2">
                <Link
                  className="d-inline-flex align-items-center gap-2 text-n700 fw-semibold"
                  href="/"
                >
                  <i className="ti ti-arrow-left"></i> Go Back
                </Link>
              </div>

              <div className="mb-4 pb-xl-3">
                <h2 className="mb-3">Welcome Back!</h2>
                <p className="text-n500">Sign in to your account and join us</p>
              </div>

              {errorMsg && (
                <p className="text-danger mb-3">{errorMsg}</p>
              )}

              <div className="row g-3 g-xl-4 pb-5">
                <div className="col-12">
                  <label
                    htmlFor="email"
                    className="d-block text-n500 text-lg fw-medium mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="example@mail.com"
                    className="solarox-input bg1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="col-12">
                  <label
                    htmlFor="password"
                    className="d-block text-n500 text-lg fw-medium mb-3"
                  >
                    Password
                  </label>
                  <div className="solarox-input bg1 password-toggle">
                    <input
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Password"
                      className="bg-transparent border-0 w-100"
                      id="password-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <i
                      onClick={() => setShowPassword(!showPassword)}
                      className={`ti ti-eye${!showPassword ? "-off" : ""} eye-icon`}
                      id="toggle-password"
                    ></i>
                  </div>
                </div>
{/* <p className="text-center mt-4 text-sm">
  Don’t have an account?{" "}
  <Link href="/sign-up" className="text-secondary3 fw-semibold">
    <b>Sign Up</b>
  </Link>
</p> */}
                <div className="col-12">
                  <button
                    className="btn btn-primary w-100 rounded-0 py-2 fw-medium text-bg1 mt-2 mt-xl-3"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                </div>
              </div>

              <p className="copyright pt-xl-5">
                Copyright ©
                <Link href="www.visionoriginn.com" className="text-secondary3 fw-semibold">
                  Vision Group
                </Link>
                All rights reserved.
              </p>
            </form>

            <div className="d-none d-xl-flex col-lg-6 offset-xxl-1 flex-column align-items-end justify-content-end">
             <div className="testimonial-card signup mb-3">

  {/* Avatar */}
  {testimonial?.photoUrl ? (
    <Image
      width={60}
      height={60}
      src={testimonial.photoUrl}
      className="mb-3 rounded-circle"
      alt={testimonial.customerName}
    />
  ) : (
    <Image width={60} height={60} src={client1} className="mb-3" alt="" />
  )}

  {/* Message */}
  <p className="mb-3 mb-xl-4">
    {tLoading
      ? "Loading testimonial..."
      : testimonial?.message || "Great service experience!"}
  </p>

  {/* Stars */}
  <div className="text-yellow d-flex gap-2 stars mb-2 pb-1">
    {Array.from({ length: testimonial?.rating || 5 }).map((_, i) => (
      <i key={i} className="ti ti-star-filled"></i>
    ))}
  </div>

  {/* Name + designation */}
  <div className="d-flex gap-3 align-items-center">
    <div>
      <h5 className="mb-1">
        {testimonial?.customerName || "Customer"}
      </h5>
      <span>
        {testimonial?.designation || ""}
      </span>
    </div>
  </div>
</div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
