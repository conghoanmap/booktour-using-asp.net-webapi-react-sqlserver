function AddHotel() {
  return (
    <>
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32 mt-50">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">Add Hotels</h1>
          <div className="text-15 text-light-1">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>

        <div className="col-auto"></div>
      </div>

      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="tabs -underline-2 js-tabs">
          <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button is-tab-el-active"
                data-tab-target=".-tab-item-1"
              >
                1. Content
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-2"
              >
                2. Location
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-3"
              >
                3. Pricing
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-4"
              >
                4. Attributes
              </button>
            </div>
          </div>

          <div className="tabs__content pt-30 js-tabs-content">
            <div className="tabs__pane -tab-item-1 is-tab-el-active">
              <div className="col-xl-10">
                <div className="text-18 fw-500 mb-10">Hotel Content</div>
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Hotel Name
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-input ">
                      <textarea required rows="5"></textarea>
                      <label className="lh-1 text-16 text-light-1">
                        Content
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Youtube Video
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-top-light mt-30 mb-30"></div>

                <div className="text-18 fw-500 mb-10">Hotel Policy</div>
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Hotel rating standard
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-20">
                  <div className="fw-500 mb-20">Policy</div>

                  <div className="overflow-scroll scroll-bar-1">
                    <table className="table-5 -border-bottom col-12">
                      <thead className="bg-light-2">
                        <tr>
                          <th>Title</th>
                          <th>Content</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-5">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Eg: What kind of footwear is most suitable?
                              </label>
                            </div>
                          </td>
                          <td className="col-7">
                            <div className="form-input ">
                              <textarea required rows="5"></textarea>
                              <label className="lh-1 text-16 text-light-1">
                                Content
                              </label>
                            </div>
                          </td>
                          <td className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td className="col-5">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Eg: What kind of footwear is most suitable?
                              </label>
                            </div>
                          </td>
                          <td className="col-7">
                            <div className="form-input ">
                              <textarea required rows="5"></textarea>
                              <label className="lh-1 text-16 text-light-1">
                                Content
                              </label>
                            </div>
                          </td>
                          <td className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="d-flex justify-end">
                    <button className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20">
                      Add Item
                    </button>
                  </div>
                </div>

                <div className="mt-30">
                  <div className="fw-500">Featured Image</div>

                  <div className="row x-gap-20 y-gap-20 pt-15">
                    <div className="col-auto">
                      <div className="w-200">
                        <div className="d-flex ratio ratio-1:1">
                          <div className="flex-center flex-column text-center bg-blue-2 h-full w-1/1 absolute rounded-4 border-type-1">
                            <div className="icon-upload-file text-40 text-blue-1 mb-10"></div>
                            <div className="text-blue-1 fw-500">
                              Upload Images
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-10 text-14 text-light-1">
                          PNG or JPG no bigger than 800px wide and tall.
                        </div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex ratio ratio-1:1 w-200">
                        <img
                          src="src/assets/img/avatars/3.png"
                          alt="image"
                          className="img-ratio rounded-4"
                        />

                        <div className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute">
                          <div className="size-40 bg-white rounded-4">
                            <i className="icon-trash text-16"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex ratio ratio-1:1 w-200">
                        <img
                          src="src/assets/img/avatars/3.png"
                          alt="image"
                          className="img-ratio rounded-4"
                        />

                        <div className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute">
                          <div className="size-40 bg-white rounded-4">
                            <i className="icon-trash text-16"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="d-flex ratio ratio-1:1 w-200">
                        <img
                          src="src/assets/img/avatars/3.png"
                          alt="image"
                          className="img-ratio rounded-4"
                        />

                        <div className="d-flex justify-end px-10 py-10 h-100 w-1/1 absolute">
                          <div className="size-40 bg-white rounded-4">
                            <i className="icon-trash text-16"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-inline-block pt-30">
                <a
                  href="#"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  Save Changes{" "}
                  <div className="icon-arrow-top-right ml-15"></div>
                </a>
              </div>
            </div>

            <div className="tabs__pane -tab-item-2">
              <div className="col-xl-10">
                <div className="text-18 fw-500 mb-10">Location</div>
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Location
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Real address
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Map Latitude
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Map Longitude
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Map Zoom
                      </label>
                    </div>
                  </div>
                </div>

                <div className="d-flex ratio ratio-4:1 mt-30">
                  <div className="d-flex px-20 py-20 bg-light-2 h-full w-1/1 absolute rounded-4">
                    <div className="">
                      <div className="form-input bg-white">
                        <input type="text" required />
                        <label className="lh-1 text-16 text-light-1">
                          Search by name...
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-18 fw-500 mb-10 mt-30">Surroundings</div>
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-12">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Hotel rating standard
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-30">
                  <div className="fw-500 mb-20">Education</div>

                  <div className="overflow-scroll scroll-bar-1">
                    <table className="table-5 -border-bottom col-12">
                      <thead className="bg-light-2">
                        <tr>
                          <th>Name</th>
                          <th>Content</th>
                          <th>Distance</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-6">
                            <div className="form-input ">
                              <textarea required rows="5"></textarea>
                              <label className="lh-1 text-16 text-light-1">
                                Content
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Select Country
                              </label>
                            </div>
                          </td>
                          <td className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-6">
                            <div className="form-input ">
                              <textarea required rows="5"></textarea>
                              <label className="lh-1 text-16 text-light-1">
                                Content
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Select Country
                              </label>
                            </div>
                          </td>
                          <td className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="d-flex justify-end">
                    <button className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20">
                      Add Item
                    </button>
                  </div>
                </div>

                <div className="mt-30">
                  <div className="fw-500 mb-20">Health</div>

                  <div className="overflow-scroll scroll-bar-1">
                    <table className="table-5 -border-bottom col-12">
                      <thead className="bg-light-2">
                        <tr>
                          <th>Name</th>
                          <th>Content</th>
                          <th>Distance</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-6">
                            <div className="form-input ">
                              <textarea required rows="5"></textarea>
                              <label className="lh-1 text-16 text-light-1">
                                Content
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Select Country
                              </label>
                            </div>
                          </td>
                          <td className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-6">
                            <div className="form-input ">
                              <textarea required rows="5"></textarea>
                              <label className="lh-1 text-16 text-light-1">
                                Content
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Select Country
                              </label>
                            </div>
                          </td>
                          <td className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="d-flex justify-end">
                    <button className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20">
                      Add Item
                    </button>
                  </div>
                </div>

                <div className="mt-30">
                  <div className="fw-500 mb-20">Transportation</div>

                  <div className="overflow-scroll scroll-bar-1">
                    <table className="table-5 -border-bottom col-12">
                      <thead className="bg-light-2">
                        <tr>
                          <th>Name</th>
                          <th>Content</th>
                          <th>Distance</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-6">
                            <div className="form-input ">
                              <textarea required rows="5"></textarea>
                              <label className="lh-1 text-16 text-light-1">
                                Content
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Select Country
                              </label>
                            </div>
                          </td>
                          <td className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </td>
                        </tr>

                        <tr>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-6">
                            <div className="form-input ">
                              <textarea required rows="5"></textarea>
                              <label className="lh-1 text-16 text-light-1">
                                Content
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Sunny beach
                              </label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Select Country
                              </label>
                            </div>
                          </td>
                          <td className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="d-flex justify-end">
                    <button className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20">
                      Add Item
                    </button>
                  </div>
                </div>

                <div className="d-inline-block pt-30">
                  <a
                    href="#"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Save Changes{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="tabs__pane -tab-item-3">
              <div className="col-xl-9 col-lg-11">
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-12">
                    <div className="text-18 fw-500 mb-10">Pricing</div>

                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Hotel Price
                      </label>
                    </div>

                    <div className="d-flex mt-20">
                      <div className="form-checkbox ">
                        <input type="checkbox" name="name" />
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check"></div>
                        </div>
                      </div>

                      <div className="text-15 lh-11 ml-10">
                        Enable extra price
                      </div>
                    </div>

                    <div className="fw-500 mt-30">Enable service fee</div>

                    <div className="d-flex mt-10">
                      <div className="form-checkbox ">
                        <input type="checkbox" name="name" />
                        <div className="form-checkbox__mark">
                          <div className="form-checkbox__icon icon-check"></div>
                        </div>
                      </div>

                      <div className="text-15 lh-11 ml-10">
                        Enable extra price
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-18 fw-500 mb-10 pt-30">
                  Check in / Check out time
                </div>
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Time for check in
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Time for check out
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Minimum advance reservations
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-input ">
                      <input type="text" required />
                      <label className="lh-1 text-16 text-light-1">
                        Minimum day stay requirements
                      </label>
                    </div>
                  </div>
                </div>

                <div className="d-inline-block mt-30">
                  <a
                    href="#"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Save Changes{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="tabs__pane -tab-item-4">
              <div className="col-xl-9 col-lg-11">
                <div className="row x-gap-100 y-gap-15">
                  <div className="col-12">
                    <div className="text-18 fw-500">Property Type</div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">
                            Holiday homes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">
                            Holiday homes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">
                            Holiday homes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">
                            Holiday homes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row x-gap-100 y-gap-15 pt-30">
                  <div className="col-12">
                    <div className="text-18 fw-500">Facilities</div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row x-gap-100 y-gap-15 pt-30">
                  <div className="col-12">
                    <div className="text-18 fw-500">Hotel Services</div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                    <div className="row y-gap-15">
                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Apartments</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>

                          <div className="text-15 lh-11 ml-10">Boats</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-inline-block mt-30">
                  <a
                    href="#"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Save Changes{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddHotel;
