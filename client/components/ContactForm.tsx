import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content
    const subject = "Contact Form Submission from Al Umnayat Website";
    const body = `
New contact form submission:

Company Name: ${formData.companyName}
Contact Person: ${formData.contactPerson}
Phone Number: ${formData.phoneNumber}
Email: ${formData.email}
Message: ${formData.message}

---
This email was sent from the Al Umnayat Auto Paints website contact form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:samsan.dxb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      companyName: "",
      contactPerson: "",
      phoneNumber: "",
      email: "",
      message: "",
    });

    // Show success message
    alert(
      "Your message has been prepared for sending. Your email client should open shortly.",
    );
  };

  return (
    <div className="bg-gray-300 p-6 rounded-lg border border-gray-300 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Name Field */}
        <div className="space-y-2">
          <label
            htmlFor="companyName"
            className="block text-gray-800 font-medium"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            required
          />
        </div>

        {/* Contact Person Field */}
        <div className="space-y-2">
          <label
            htmlFor="contactPerson"
            className="block text-gray-800 font-medium"
          >
            Contact Person
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            placeholder="Contact person name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="space-y-2">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-800 font-medium"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            required
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-800 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            required
          />
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-gray-800 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-navy resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
