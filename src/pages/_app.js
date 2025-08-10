import "@/styles/globals.css";
import './home.css';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'animate.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
  
}
