import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Gallery />
      <About />
      <Reviews />
      <GoogleMap address="Wild St, Dukinfield SK16 4DL" />
      <ContactForm />
      <Footer />
    </main>
  );
}
