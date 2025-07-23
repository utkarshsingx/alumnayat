import Header from "../components/Header";
import Footer from "../components/Footer";
import PlaceholderPage from "../components/PlaceholderPage";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PlaceholderPage 
          title="Contact Us" 
          description="Get in touch with our team for inquiries and support."
        />
      </main>
      <Footer />
    </div>
  );
}
