import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="lg:h-screen w-100 bg-gray-100 sm:h-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
