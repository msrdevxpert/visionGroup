"use client";

import client1 from "@/public/images/client-1.png";
import logoBlack from "@/public/images/visionGroupLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const fullName = `${firstName} ${lastName}`;
      const response = await fetch(
        "https://visiongreen-production.up.railway.app/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Optionally, store token if returned and redirect
      // localStorage.setItem("authToken", data.data?.accessToken);

      alert("Registration successful! Please log in.");
      router.push("/sign-in");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signup-page signup-bg">
      <div className="page-content">
        <div className="container">
          <div className="row">
            <form className="col-lg-6 col-xxl-5" onSubmit={handleSignUp}>
              <div className="pb-80">
                <Link href="/" className="py-2 py-xl-3 d-flex justify-content-center">
                  <Image src={logoBlack} className="img-fluid" alt="logo" />
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
                <h2 className="mb-3">Let's Get Started!</h2>
                <p className="text-n500">
                  Please Enter your Email Address to Start your Online
                  Application
                </p>
              </div>
              <div className="row g-3 g-xl-4">
                <div className="col-md-6">
                  <label
                    htmlFor="fname"
                    className="d-block text-n500 text-lg fw-medium mb-3"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    autoComplete="name"
                    placeholder="John"
                    className="solarox-input bg1"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="lname"
                    className="d-block text-n500 text-lg fw-medium mb-3"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    autoComplete="additional-name"
                    placeholder="Fisher"
                    className="solarox-input bg1"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <i
                      onClick={() => setShowPassword(!showPassword)}
                      className={`ti ti-eye${!showPassword ? "-off" : ""} eye-icon`}
                    ></i>
                  </div>
                </div>
                {error && <p className="text-danger mt-2">{error}</p>}
                <div className="col-12">
                  <p className="mt-1">
                    Have an account?{" "}
                    <Link href="/sign-in" className="text-secondary3">
                      Sign in
                    </Link>
                  </p>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-0 py-2 fw-medium text-bg1 mt-2 mt-xl-3"
                    disabled={loading}
                  >
                    {loading ? "Signing up..." : "Sign up"}
                  </button>
                </div>
              </div>
              <p className="copyright">
                Copyright ©
                <Link href="/" className="text-secondary3 fw-semibold">
                  Solarox
                </Link>{" "}
                All rights reserved.
              </p>
            </form>

            <div className="d-none d-xl-flex col-lg-6 offset-xxl-1 flex-column align-items-end justify-content-end">
              <div className="testimonial-card signup mb-3">
                <Image
                  width="60"
                  height="60"
                  src={client1}
                  className="mb-3"
                  alt=""
                />
                <p className="mb-3 mb-xl-4">
                  I had the privilege of working with Solarox on a complex
                  business litigation case.
                </p>
                <div className="text-yellow d-flex gap-2 stars mb-2 pb-1">
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-half-filled"></i>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h5 className="mb-1">Kende Attila</h5>
                    <span>Software Tester</span>
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

export default SignUpPage;
