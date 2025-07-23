import Header from "../components/Header";
import Footer from "../components/Footer";
import PlaceholderPage from "../components/PlaceholderPage";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PlaceholderPage 
          title="Products" 
          description="Explore our comprehensive range of automotive paints and supplies."
        />
      </main>
      <Footer />
    </div>
  );
}
