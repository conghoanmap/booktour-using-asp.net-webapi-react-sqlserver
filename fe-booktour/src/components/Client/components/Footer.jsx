function Footer() {
  return (
    <>
      <section className="layout-pt-md layout-pb-md bg-dark-2">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-auto">
              <div className="row y-gap-20  flex-wrap items-center">
                <div className="col-auto">
                  <div className="icon-newsletter text-60 sm:text-40 text-white"></div>
                </div>

                <div className="col-auto">
                  <h4 className="text-26 text-white fw-600">
                    Your Travel Journey Starts Here
                  </h4>
                  <div className="text-white">
                    Sign up and we will send the best deals to you
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
                <div>
                  <input
                    className="bg-white h-60"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <button className="button -md h-60 bg-blue-1 text-white">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer -type-2 bg-blue-1 text-white">
        <div className="container">
          <div className="pt-60 pb-60">
            <div className="row y-gap-40 justify-between xl:justify-start">
              <div className="col-xl-4 col-lg-6">
                <img src="src/assets/img/general/logo-light.svg" alt="image" />

                <div className="row y-gap-30 justify-between pt-30">
                  <div className="col-sm-6">
                    <div className="text-14">Toll Free Customer Care</div>
                    <a href="#" className="text-18 fw-500 mt-5">
                      +(1) 123 456 7890
                    </a>
                  </div>

                  <div className="col-sm-5">
                    <div className="text-14">Need live support?</div>
                    <a href="#" className="text-18 fw-500 mt-5">
                      hi@gotrip.com
                    </a>
                  </div>
                </div>

                <div className="row x-gap-20 y-gap-15 pt-60">
                  <div className="col-12">
                    <h5 className="text-16 fw-500">
                      Your all-in-one travel app
                    </h5>
                  </div>

                  <div className="col-auto col-lg-6">
                    <div className="d-flex items-center px-20 py-10 rounded-4 bg-white-10">
                      <div className="icon-apple text-24"></div>
                      <div className="ml-20">
                        <div className="text-14 lh-14">Download on the</div>
                        <div className="text-15 lh-14 fw-500">Apple Store</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-auto col-lg-6">
                    <div className="d-flex items-center px-20 py-10 rounded-4 bg-white-10">
                      <div className="icon-play-market text-24"></div>
                      <div className="ml-20">
                        <div className="text-14 lh-14">Get in on</div>
                        <div className="text-15 lh-14 fw-500">Google Play</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-60">
                  <h5 className="text-16 fw-500 mb-10">
                    Follow us on social media
                  </h5>

                  <div className="d-flex x-gap-20 items-center">
                    <a href="#">
                      <i className="icon-facebook text-14"></i>
                    </a>
                    <a href="#">
                      <i className="icon-twitter text-14"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram text-14"></i>
                    </a>
                    <a href="#">
                      <i className="icon-linkedin text-14"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row y-gap-30">
                  <div className="col-12">
                    <h5 className="text-16 fw-500 mb-15">Get Updates & More</h5>

                    <div className="single-field relative d-flex justify-end items-center pb-30">
                      <input
                        className="bg-white rounded-8"
                        type="email"
                        placeholder="Your Email"
                      />
                      <button className="absolute px-20 h-full text-15 fw-500 underline text-dark-1">
                        Subscribe
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <h5 className="text-16 fw-500 mb-30">Company</h5>
                    <div className="d-flex y-gap-5 flex-column">
                      <a href="#">About Us</a>
                      <a href="#">Careers</a>
                      <a href="#">Blog</a>
                      <a href="#">Press</a>
                      <a href="#">Gift Cards</a>
                      <a href="#">Magazine</a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <h5 className="text-16 fw-500 mb-30">Support</h5>
                    <div className="d-flex y-gap-5 flex-column">
                      <a href="#">Contact</a>
                      <a href="#">Legal Notice</a>
                      <a href="#">Privacy Policy</a>
                      <a href="#">Terms and Conditions</a>
                      <a href="#">Sitemap</a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <h5 className="text-16 fw-500 mb-30">Other Services</h5>
                    <div className="d-flex y-gap-5 flex-column">
                      <a href="#">Car hire</a>
                      <a href="#">Activity Finder</a>
                      <a href="#">Tour List</a>
                      <a href="#">Flight finder</a>
                      <a href="#">Cruise Ticket</a>
                      <a href="#">Holiday Rental</a>
                      <a href="#">Travel Agents</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-20 border-top-white-15">
            <div className="row justify-between items-center y-gap-10">
              <div className="col-auto">
                <div className="row x-gap-30 y-gap-10">
                  <div className="col-auto">
                    <div className="text-14">
                      © 2022 GoTrip LLC All rights reserved.
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex x-gap-15 text-14">
                      <a href="#" className="d-flex items-center">
                        <span className="size-4 rounded-full bg-white mr-10"></span>
                        Privacy
                      </a>
                      <a href="#" className="d-flex items-center">
                        <span className="size-4 rounded-full bg-white mr-10"></span>
                        Terms
                      </a>
                      <a href="#" className="d-flex items-center">
                        <span className="size-4 rounded-full bg-white mr-10"></span>
                        Site Map
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="row y-gap-10 items-center">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <button className="d-flex items-center text-14 fw-500 text-white mr-10">
                        <i className="icon-globe text-16 mr-10"></i>
                        <span className="underline">English (US)</span>
                      </button>

                      <button className="d-flex items-center text-14 fw-500 text-white">
                        <i className="icon-usd text-16 mr-10"></i>
                        <span className="underline">USD</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
