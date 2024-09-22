function Footer() {
  return (
    <footer className="footer -dashboard mt-60">
      <div className="footer__row row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="row y-gap-20 items-center">
            <div className="col-auto">
              <div className="text-14 lh-14 mr-30">
                © 2022 GoTrip LLC All rights reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="row x-gap-20 y-gap-10 items-center text-14">
                <div className="col-auto">
                  <a href="#" className="text-13 lh-1">
                    Privacy
                  </a>
                </div>
                <div className="col-auto">
                  <a href="#" className="text-13 lh-1">
                    Terms
                  </a>
                </div>
                <div className="col-auto">
                  <a href="#" className="text-13 lh-1">
                    Site Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="d-flex x-gap-5 y-gap-5 items-center">
            <button className="text-14 fw-500 underline">English (US)</button>
            <button className="text-14 fw-500 underline">USD</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
