import {Header, Footer, Sidebar} from "./components";

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div
        className="dashboard"
        data-x="dashboard"
        data-x-toggle="-is-sidebar-open"
      >
        <Sidebar />
        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
