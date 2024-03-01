import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <Navbar />
      <div className=" main-cont text-left text-white">
        {/* main */}
        <div
          className=""
          style={{ position: "relative", top: "20%", left: "10%" }}
        >
          <div className="" style={{ position: "fixed" }}>
            <h1 className="heading-1">Suryansh Bakliwal</h1>
            <h2 className="" style={{ fontWeight: "bold", color: "GrayText" }}>
              404 Page Not Found..!!!!
            </h2>
            <Link
              to={"/about"}
              className="pb-1 underline text-white"
              href="..."
              style={{ textDecoration: "none" }}
            >
              Wanna know about me?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
