function Contact() {
  return (
    <contact>
      <div class="container my-5">
        <div class="container bg-light my-5 border rounded-4 shadow-lg">
          <div class="container px-4 py-5" id="custom-cards">
            <div class="container py-5">
              <div class="row min-vh-50 align-items-center">
                <div class="col-md-12 text-center">
                  <div class="lc-block mb-4">
                    <div editable="rich">
                      <h2 class="display-3 fw-bolder">Reach me</h2>
                      <p>
                        The digital revolution has taken over, and while I may
                        not be local to you, I am definitely reachable.{" "}
                        <br></br> Just send me an email or a message on social
                        media.
                      </p>
                      <p class="fs-3">
                        <a
                          href="mailto:info@mgdevelops2.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="bi bi-envelope-plus fs-1 text-primary"></i>
                        </a>
                        {" • "}
                        <a
                          href="https://www.linkedin.com/in/mgdevelops2/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="bi bi-linkedin fs-1 text-primary"></i>
                        </a>
                        {" • "}
                        <a
                          href="https://twitter.com/mgdevelops2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="bi bi-twitter fs-1 text-primary"></i>
                        </a>
                        {" • "}
                        <a
                          href="https://github.com/mgdevelops2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="bi bi-github fs-1 text-primary"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* <!-- /lc-block --> */}
                  {/* <div class="lc-block mb-5">
                  <a
                    class="btn btn-lg btn-dark"
                    href="https://goo.gl/maps/zy3NkDKV3x4iyUkL9"
                    role="button"
                  >
                    VIEW MAP
                  </a>
                </div> */}
                  {/* <!-- /lc-block --> */}
                  <div class="lc-block border-top col-md-6 offset-md-3">
                    <div editable="rich">
                      <h2 class="fw-bolder">
                        <br></br>
                      </h2>
                    </div>
                  </div>
                  <div class="lc-block mb-4">
                    <div editable="rich">
                      <h2 class="fw-bolder">Working Hours</h2>
                    </div>
                  </div>
                  <div class="lc-block">
                    <div editable="rich">
                      <p>Monday to Friday: 08:00 – 19:45 EST</p>
                      <p>Saturday to Sunday: 10:00 – 17:00 EST</p>
                    </div>
                  </div>
                  {/* <!-- /lc-block --> */}
                </div>
                {/* <!-- /col --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </contact>
  );
}

export default Contact;
