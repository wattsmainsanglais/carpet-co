import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
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
      <Reviews />
      <GoogleMap address="Wild St, Dukinfield SK16 4DL" />
      <ContactForm />
      <Footer />
    </main>
  );
}
