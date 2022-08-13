import Footer from '../components/layouts/Footer';
import NavBar from '../components/layouts/NavBar/NavBar';
import '../plugins/tailwind/main.css';
import '../../src/assets/css/common.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
