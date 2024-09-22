function AllHotel() {
  return (
    <>
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32 mt-50">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">All Hotels</h1>
          <div className="text-15 text-light-1">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>

        <div className="col-auto">
          <a
            href="#"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            Add Hotels <div className="icon-arrow-top-right ml-15"></div>
          </a>
        </div>
      </div>

      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="tabs -underline-2 js-tabs">
          {/* các cái tab */}
          <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button is-tab-el-active"
                data-tab-target=".-tab-item-1"
              >
                All Booking
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-2"
              >
                Completed
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-3"
              >
                Processing
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-4"
              >
                Confirmed
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-5"
              >
                Cancelled
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-6"
              >
                Paid
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-7"
              >
                Unpaid
              </button>
            </div>

            <div className="col-auto">
              <button
                className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button "
                data-tab-target=".-tab-item-8"
              >
                Partial Payment
              </button>
            </div>
          </div>

          <div className="tabs__content pt-30 js-tabs-content">
            {/* cái này bọc các nội dung của các tab */}
            {/* Tab all hotel */}
            <div className="tabs__pane -tab-item-1 is-tab-el-active">
              <div className="overflow-scroll scroll-bar-1">
                <table className="table-4 -border-bottom col-12">
                  <thead className="bg-light-2">
                    <tr>
                      <th>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Reviews</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 1 tr là 1 hotel */}
                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Tab complated */}
            <div className="tabs__pane -tab-item-2 ">
              <div className="overflow-scroll scroll-bar-1">
                <table className="table-4 -border-bottom col-12">
                  <thead className="bg-light-2">
                    <tr>
                      <th>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Reviews</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                          Rejected
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                          Rejected
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Tab processing */}
            <div className="tabs__pane -tab-item-3 ">
              <div className="overflow-scroll scroll-bar-1">
                <table className="table-4 -border-bottom col-12">
                  <thead className="bg-light-2">
                    <tr>
                      <th>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Reviews</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                          Rejected
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                          Rejected
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Tab comfirmed */}
            <div className="tabs__pane -tab-item-4 ">
              <div className="overflow-scroll scroll-bar-1">
                <table className="table-4 -border-bottom col-12">
                  <thead className="bg-light-2">
                    <tr>
                      <th>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Reviews</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                          Rejected
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                          Rejected
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Tab cancelled */}
            <div className="tabs__pane -tab-item-5 ">
              <div className="overflow-scroll scroll-bar-1">
                <table className="table-4 -border-bottom col-12">
                  <thead className="bg-light-2">
                    <tr>
                      <th>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Reviews</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                          Rejected
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-red-3 text-red-2">
                          Rejected
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Tab paid */}
            <div className="tabs__pane -tab-item-6 ">
              <div className="overflow-scroll scroll-bar-1">
                <table className="table-4 -border-bottom col-12">
                  <thead className="bg-light-2">
                    <tr>
                      <th>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Reviews</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Tab unpaid */}
            <div className="tabs__pane -tab-item-7 ">
              <div className="overflow-scroll scroll-bar-1">
                <table className="table-4 -border-bottom col-12">
                  <thead className="bg-light-2">
                    <tr>
                      <th>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Reviews</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Tab partial payment */}
            <div className="tabs__pane -tab-item-8 ">
              <div className="overflow-scroll scroll-bar-1">
                <table className="table-4 -border-bottom col-12">
                  <thead className="bg-light-2">
                    <tr>
                      <th>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Author</th>
                      <th>Status</th>
                      <th>Reviews</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          Pending
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-blue-1 fw-500">Crowne Plaza Hotel</td>
                      <td>London</td>
                      <td>Ali Tufan</td>
                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
                          Confirmed
                        </span>
                      </td>
                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          4.8
                        </div>
                      </td>
                      <td>04/04/2022</td>
                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-eye text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-edit text-16 text-light-1"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35">
                              <i className="icon-trash-2 text-16 text-light-1"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Trang */}
        <div className="pt-30">
          <div className="row justify-between">
            <div className="col-auto">
              <button className="button -blue-1 size-40 rounded-full border-light">
                <i className="icon-chevron-left text-12"></i>
              </button>
            </div>

            <div className="col-auto">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="size-40 flex-center rounded-full">1</div>
                </div>

                <div className="col-auto">
                  <div className="size-40 flex-center rounded-full bg-dark-1 text-white">
                    2
                  </div>
                </div>

                <div className="col-auto">
                  <div className="size-40 flex-center rounded-full">3</div>
                </div>

                <div className="col-auto">
                  <div className="size-40 flex-center rounded-full bg-light-2">
                    4
                  </div>
                </div>

                <div className="col-auto">
                  <div className="size-40 flex-center rounded-full">5</div>
                </div>

                <div className="col-auto">
                  <div className="size-40 flex-center rounded-full">...</div>
                </div>

                <div className="col-auto">
                  <div className="size-40 flex-center rounded-full">20</div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <button className="button -blue-1 size-40 rounded-full border-light">
                <i className="icon-chevron-right text-12"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllHotel;
