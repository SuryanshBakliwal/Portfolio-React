import React from "react";

export default function Contact() {
  return (
    <div className="container text-white">
      <footer class="text-center text-white">
        <div class="container pt-4">
          <section class="mb-4">
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://www.instagram.com/suryansh.bakliwal/?igsh=NnEOOG1uanJjOGJ2"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://www.linkedin.com/in/suryansh-bakliwal-193303211/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body m-1"
              href="https://github.com/SuryanshBakliwal"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>
        <hr />
        <div
          class="text-center p-3"
          style={{ backgroundColor: " rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright: Suryansh Bakliwal
        </div>
      </footer>
    </div>
  );
}
