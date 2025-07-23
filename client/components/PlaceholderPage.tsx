interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-brand-navy font-montserrat mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-600 font-montserrat mb-8">
          {description || "This page is currently under construction."}
        </p>
        <p className="text-lg text-gray-500 font-montserrat">
          Please continue prompting to fill in this page's content.
        </p>
      </div>
    </div>
  );
}
