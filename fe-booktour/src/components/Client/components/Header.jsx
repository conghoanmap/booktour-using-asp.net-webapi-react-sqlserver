import React, { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
import { Link } from "react-router-dom";
import AccountService from "../../../services/AccountService";

const Header = () => {
  const context = useContext(GlobalContext);

  const handleLogout = () => {
    if (context.isLogin) {
      // context.setAllInfoUser({});
      context.setIsLogin(false);
      AccountService.Logout();
      // navigate("/login");
    }
  };
  return (
    <>
      <div className="header-margin"></div>
      {/* <header
        data-add-bg="-header-5-sticky"
        classNameName="header -type-5 js-header"
        data-x="header"
        data-x-toggle="is-menu-opened"
      >
        <div data-anim="fade" classNameName="header__container container">
          <div classNameName="row justify-between items-center">
            <div classNameName="col-auto">
              <div classNameName="d-flex items-center">
                <div classNameName="mr-20">
                  <button
                    classNameName="d-flex items-center icon-menu text-dark-1 text-20"
                    data-x-click="desktopMenu"
                  ></button>
                </div>

                <a
                  href="index.html"
                  classNameName="header-logo mr-20"
                  data-x="header-logo"
                  data-x-toggle="is-logo-dark"
                >
                  <img
                    src="src/assets/src/assets/img/general/logo-dark.svg"
                    alt="logo icon"
                  />
                  <img
                    src="src/assets/src/assets/img/general/logo-dark.svg"
                    alt="logo icon"
                  />
                </a>

                <div
                  classNameName="header-menu "
                  data-x="mobile-menu"
                  data-x-toggle="is-menu-active"
                >
                  <div classNameName="mobile-overlay"></div>

                  <div classNameName="header-menu__content">
                    <div classNameName="mobile-bg js-mobile-bg"></div>

                    <div classNameName="menu js-navList">
                      <ul classNameName="menu__nav text-dark-1 -is-active">
                        <li classNameName="menu-item-has-children">
                          <a data-barba href="#">
                            <span classNameName="mr-10">Home</span>
                            <i classNameName="icon icon-chevron-sm-down"></i>
                          </a>

                          <ul classNameName="subnav">
                            <li classNameName="subnav__backBtn js-nav-list-back">
                              <a href="#">
                                <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                Home
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

                        <li classNameName="menu-item-has-children -has-mega-menu">
                          <a data-barba href="#">
                            <span classNameName="mr-10">Categories</span>
                            <i classNameName="icon icon-chevron-sm-down"></i>
                          </a>

                          <div classNameName="mega">
                            <div classNameName="tabs -underline-2 js-tabs">
                              <div classNameName="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
                                <div classNameName="col-auto">
                                  <button
                                    classNameName="tabs__button text-light-1 fw-500 js-tabs-button is-tab-el-active"
                                    data-tab-target=".-tab-item-1"
                                  >
                                    Hotel
                                  </button>
                                </div>

                                <div classNameName="col-auto">
                                  <button
                                    classNameName="tabs__button text-light-1 fw-500 js-tabs-button "
                                    data-tab-target=".-tab-item-2"
                                  >
                                    Tour
                                  </button>
                                </div>

                                <div classNameName="col-auto">
                                  <button
                                    classNameName="tabs__button text-light-1 fw-500 js-tabs-button "
                                    data-tab-target=".-tab-item-3"
                                  >
                                    Activity
                                  </button>
                                </div>

                                <div classNameName="col-auto">
                                  <button
                                    classNameName="tabs__button text-light-1 fw-500 js-tabs-button "
                                    data-tab-target=".-tab-item-4"
                                  >
                                    Holiday Rentals
                                  </button>
                                </div>

                                <div classNameName="col-auto">
                                  <button
                                    classNameName="tabs__button text-light-1 fw-500 js-tabs-button "
                                    data-tab-target=".-tab-item-5"
                                  >
                                    Car
                                  </button>
                                </div>

                                <div classNameName="col-auto">
                                  <button
                                    classNameName="tabs__button text-light-1 fw-500 js-tabs-button "
                                    data-tab-target=".-tab-item-6"
                                  >
                                    Cruise
                                  </button>
                                </div>

                                <div classNameName="col-auto">
                                  <button
                                    classNameName="tabs__button text-light-1 fw-500 js-tabs-button "
                                    data-tab-target=".-tab-item-7"
                                  >
                                    Flights
                                  </button>
                                </div>
                              </div>

                              <div classNameName="tabs__content js-tabs-content">
                                <div classNameName="tabs__pane -tab-item-1 is-tab-el-active">
                                  <div classNameName="mega__content">
                                    <div classNameName="mega__grid">
                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Hotel List
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Hotel Single
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Hotel Booking
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
                                          <div>
                                            <a href="booking-pages.html">
                                              Booking Page
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div classNameName="mega__image d-flex relative">
                                      <img
                                        src="src/assets/#"
                                        data-src="src/assets/src/assets/img/backgrounds/7.png"
                                        alt="image"
                                        classNameName="rounded-4 js-lazy"
                                      />

                                      <div classNameName="absolute w-full h-full px-30 py-24">
                                        <div classNameName="text-22 fw-500 lh-15 text-white">
                                          Things to do on <br /> your trip
                                        </div>
                                        <button classNameName="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                          Experinces
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div classNameName="tabs__pane -tab-item-2">
                                  <div classNameName="mega__content">
                                    <div classNameName="mega__grid">
                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Tour List
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Tour Pages
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                    <div classNameName="mega__image d-flex relative">
                                      <img
                                        src="src/assets/src/assets/img/backgrounds/7.png"
                                        alt="image"
                                        classNameName="rounded-4"
                                      />

                                      <div classNameName="absolute w-full h-full px-30 py-24">
                                        <div classNameName="text-22 fw-500 lh-15 text-white">
                                          Things to do on <br /> your trip
                                        </div>
                                        <button classNameName="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                          Experinces
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div classNameName="tabs__pane -tab-item-3">
                                  <div classNameName="mega__content">
                                    <div classNameName="mega__grid">
                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Activity List
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Activity Pages
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                    <div classNameName="mega__image d-flex relative">
                                      <img
                                        src="src/assets/src/assets/img/backgrounds/7.png"
                                        alt="image"
                                        classNameName="rounded-4"
                                      />

                                      <div classNameName="absolute w-full h-full px-30 py-24">
                                        <div classNameName="text-22 fw-500 lh-15 text-white">
                                          Things to do on <br /> your trip
                                        </div>
                                        <button classNameName="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                          Experinces
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div classNameName="tabs__pane -tab-item-4">
                                  <div classNameName="mega__content">
                                    <div classNameName="mega__grid">
                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Rental List
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Rental Pages
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                    <div classNameName="mega__image d-flex relative">
                                      <img
                                        src="src/assets/src/assets/img/backgrounds/7.png"
                                        alt="image"
                                        classNameName="rounded-4"
                                      />

                                      <div classNameName="absolute w-full h-full px-30 py-24">
                                        <div classNameName="text-22 fw-500 lh-15 text-white">
                                          Things to do on <br /> your trip
                                        </div>
                                        <button classNameName="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                          Experinces
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div classNameName="tabs__pane -tab-item-5">
                                  <div classNameName="mega__content">
                                    <div classNameName="mega__grid">
                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Car List
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Car Pages
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                    <div classNameName="mega__image d-flex relative">
                                      <img
                                        src="src/assets/src/assets/img/backgrounds/7.png"
                                        alt="image"
                                        classNameName="rounded-4"
                                      />

                                      <div classNameName="absolute w-full h-full px-30 py-24">
                                        <div classNameName="text-22 fw-500 lh-15 text-white">
                                          Things to do on <br /> your trip
                                        </div>
                                        <button classNameName="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                          Experinces
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div classNameName="tabs__pane -tab-item-6">
                                  <div classNameName="mega__content">
                                    <div classNameName="mega__grid">
                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Cruise List
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Cruise Pages
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
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

                                    <div classNameName="mega__image d-flex relative">
                                      <img
                                        src="src/assets/src/assets/img/backgrounds/7.png"
                                        alt="image"
                                        classNameName="rounded-4"
                                      />

                                      <div classNameName="absolute w-full h-full px-30 py-24">
                                        <div classNameName="text-22 fw-500 lh-15 text-white">
                                          Things to do on <br /> your trip
                                        </div>
                                        <button classNameName="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                          Experinces
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div classNameName="tabs__pane -tab-item-7">
                                  <div classNameName="mega__content">
                                    <div classNameName="mega__grid">
                                      <div classNameName="mega__item">
                                        <div classNameName="text-15 fw-500">
                                          Flight List
                                        </div>
                                        <div classNameName="y-gap-5 text-15 pt-5">
                                          <div>
                                            <a href="flights-list.html">
                                              Flight list v1
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div classNameName="mega__image d-flex relative">
                                      <img
                                        src="src/assets/src/assets/img/backgrounds/7.png"
                                        alt="image"
                                        classNameName="rounded-4"
                                      />

                                      <div classNameName="absolute w-full h-full px-30 py-24">
                                        <div classNameName="text-22 fw-500 lh-15 text-white">
                                          Things to do on <br /> your trip
                                        </div>
                                        <button classNameName="button h-50 px-30 -blue-1 text-dark-1 bg-white mt-20">
                                          Experinces
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <ul classNameName="subnav mega-mobile">
                            <li classNameName="subnav__backBtn js-nav-list-back">
                              <a href="#">
                                <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                Category
                              </a>
                            </li>

                            <li classNameName="menu-item-has-children">
                              <a data-barba href="#">
                                <span classNameName="mr-10">Hotel</span>
                                <i classNameName="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul classNameName="subnav">
                                <li classNameName="subnav__backBtn js-nav-list-back">
                                  <a href="#">
                                    <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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

                            <li classNameName="menu-item-has-children">
                              <a data-barba href="#">
                                <span classNameName="mr-10">Tour</span>
                                <i classNameName="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul classNameName="subnav">
                                <li classNameName="subnav__backBtn js-nav-list-back">
                                  <a href="#">
                                    <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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

                            <li classNameName="menu-item-has-children">
                              <a data-barba href="#">
                                <span classNameName="mr-10">Activity</span>
                                <i classNameName="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul classNameName="subnav">
                                <li classNameName="subnav__backBtn js-nav-list-back">
                                  <a href="#">
                                    <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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

                            <li classNameName="menu-item-has-children">
                              <a data-barba href="#">
                                <span classNameName="mr-10">Rental</span>
                                <i classNameName="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul classNameName="subnav">
                                <li classNameName="subnav__backBtn js-nav-list-back">
                                  <a href="#">
                                    <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                    Rental
                                  </a>
                                </li>

                                <li>
                                  <a href="rental-list-1.html">
                                    Rental List v1
                                  </a>
                                </li>

                                <li>
                                  <a href="rental-grid-1.html">
                                    Rental List v2
                                  </a>
                                </li>

                                <li>
                                  <a href="rental-map.html">Rental Map</a>
                                </li>

                                <li>
                                  <a href="rental-single.html">Rental Single</a>
                                </li>
                              </ul>
                            </li>

                            <li classNameName="menu-item-has-children">
                              <a data-barba href="#">
                                <span classNameName="mr-10">Car</span>
                                <i classNameName="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul classNameName="subnav">
                                <li classNameName="subnav__backBtn js-nav-list-back">
                                  <a href="#">
                                    <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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

                            <li classNameName="menu-item-has-children">
                              <a data-barba href="#">
                                <span classNameName="mr-10">Cruise</span>
                                <i classNameName="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul classNameName="subnav">
                                <li classNameName="subnav__backBtn js-nav-list-back">
                                  <a href="#">
                                    <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                    Cruise
                                  </a>
                                </li>

                                <li>
                                  <a href="cruise-list-1.html">
                                    Cruise List v1
                                  </a>
                                </li>

                                <li>
                                  <a href="cruise-grid-1.html">
                                    Cruise List v2
                                  </a>
                                </li>

                                <li>
                                  <a href="cruise-map.html">Cruise Map</a>
                                </li>

                                <li>
                                  <a href="cruise-single.html">Cruise Single</a>
                                </li>
                              </ul>
                            </li>

                            <li classNameName="menu-item-has-children">
                              <a data-barba href="#">
                                <span classNameName="mr-10">Flights</span>
                                <i classNameName="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul classNameName="subnav">
                                <li classNameName="subnav__backBtn js-nav-list-back">
                                  <a href="#">
                                    <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                    Flights
                                  </a>
                                </li>

                                <li>
                                  <a href="flights-list.html">
                                    Flights List v1
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="destinations.html">Destinations</a>
                        </li>

                        <li classNameName="menu-item-has-children">
                          <a data-barba href="#">
                            <span classNameName="mr-10">Blog</span>
                            <i classNameName="icon icon-chevron-sm-down"></i>
                          </a>

                          <ul classNameName="subnav">
                            <li classNameName="subnav__backBtn js-nav-list-back">
                              <a href="#">
                                <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                Blog
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

                        <li classNameName="menu-item-has-children">
                          <a data-barba href="#">
                            <span classNameName="mr-10">Pages</span>
                            <i classNameName="icon icon-chevron-sm-down"></i>
                          </a>

                          <ul classNameName="subnav">
                            <li classNameName="subnav__backBtn js-nav-list-back">
                              <a href="#">
                                <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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

                        <li classNameName="menu-item-has-children">
                          <a data-barba href="#">
                            <span classNameName="mr-10">Dashboard</span>
                            <i classNameName="icon icon-chevron-sm-down"></i>
                          </a>

                          <ul classNameName="subnav">
                            <li classNameName="subnav__backBtn js-nav-list-back">
                              <a href="#">
                                <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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
                              <a href="db-vendor-booking.html">
                                Vendor booking
                              </a>
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

                    <div classNameName="mobile-footer px-20 py-20 border-top-light js-mobile-footer"></div>
                  </div>
                </div>

                <div
                  classNameName="desktopMenu js-desktopMenu"
                  data-x="desktopMenu"
                  data-x-toggle="is-menu-active"
                >
                  <div classNameName="desktopMenu-overlay"></div>

                  <div classNameName="desktopMenu__content">
                    <div classNameName="mobile-bg js-mobile-bg"></div>

                    <div classNameName="px-30 py-20 sm:px-20 sm:py-10 border-bottom-light">
                      <div classNameName="row justify-between items-center">
                        <div classNameName="col-auto">
                          <div classNameName="text-20 fw-500">Main Menu</div>
                        </div>

                        <div classNameName="col-auto">
                          <button
                            classNameName="icon-close text-15"
                            data-x-click="desktopMenu"
                          ></button>
                        </div>
                      </div>
                    </div>

                    <div classNameName="h-full px-30 py-30 sm:px-0 sm:py-10">
                      <div classNameName="menu js-navList">
                        <ul classNameName="menu__nav  -is-active">
                          <li classNameName="menu-item-has-children">
                            <a data-barba href="#">
                              <span classNameName="mr-10">Home</span>
                              <i classNameName="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul classNameName="subnav">
                              <li classNameName="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                  Home
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

                          <li classNameName="menu-item-has-children -has-mega-menu">
                            <a data-barba href="#">
                              <span classNameName="mr-10">Categories</span>
                              <i classNameName="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul classNameName="subnav mega-mobile">
                              <li classNameName="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                  Category
                                </a>
                              </li>

                              <li classNameName="menu-item-has-children">
                                <a data-barba href="#">
                                  <span classNameName="mr-10">Hotel</span>
                                  <i classNameName="icon icon-chevron-sm-down"></i>
                                </a>

                                <ul classNameName="subnav">
                                  <li classNameName="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                      Hotel
                                    </a>
                                  </li>

                                  <li>
                                    <a href="hotel-list-1.html">
                                      Hotel List v1
                                    </a>
                                  </li>

                                  <li>
                                    <a href="hotel-list-2.html">
                                      Hotel List v2
                                    </a>
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
                                    <a href="booking-pages.html">
                                      Booking Page
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li classNameName="menu-item-has-children">
                                <a data-barba href="#">
                                  <span classNameName="mr-10">Tour</span>
                                  <i classNameName="icon icon-chevron-sm-down"></i>
                                </a>

                                <ul classNameName="subnav">
                                  <li classNameName="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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

                              <li classNameName="menu-item-has-children">
                                <a data-barba href="#">
                                  <span classNameName="mr-10">Activity</span>
                                  <i classNameName="icon icon-chevron-sm-down"></i>
                                </a>

                                <ul classNameName="subnav">
                                  <li classNameName="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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

                              <li classNameName="menu-item-has-children">
                                <a data-barba href="#">
                                  <span classNameName="mr-10">Rental</span>
                                  <i classNameName="icon icon-chevron-sm-down"></i>
                                </a>

                                <ul classNameName="subnav">
                                  <li classNameName="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                      Rental
                                    </a>
                                  </li>

                                  <li>
                                    <a href="rental-list-1.html">
                                      Rental List v1
                                    </a>
                                  </li>

                                  <li>
                                    <a href="rental-grid-1.html">
                                      Rental List v2
                                    </a>
                                  </li>

                                  <li>
                                    <a href="rental-map.html">Rental Map</a>
                                  </li>

                                  <li>
                                    <a href="rental-single.html">
                                      Rental Single
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li classNameName="menu-item-has-children">
                                <a data-barba href="#">
                                  <span classNameName="mr-10">Car</span>
                                  <i classNameName="icon icon-chevron-sm-down"></i>
                                </a>

                                <ul classNameName="subnav">
                                  <li classNameName="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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

                              <li classNameName="menu-item-has-children">
                                <a data-barba href="#">
                                  <span classNameName="mr-10">Cruise</span>
                                  <i classNameName="icon icon-chevron-sm-down"></i>
                                </a>

                                <ul classNameName="subnav">
                                  <li classNameName="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                      Cruise
                                    </a>
                                  </li>

                                  <li>
                                    <a href="cruise-list-1.html">
                                      Cruise List v1
                                    </a>
                                  </li>

                                  <li>
                                    <a href="cruise-grid-1.html">
                                      Cruise List v2
                                    </a>
                                  </li>

                                  <li>
                                    <a href="cruise-map.html">Cruise Map</a>
                                  </li>

                                  <li>
                                    <a href="cruise-single.html">
                                      Cruise Single
                                    </a>
                                  </li>
                                </ul>
                              </li>

                              <li classNameName="menu-item-has-children">
                                <a data-barba href="#">
                                  <span classNameName="mr-10">Flights</span>
                                  <i classNameName="icon icon-chevron-sm-down"></i>
                                </a>

                                <ul classNameName="subnav">
                                  <li classNameName="subnav__backBtn js-nav-list-back">
                                    <a href="#">
                                      <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                      Flights
                                    </a>
                                  </li>

                                  <li>
                                    <a href="flights-list.html">
                                      Flights List v1
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="destinations.html">Destinations</a>
                          </li>

                          <li classNameName="menu-item-has-children">
                            <a data-barba href="#">
                              <span classNameName="mr-10">Blog</span>
                              <i classNameName="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul classNameName="subnav">
                              <li classNameName="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i classNameName="icon icon-chevron-sm-down"></i>{" "}
                                  Blog
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

                          <li classNameName="menu-item-has-children">
                            <a data-barba href="#">
                              <span classNameName="mr-10">Pages</span>
                              <i classNameName="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul classNameName="subnav">
                              <li classNameName="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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

                          <li classNameName="menu-item-has-children">
                            <a data-barba href="#">
                              <span classNameName="mr-10">Dashboard</span>
                              <i classNameName="icon icon-chevron-sm-down"></i>
                            </a>

                            <ul classNameName="subnav">
                              <li classNameName="subnav__backBtn js-nav-list-back">
                                <a href="#">
                                  <i classNameName="icon icon-chevron-sm-down"></i>{" "}
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
                                <a href="db-vendor-booking.html">
                                  Vendor booking
                                </a>
                              </li>

                              <li>
                                <a href="db-vendor-hotels.html">
                                  Vendor hotels
                                </a>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div classNameName="col-auto">
              <div classNameName="d-flex items-center">
                <div classNameName="header__buttons d-flex items-center is-menu-opened-hide">
                  <a
                    href="become-expert.html"
                    classNameName="button h-50 px-30 fw-400 text-14 -blue-1 bg-white text-dark-1 sm:d-none"
                  >
                    Become An Expert
                  </a>
                  <a
                    href="signup.html"
                    classNameName="button h-50 px-30 fw-400 text-14 -outline-white text-white ml-20 sm:ml-0"
                  >
                    Sign In / Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <header
        data-add-bg=""
        className="header bg-white js-header"
        data-x="header"
        data-x-toggle="is-menu-opened"
      >
        <div data-anim="fade" className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <a
                  href="index.html"
                  className="header-logo mr-20"
                  data-x="header-logo"
                  data-x-toggle="is-logo-dark"
                >
                  <img
                    src="src/assets/img/general/logo-dark.svg"
                    alt="logo icon"
                  />
                  <img
                    src="src/assets/img/general/logo-dark.svg"
                    alt="logo icon"
                  />
                </a>

                <div
                  className="header-menu "
                  data-x="mobile-menu"
                  data-x-toggle="is-menu-active"
                >
                  <div className="mobile-overlay"></div>

                  <div className="header-menu__content">
                    <div className="mobile-bg js-mobile-bg"></div>

                    <div className="menu js-navList">
                      <ul className="menu__nav text-dark-1 -is-active">
                        <li className="menu-item-has-children">
                          <a data-barba href="#">
                            <span className="mr-10">Home</span>
                            <i className="icon icon-chevron-sm-down"></i>
                          </a>

                          <ul className="subnav">
                            <li className="subnav__backBtn js-nav-list-back">
                              <a href="#">
                                <i className="icon icon-chevron-sm-down"></i>{" "}
                                Home
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
                                        src="src/assets/#"
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
                                  <a href="rental-list-1.html">
                                    Rental List v1
                                  </a>
                                </li>

                                <li>
                                  <a href="rental-grid-1.html">
                                    Rental List v2
                                  </a>
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
                                  <a href="cruise-list-1.html">
                                    Cruise List v1
                                  </a>
                                </li>

                                <li>
                                  <a href="cruise-grid-1.html">
                                    Cruise List v2
                                  </a>
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
                                  <a href="flights-list.html">
                                    Flights List v1
                                  </a>
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
                                <i className="icon icon-chevron-sm-down"></i>{" "}
                                Blog
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
                              <a href="db-vendor-booking.html">
                                Vendor booking
                              </a>
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
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="row x-gap-20 items-center xxl:d-none">
                  <div className="col-auto">
                    <button
                      className="d-flex items-center text-14 text-dark-1"
                      data-x-click="currency"
                    >
                      <span className="js-currencyMenu-mainTitle">USD</span>
                      <i className="icon-chevron-sm-down text-7 ml-10"></i>
                    </button>
                  </div>

                  <div className="col-auto">
                    <div className="w-1 h-20 bg-black-20"></div>
                  </div>

                  <div className="col-auto">
                    <button
                      className="d-flex items-center text-14 text-dark-1"
                      data-x-click="lang"
                    >
                      <img
                        src="src/assets/img/general/lang.png"
                        alt="image"
                        className="rounded-full mr-10"
                      />
                      <span className="js-language-mainTitle">
                        United Kingdom
                      </span>
                      <i className="icon-chevron-sm-down text-7 ml-15"></i>
                    </button>
                  </div>
                </div>

                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  {context.isLogin && (
                    <a
                      onClick={handleLogout}
                      className="cursor-pointer button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white"
                    >
                      Đăng xuất
                    </a>
                  )}
                  {!context.isLogin && (
                    <Link
                      to="/"
                      href="signup.html"
                      className="button px-30 fw-400 text-14 -outline-blue-1 h-50 text-blue-1 ml-20"
                    >
                      Sign In / Register
                    </Link>
                  )}
                </div>

                <div
                  className="d-none xl:d-flex x-gap-20 items-center pl-30"
                  data-x="header-mobile-icons"
                  data-x-toggle="text-white"
                >
                  <div>
                    <a
                      href="login.html"
                      className="d-flex items-center icon-user text-inherit text-22"
                    ></a>
                  </div>
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
    </>
  );
};

export default Header;
