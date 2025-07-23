import Header from "../components/Header";
import Footer from "../components/Footer";
import PlaceholderPage from "../components/PlaceholderPage";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PlaceholderPage 
          title="About Us" 
          description="Learn about our leadership team and company mission."
        />
      </main>
      <Footer />
    </div>
  );
}
