import { Header, Footer } from "./components";

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default DefaultLayout;
