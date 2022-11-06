import Selfie from "../../Assets/Selfie.png";
function AboutMe() {
  return (
    <div class="container py-6">
      <div class="container row align-items-center my-5">
        <div class="col-md-6">
          <div class="lc-block mb-4">
            <div editable="rich">
              <h3 class="fst-italic">Hey!</h3>
              <h2 class="fw-bold lh-1 mb-3">I'm Mike Gonzalez.</h2>
              <h5 class="fw-bold">
                Front-End Developer | Web Designer | Content Creator
              </h5>
            </div>
          </div>
          <div class="lc-block mb-5">
            <div editable="rich">
              <p class="lead">
                I love to learn new tech, and I build things that live on the
                internet. Some of the technologies I work with are:
                <i class="fab bi-filetype-html fs-4 text-primary">,</i>
                <i class="fab fa-css3-alt fs-4 text-primary">,</i>
                <i class="fab fa-js-square fs-4 text-primary">,</i>
                <i class="fab fa-bootstrap fs-4 text-primary">,</i>
                <i class="fab fa-react fs-4 text-primary">,</i>
                <i class="fab fa-node fs-4 text-primary">,</i>
                <i class="fab bi bi-filetype-json fs-4 text-primary">,</i>
                <i class="fab fa-sass fs-4 text-primary"> </i>
                <i class="fab fa-wix fs-4 text-primary">, and</i>
                <i class="fab fa-wordpress fs-4 text-primary">.</i>
              </p>
              {/* <p class="lead">Keep scrolling, to see some of my work.</p> */}
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start ">
              {/* <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
              {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
              <h4>{/* <i class="bi bi-arrow-down fs-1"></i> */}</h4>
            </div>
          </div>
        </div>
        <div class="mt-4 mt-md-0 col-md-6">
          <div class="lc-block px-4">
            {/* <!--  If you want to remove px-4 please add overflow-hidden class to the section --> */}
            <div class="position-relative">
              <div class="lc-block position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 mt-4 ms-4 rounded-4 shadow-lg">
                {" "}
              </div>

              <img
                class="position-relative img-fluid rounded-4 shadow-lg"
                src={Selfie}
                sizes="(max-width: 1080px) 100vw, 1080px"
                width="1080"
                height="1080"
                alt="Selfie"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
