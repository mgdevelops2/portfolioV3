import Logo from "../../Assets/Logo.png";
function Footer() {
  return (
    <section>
      <div class="container py-6">
        <div class="lc-block d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4">
            <div editable="rich">
              <p class="small text-muted mb-0 text-dark">
                &copy; Copyrights. All rights reserved.{" "}
                <a
                  href="https://twitter.com/mgdevelops2"
                  target="_blank"
                  rel="noreferrer"
                >
                  @mgdevelops2
                </a>
              </p>{" "}
            </div>
          </div>
          {/* <!-- /lc-block --> */}
          <div class="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto col-md-4">
            <div class="lc-block text-center">
              <a class="navbar-brand" href="/portolfiov3/">
                <img
                  class="img-fluid me-1"
                  src={Logo}
                  alt="my brand"
                  width="75"
                  height="auto"
                ></img>
              </a>
            </div>
          </div>
          <div class="col-md-4 navbar-expand-md">
            <div lc-helper="shortcode" class="live-shortcode">
              {/* <!--  lc_nav_menu -->  */}
              <ul
                id="menu-menu-1"
                class="navbar-nav me-auto mb-2 mb-md-0 flex-wrap justify-content-end"
              >
                <p class="fs-5">
                  <a
                    href="mailto:info@mgdevelops2.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bi bi-envelope-plus fs-5 text-primary"></i>
                  </a>
                  {" • "}
                  <a
                    href="https://www.linkedin.com/in/mgdevelops2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bi bi-linkedin fs-5 text-primary"></i>
                  </a>
                  {" • "}
                  <a
                    href="https://twitter.com/mgdevelops2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bi bi-twitter fs-5 text-primary"></i>
                  </a>
                  {" • "}
                  <a
                    href="https://github.com/mgdevelops2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bi bi-github fs-5 text-primary"></i>
                  </a>
                </p>
              </ul>
              {/* <!-- /lc_nav_menu -->  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
