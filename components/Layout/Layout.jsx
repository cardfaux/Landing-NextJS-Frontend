import AnnouncementBar from './AnnouncementBar/AnnouncementBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
