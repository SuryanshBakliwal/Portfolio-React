import React from "react";
import Img from "../Assests/Img-9.jpeg";
import Resume from "../Assests/SuryanshBakliwalResume.pdf.pdf";
import Navbar from "./Navbar";
import Contact from "./Contact";

export default function About() {
  return (
    <>
      <div className="container" style={{ width: "100vw", height: "100vh" }}>
        <Navbar />
        <div className="main-container">
          <div className="top-container d-flex">
            <div class="detail-img ">
              <div className="">
                <img
                  className=""
                  src={Img}
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "fill",
                    borderRadius: "50%",
                    border: "bold",
                    // boxShadow: "-5px -5px 10px 10px rgba(0, 0, 0, 0.5)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
                  }}
                />
              </div>
            </div>
            <div className="text text-center mt-3">
              <div className="text-white title" style={{}}>
                <h2
                  style={{
                    fontFamily: "'Rubik', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Suryansh Bakliwal
                </h2>
                {/* <h5 style={{ color: "GrayText" }}>
                  A MERN Stack Web Develpoer
                </h5> */}
                <a href={Resume} download="Resume">
                  <button
                    className="btn btn-primary btn-sm"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Download Resume <i class="fas fa-file-download"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="text-white pt-5" style={{ textAlign: "justify" }}>
              Hello! I'm Suryansh Bakliwal, a dedicated and enthusiastic
              Computer Science student currently pursuing a Bachelor of
              Technology (B.Tech) degree at ECA, Ajmer. My educational journey
              is fueled by a passion for technology and a deep-seated curiosity
              about the world of computer science. And I'm also passionate MERN
              (MongoDB, Express.js, React, Node.js) Stack Developer with a knack
              for creating web applications that not only look great but also
              deliver exceptional user experiences. With a strong foundation in
              both front-end and back-end development, I strive to bring your
              digital ideas to life.
            </div>
          </div>
        </div>
        <hr />
        <div className="projects text-white">
          <div className="pt-5 pb-3 d-flex  flex-column align-items-center skill-cont">
            <div className="text-left">
              <h1 className="">My Projects</h1>
            </div>
            <div class="mt-3 container-fluid text-start">
              <div class="row g-2">
                <div class="col-12">
                  <div class="p-3 d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center">
                      <i
                        className="fas fa-circle me-2"
                        style={{ fontSize: "8px" }}
                      ></i>{" "}
                      <a
                        className="underline"
                        href="https://tic-tac-toe-suryansh.netlify.app"
                        target="_black"
                        style={{ textDecoration: "none" }}
                      >
                        <span className=" fs-4 text-white">
                          Tic-Tac-Toe Game
                        </span>
                      </a>
                    </div>
                    <div className="pt-3">
                      <p>
                        I designed and developed a classic Tic Tac Toe game
                        using HTML, CSS, and JavaScript, demonstrating my
                        proficiency in front-end web development. This project
                        offers an interactive and enjoyable gaming experience
                        for users. I faced challenges in designing the winning
                        logic, but through careful planning and testing, I
                        developed an algorithm that accurately determines the
                        game's outcome.
                        <br />
                        <span className="">Key Features : </span>
                        Responsive Design, Interactive Gameplay, Winning Logic,
                        Reset and Restart.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="p-3 d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center">
                      <i
                        className="fas fa-circle me-2"
                        style={{ fontSize: "8px" }}
                      ></i>{" "}
                      <a
                        className="underline"
                        href="https://movieespedia.netlify.app"
                        target="_black"
                        style={{ textDecoration: "none" }}
                      >
                        <span className=" fs-4 text-white">MoviesPedia</span>
                      </a>
                    </div>
                    <div className="pt-3">
                      <p>
                        I designed and developed "Moviespedia," a full-stack web
                        application using the MERN stack (MongoDB, Express.js,
                        React, Node.js). This project not only provides an
                        interactive platform for users to explore movies but
                        also incorporates essential security features, including
                        custom email verification and a "Forgot Password"
                        functionality and a user can add or remove a movie and
                        shows from his/her Watchlist or Likedmovies. It offers
                        users a safe and engaging platform to explore and
                        interact with movie data while ensuring their data
                        remains secure.
                        <br />
                        <span className="">Key Features : </span>
                        <ul>
                          <li>
                            <span className="">Movie DataBase : </span>
                            Moviespedia offers a comprehensive database of
                            movies, allowing users to search, filter, and view
                            detailed information about their favorite films.
                          </li>
                          <li>
                            <span className="">User Authentication : </span>
                            The website includes user registration and login
                            functionalities, ensuring a personalized experience
                            for users.
                          </li>
                          <li>
                            <span className="">
                              Custom Email Verification :{" "}
                            </span>
                            Implemented a custom email verification process to
                            verify the authenticity of user accounts, enhancing
                            security and trust on the platform.
                          </li>
                          <li>
                            <span className="">Forgot Password : </span>
                            Users who forget their passwords can reset them
                            securely through the "Forgot Password" feature. An
                            email with a reset link is sent to the registered
                            email address.
                          </li>
                          <li>
                            Responsive Design, Add/Remove Movies from Watchlist
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="p-3 d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center">
                      <i
                        className="fas fa-circle me-2"
                        style={{ fontSize: "8px" }}
                      ></i>{" "}
                      <a
                        className="underline"
                        href="https://movieespedia.netlify.app"
                        target="_black"
                        style={{ textDecoration: "none" }}
                      >
                        <span className=" fs-4 text-white">Excel Clone</span>
                      </a>
                    </div>
                    <div className="pt-3">
                      <p>
                        I designed and developed an Excel clone, a web
                        application built entirely using HTML, CSS, and
                        JavaScript. This project demonstrates my proficiency in
                        front-end web development and DOM (Document Object
                        Model) manipulation to create a familiar spreadsheet
                        application in the browser.
                        <br />
                        <span className="">Key Features : </span>
                        Cell Formatting, Formula formatting, Different fonts
                        with different sizes, Undo/Redo
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="p-3 d-flex flex-column justify-content-between">
                    <div className="d-flex align-items-center">
                      <i
                        className="fas fa-circle me-2"
                        style={{ fontSize: "8px" }}
                      ></i>{" "}
                      <a
                        className="underline"
                        href="https://movieespedia.netlify.app"
                        target="_black"
                        style={{ textDecoration: "none" }}
                      >
                        <span className=" fs-4 text-white">WhatsApp Clone</span>
                      </a>
                    </div>
                    <div className="pt-3">
                      <p>
                        I designed and developed a WhatsApp clone, a full-stack
                        web application, using the MERN stack (MongoDB,
                        Express.js, React, Node.js). This project offers a
                        real-time messaging platform closely mirroring the
                        functionality of the popular WhatsApp application.
                        Integrated Socket.io for real-time communication between
                        clients and the server. Managing real-time messaging
                        efficiently and securely was a significant challenge,
                        but it was successfully overcome by utilizing Socket.io
                        for WebSocket communication. But Not Responsive.
                        <br />
                        <span className="">Key Features : </span>
                        Real-time Messaging, User Authentication, Message Status
                        Indicators
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="skills">
          <div className="pt-5 pb-3 d-flex justify-content-center flex-column align-items-center skill-cont">
            <div className="text-white">
              <h1 className="">My Skills</h1>
            </div>
            <div class="mt-3 container-fluid text-start">
              <div class="row g-2">
                <div class="col-6">
                  <div class="p-3 d-flex justify-content-between skill-name">
                    <div className="">C++</div>
                    <div className="">80%</div>
                  </div>
                  <div className="score">
                    <div className="score-sub-1"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3 d-flex justify-content-between skill-name">
                    <div className="">Core Java</div>
                    <div className="">90%</div>
                  </div>
                  <div className="score">
                    <div className="score-sub-2"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3 d-flex justify-content-between skill-name">
                    <div className="">React.js</div>
                    <div className="">95%</div>
                  </div>
                  <div className="score">
                    <div className="score-sub-3"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3 d-flex justify-content-between skill-name">
                    <div className="">Node.js</div>
                    <div className="">85%</div>
                  </div>
                  <div className="score">
                    <div className="score-sub-4"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3 d-flex justify-content-between skill-name">
                    <div className="">DSA</div>
                    <div className="">90%</div>
                  </div>
                  <div className="score">
                    <div className="score-sub-5"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3 d-flex justify-content-between skill-name">
                    <div className="">HTML</div>
                    <div className="">80%</div>
                  </div>
                  <div className="score">
                    <div className="score-sub-6"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3 d-flex justify-content-between skill-name">
                    <div className="">CSS</div>
                    <div className="">87%</div>
                  </div>
                  <div className="score">
                    <div className="score-sub-7"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3 d-flex justify-content-between skill-name">
                    <div className="">Python</div>
                    <div className="">70%</div>
                  </div>
                  <div className="score">
                    <div className="score-sub-8"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3 d-flex justify-content-between skill-name">
                    <div className="">JavaScript</div>
                    <div className="">91%</div>
                  </div>
                  <div className="score">
                    <div className="score-sub-9"></div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="p-3 d-flex justify-content-between skill-name">
                    <div className="">C language</div>
                    <div className="">80%</div>
                  </div>
                  <div className="score">
                    <div className="score-sub-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer">
          <Contact />
        </div>
      </div>
    </>
  );
}
