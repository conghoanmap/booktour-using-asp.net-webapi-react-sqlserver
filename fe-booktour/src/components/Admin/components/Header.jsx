function Header() {
  return (
    <header
      data-add-bg=""
      className="header -dashboard bg-white js-header"
      data-x="header"
      data-x-toggle="is-menu-opened"
    >
      <div data-anim="fade" className="header__container px-30 sm:px-20">
        <div className="-left-side">
          <a
            href="index.html"
            className="header-logo"
            data-x="header-logo"
            data-x-toggle="is-logo-dark"
          >
            <img src="src/assets/img/general/logo-dark.svg" alt="logo icon" />
            <img src="src/assets/img/general/logo-dark.svg" alt="logo icon" />
          </a>
        </div>

        <div className="row justify-between items-center pl-60 lg:pl-20">
          <div className="col-auto">
            <div className="d-flex items-center">
              <button data-x-click="dashboard">
                <i className="icon-menu-2 text-20"></i>
              </button>

              <div className="single-field relative d-flex items-center md:d-none ml-30">
                <input
                  className="pl-50 border-light text-dark-1 h-50 rounded-8"
                  type="email"
                  placeholder="Search"
                />
                <button className="absolute d-flex items-center h-full">
                  <i className="icon-search text-20 px-15 text-dark-1"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex items-center">
              <div
                className="header-menu "
                data-x="mobile-menu"
                data-x-toggle="is-menu-active"
              >
                <div className="mobile-overlay"></div>

                <div className="header-menu__content">
                  <div className="mobile-bg js-mobile-bg"></div>

                  <div className="menu js-navList">
                    <ul className="menu__nav text-dark-1 fw-500 -is-active">
                      <li className="menu-item-has-children">
                        <a data-barba href="#">
                          <span className="mr-10">Home</span>
                          <i className="icon icon-chevron-sm-down"></i>
                        </a>

                        <ul className="subnav">
                          <li className="subnav__backBtn js-nav-list-back">
                            <a href="#">
                              <i className="icon icon-chevron-sm-down"></i> Home
                            </a>
                          </li>

                          <li>
                            <a href="index.html">Home 1</a>
                          </li>

                          <li>
                            <a href="home-2.html">Home 2</a>
                          </li>

                          <li>
                            <a href="home-3.html">Home 3</a>
                          </li>

                          <li>
                            <a href="home-4.html">Home 4</a>
                          </li>

                          <li>
                            <a href="home-5.html">Home 5</a>
                          </li>

                          <li>
                            <a href="home-6.html">Home 6</a>
                          </li>

                          <li>
                            <a href="home-7.html">Home 7</a>
                          </li>

                          <li>
                            <a href="home-8.html">Home 8</a>
                          </li>

                          <li>
                            <a href="home-9.html">Home 9</a>
                          </li>

                          <li>
                            <a href="home-10.html">Home 10</a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children -has-mega-menu">
                        <a data-barba href="#">
                          <span className="mr-10">Categories</span>
                          <i className="icon icon-chevron-sm-down"></i>
                        </a>

                        <div className="mega">
                          <div className="tabs -underline-2 js-tabs">
                            <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
                              <div className="col-auto">
                                <button
                                  className="tabs__button text-light-1 fw-500 js-tabs-button is-tab-el-active"
                                  data-tab-target=".-tab-item-1"
                                >
                                  Hotel
                                </button>
                              </div>

                              <div className="col-auto">
                                <button
                                  className="tabs__button text-light-1 fw-500 js-tabs-button "
                                  data-tab-target=".-tab-item-2"
                                >
                                  Tour
                                </button>
                              </div>

                              <div className="col-auto">
                                <button
                                  className="tabs__button text-light-1 fw-500 js-tabs-button "
                                  data-tab-target=".-tab-item-3"
                                >
                                  Activity
                                </button>
                              </div>

                              <div className="col-auto">
                                <button
                                  className="tabs__button text-light-1 fw-500 js-tabs-button "
                                  data-tab-target=".-tab-item-4"
                                >
                                  Holiday Rentals
                                </button>
                              </div>

                              <div className="col-auto">
                                <button
                                  className="tabs__button text-light-1 fw-500 js-tabs-button "
                                  data-tab-target=".-tab-item-5"
                                >
                                  Car
                                </button>
                              </div>

                              <div className="col-auto">
                                <button
                                  className="tabs__button text-light-1 fw-500 js-tabs-button "
                                  data-tab-target=".-tab-item-6"
                                >
                                  Cruise
                                </button>
                              </div>

                              <div className="col-auto">
                                <button
                                  className="tabs__button text-light-1 fw-500 js-tabs-button "
                                  data-tab-target=".-tab-item-7"
                                >
                                  Flights
                                </button>
                              </div>
                            </div>

                            <div className="tabs__content js-tabs-content">
                              <div className="tabs__pane -tab-item-1 is-tab-el-active">
                                <div className="mega__content">
                                  <div className="mega__grid">
                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Hotel List
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="hotel-list-1.html">
                                            Hotel List v1
                                          </a>
                                        </div>

                                        <div>
                                          <a href="hotel-list-2.html">
                                            Hotel List v2
                                          </a>
                                        </div>

                                        <div>
                                          <a href="hotel-half-map.html">
                                            Hotel List v3
                                          </a>
                                        </div>

                                        <div>
                                          <a href="hotel-grid-1.html">
                                            Hotel List v4
                                          </a>
                                        </div>

                                        <div>
                                          <a href="hotel-grid-2.html">
                                            Hotel List v5
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Hotel Single
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="hotel-single-1.html">
                                            Hotel Single v1
                                          </a>
                                        </div>

                                        <div>
                                          <a href="hotel-single-2.html">
                                            Hotel Single v2
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Hotel Booking
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="booking-pages.html">
                                            Booking Page
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mega__image d-flex relative">
                                    <img
                                      src="#"
                                      data-src="src/assets/img/backgrounds/7.png"
                                      alt="image"
                                      className="rounded-4 js-lazy"
                                    />

                                    <div className="absolute w-full h-full px-30 py-24">
                                      <div className="text-22 fw-500 lh-15 text-white">
                                        Things to do on <br /> your trip
                                      </div>
                                      <button className="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                        Experinces
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="tabs__pane -tab-item-2">
                                <div className="mega__content">
                                  <div className="mega__grid">
                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Tour List
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="tour-list-1.html">
                                            Tour List v1
                                          </a>
                                        </div>

                                        <div>
                                          <a href="tour-grid-1.html">
                                            Tour List v2
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Tour Pages
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="tour-map.html">Tour Map</a>
                                        </div>

                                        <div>
                                          <a href="tour-single.html">
                                            Tour Single
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mega__image d-flex relative">
                                    <img
                                      src="src/assets/img/backgrounds/7.png"
                                      alt="image"
                                      className="rounded-4"
                                    />

                                    <div className="absolute w-full h-full px-30 py-24">
                                      <div className="text-22 fw-500 lh-15 text-white">
                                        Things to do on <br /> your trip
                                      </div>
                                      <button className="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                        Experinces
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="tabs__pane -tab-item-3">
                                <div className="mega__content">
                                  <div className="mega__grid">
                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Activity List
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="activity-list-1.html">
                                            Activity List v1
                                          </a>
                                        </div>

                                        <div>
                                          <a href="activity-grid-1.html">
                                            Activity List v2
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Activity Pages
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="activity-map.html">
                                            Activity Map
                                          </a>
                                        </div>

                                        <div>
                                          <a href="activity-single.html">
                                            Activity Single
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mega__image d-flex relative">
                                    <img
                                      src="src/assets/img/backgrounds/7.png"
                                      alt="image"
                                      className="rounded-4"
                                    />

                                    <div className="absolute w-full h-full px-30 py-24">
                                      <div className="text-22 fw-500 lh-15 text-white">
                                        Things to do on <br /> your trip
                                      </div>
                                      <button className="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                        Experinces
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="tabs__pane -tab-item-4">
                                <div className="mega__content">
                                  <div className="mega__grid">
                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Rental List
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="rental-list-1.html">
                                            Rental List v1
                                          </a>
                                        </div>

                                        <div>
                                          <a href="rental-grid-1.html">
                                            Rental List v2
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Rental Pages
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="rental-map.html">
                                            Rental Map
                                          </a>
                                        </div>

                                        <div>
                                          <a href="rental-single.html">
                                            Rental Single
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mega__image d-flex relative">
                                    <img
                                      src="src/assets/img/backgrounds/7.png"
                                      alt="image"
                                      className="rounded-4"
                                    />

                                    <div className="absolute w-full h-full px-30 py-24">
                                      <div className="text-22 fw-500 lh-15 text-white">
                                        Things to do on <br /> your trip
                                      </div>
                                      <button className="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                        Experinces
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="tabs__pane -tab-item-5">
                                <div className="mega__content">
                                  <div className="mega__grid">
                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Car List
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="car-list-1.html">
                                            Car List v1
                                          </a>
                                        </div>

                                        <div>
                                          <a href="car-grid-1.html">
                                            Car List v2
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Car Pages
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="car-map.html">Car Map</a>
                                        </div>

                                        <div>
                                          <a href="car-single.html">
                                            Car Single
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mega__image d-flex relative">
                                    <img
                                      src="src/assets/img/backgrounds/7.png"
                                      alt="image"
                                      className="rounded-4"
                                    />

                                    <div className="absolute w-full h-full px-30 py-24">
                                      <div className="text-22 fw-500 lh-15 text-white">
                                        Things to do on <br /> your trip
                                      </div>
                                      <button className="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                        Experinces
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="tabs__pane -tab-item-6">
                                <div className="mega__content">
                                  <div className="mega__grid">
                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Cruise List
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="cruise-list-1.html">
                                            Cruise List v1
                                          </a>
                                        </div>

                                        <div>
                                          <a href="cruise-grid-1.html">
                                            Cruise List v2
                                          </a>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Cruise Pages
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="cruise-map.html">
                                            Cruise Map
                                          </a>
                                        </div>

                                        <div>
                                          <a href="cruise-single.html">
                                            Cruise Single
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mega__image d-flex relative">
                                    <img
                                      src="src/assets/img/backgrounds/7.png"
                                      alt="image"
                                      className="rounded-4"
                                    />

                                    <div className="absolute w-full h-full px-30 py-24">
                                      <div className="text-22 fw-500 lh-15 text-white">
                                        Things to do on <br /> your trip
                                      </div>
                                      <button className="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                        Experinces
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="tabs__pane -tab-item-7">
                                <div className="mega__content">
                                  <div className="mega__grid">
                                    <div className="mega__item">
                                      <div className="text-15 fw-500">
                                        Flight List
                                      </div>
                                      <div className="y-gap-5 text-15 pt-5">
                                        <div>
                                          <a href="flights-list.html">
                                            Flight list v1
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mega__image d-flex relative">
                                    <img
                                      src="src/assets/img/backgrounds/7.png"
                                      alt="image"
                                      className="rounded-4"
                                    />

                                    <div className="absolute w-full h-full px-30 py-24">
                                      <div className="text-22 fw-500 lh-15 text-white">
                                        Things to do on <br /> your trip
                                      </div>
                                      <button className="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                        Experinces
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <ul className="subnav mega-mobile">
                          <li className="subnav__backBtn js-nav-list-back">
                            <a href="#">
                              <i className="icon icon-chevron-sm-down"></i>{" "}
                              Category
                            </a>
                          </li>

                          <li className="menu-item-has-children">
                            <a data-barba href="#">
                              <span className="mr-10">Hotel</span>
                              <i className="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul className="subnav">
                              <li className="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i className="icon icon-chevron-sm-down"></i>{" "}
                                  Hotel
                                </a>
                              </li>

                              <li>
                                <a href="hotel-list-1.html">Hotel List v1</a>
                              </li>

                              <li>
                                <a href="hotel-list-2.html">Hotel List v2</a>
                              </li>

                              <li>
                                <a href="hotel-single-1.html">
                                  Hotel Single v1
                                </a>
                              </li>

                              <li>
                                <a href="hotel-single-2.html">
                                  Hotel Single v2
                                </a>
                              </li>

                              <li>
                                <a href="booking-pages.html">Booking Page</a>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-item-has-children">
                            <a data-barba href="#">
                              <span className="mr-10">Tour</span>
                              <i className="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul className="subnav">
                              <li className="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i className="icon icon-chevron-sm-down"></i>{" "}
                                  Tour
                                </a>
                              </li>

                              <li>
                                <a href="tour-list-1.html">Tour List v1</a>
                              </li>

                              <li>
                                <a href="tour-grid-1.html">Tour List v2</a>
                              </li>

                              <li>
                                <a href="tour-map.html">Tour Map</a>
                              </li>

                              <li>
                                <a href="tour-single.html">Tour Single</a>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-item-has-children">
                            <a data-barba href="#">
                              <span className="mr-10">Activity</span>
                              <i className="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul className="subnav">
                              <li className="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i className="icon icon-chevron-sm-down"></i>{" "}
                                  Activity
                                </a>
                              </li>

                              <li>
                                <a href="activity-list-1.html">
                                  Activity List v1
                                </a>
                              </li>

                              <li>
                                <a href="activity-grid-1.html">
                                  Activity List v2
                                </a>
                              </li>

                              <li>
                                <a href="activity-map.html">Activity Map</a>
                              </li>

                              <li>
                                <a href="activity-single.html">
                                  Activity Single
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-item-has-children">
                            <a data-barba href="#">
                              <span className="mr-10">Rental</span>
                              <i className="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul className="subnav">
                              <li className="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i className="icon icon-chevron-sm-down"></i>{" "}
                                  Rental
                                </a>
                              </li>

                              <li>
                                <a href="rental-list-1.html">Rental List v1</a>
                              </li>

                              <li>
                                <a href="rental-grid-1.html">Rental List v2</a>
                              </li>

                              <li>
                                <a href="rental-map.html">Rental Map</a>
                              </li>

                              <li>
                                <a href="rental-single.html">Rental Single</a>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-item-has-children">
                            <a data-barba href="#">
                              <span className="mr-10">Car</span>
                              <i className="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul className="subnav">
                              <li className="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i className="icon icon-chevron-sm-down"></i>{" "}
                                  Car
                                </a>
                              </li>

                              <li>
                                <a href="car-list-1.html">Car List v1</a>
                              </li>

                              <li>
                                <a href="car-grid-1.html">Car List v2</a>
                              </li>

                              <li>
                                <a href="car-map.html">Car Map</a>
                              </li>

                              <li>
                                <a href="car-single.html">Car Single</a>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-item-has-children">
                            <a data-barba href="#">
                              <span className="mr-10">Cruise</span>
                              <i className="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul className="subnav">
                              <li className="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i className="icon icon-chevron-sm-down"></i>{" "}
                                  Cruise
                                </a>
                              </li>

                              <li>
                                <a href="cruise-list-1.html">Cruise List v1</a>
                              </li>

                              <li>
                                <a href="cruise-grid-1.html">Cruise List v2</a>
                              </li>

                              <li>
                                <a href="cruise-map.html">Cruise Map</a>
                              </li>

                              <li>
                                <a href="cruise-single.html">Cruise Single</a>
                              </li>
                            </ul>
                          </li>

                          <li className="menu-item-has-children">
                            <a data-barba href="#">
                              <span className="mr-10">Flights</span>
                              <i className="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul className="subnav">
                              <li className="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i className="icon icon-chevron-sm-down"></i>{" "}
                                  Flights
                                </a>
                              </li>

                              <li>
                                <a href="flights-list.html">Flights List v1</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="destinations.html">Destinations</a>
                      </li>

                      <li className="menu-item-has-children">
                        <a data-barba href="#">
                          <span className="mr-10">Blog</span>
                          <i className="icon icon-chevron-sm-down"></i>
                        </a>

                        <ul className="subnav">
                          <li className="subnav__backBtn js-nav-list-back">
                            <a href="#">
                              <i className="icon icon-chevron-sm-down"></i> Blog
                            </a>
                          </li>

                          <li>
                            <a href="blog-list-1.html">Blog list v1</a>
                          </li>

                          <li>
                            <a href="blog-list-2.html">Blog list v2</a>
                          </li>

                          <li>
                            <a href="blog-single.html">Blog single</a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a data-barba href="#">
                          <span className="mr-10">Pages</span>
                          <i className="icon icon-chevron-sm-down"></i>
                        </a>

                        <ul className="subnav">
                          <li className="subnav__backBtn js-nav-list-back">
                            <a href="#">
                              <i className="icon icon-chevron-sm-down"></i>{" "}
                              Pages
                            </a>
                          </li>

                          <li>
                            <a href="404.html">404</a>
                          </li>

                          <li>
                            <a href="about.html">About</a>
                          </li>

                          <li>
                            <a href="become-expert.html">Become expert</a>
                          </li>

                          <li>
                            <a href="help-center.html">Help center</a>
                          </li>

                          <li>
                            <a href="login.html">Login</a>
                          </li>

                          <li>
                            <a href="signup.html">Register</a>
                          </li>

                          <li>
                            <a href="terms.html">Terms</a>
                          </li>

                          <li>
                            <a href="invoice.html">Invoice</a>
                          </li>

                          <li>
                            <a href="ui-elements.html">UI elements</a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <a data-barba href="#">
                          <span className="mr-10">Dashboard</span>
                          <i className="icon icon-chevron-sm-down"></i>
                        </a>

                        <ul className="subnav">
                          <li className="subnav__backBtn js-nav-list-back">
                            <a href="#">
                              <i className="icon icon-chevron-sm-down"></i>{" "}
                              Dashboard
                            </a>
                          </li>

                          <li>
                            <a href="db-dashboard.html">Dashboard</a>
                          </li>

                          <li>
                            <a href="db-booking.html">Booking</a>
                          </li>

                          <li>
                            <a href="db-settings.html">Settings</a>
                          </li>

                          <li>
                            <a href="db-wishlist.html">Wishlist</a>
                          </li>

                          <li>
                            <a href="db-vendor-dashboard.html">
                              Vendor dashboard
                            </a>
                          </li>

                          <li>
                            <a href="db-vendor-add-hotel.html">
                              Vendor add hotel
                            </a>
                          </li>

                          <li>
                            <a href="db-vendor-booking.html">Vendor booking</a>
                          </li>

                          <li>
                            <a href="db-vendor-hotels.html">Vendor hotels</a>
                          </li>

                          <li>
                            <a href="db-vendor-recovery.html">
                              Vendor recovery
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer"></div>
                </div>
              </div>

              <div className="row items-center x-gap-5 y-gap-20 pl-20 lg:d-none">
                <div className="col-auto">
                  <button className="button -blue-1-05 size-50 rounded-22 flex-center">
                    <i className="icon-email-2 text-20"></i>
                  </button>
                </div>

                <div className="col-auto">
                  <button className="button -blue-1-05 size-50 rounded-22 flex-center">
                    <i className="icon-notification text-20"></i>
                  </button>
                </div>
              </div>

              <div className="pl-15">
                <img
                  src="src/assets/img/avatars/3.png"
                  alt="image"
                  className="size-50 rounded-22 object-cover"
                />
              </div>

              <div
                className="d-none xl:d-flex x-gap-20 items-center pl-20"
                data-x="header-mobile-icons"
                data-x-toggle="text-white"
              >
                <div>
                  <button
                    className="d-flex items-center icon-menu text-20"
                    data-x-click="html, header, header-logo, header-mobile-icons, mobile-menu"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
