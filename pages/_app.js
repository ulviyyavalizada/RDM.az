// Style imports
import "/styles/bootstrap.min.css";
import "/styles/globals.css";
import 'swiper/css';
import "/styles/common.sass";
import Head from 'next/head'


// Header and footer components
import Header from "../components/Header";
import Footer from "../components/Footer";


function MyApp({ Component, pageProps }) {
  // const router = useRouter();

  // console.log(router.pathname === '/xidmetler')

  return (
  <>
    <Head>
      <title>My page title</title>
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}

export default MyApp
