import Header from "../components/Header";
import Footer from "../components/Footer";
import PlaceholderPage from "../components/PlaceholderPage";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PlaceholderPage 
          title="Gallery" 
          description="View photos and videos of our products and facilities."
        />
      </main>
      <Footer />
    </div>
  );
}
