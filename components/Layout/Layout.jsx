import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children}) => {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;