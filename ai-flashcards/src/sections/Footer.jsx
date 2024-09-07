export default function Footer() {
  return (
    <footer className="footer-bg text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">
          &copy; 2024 Your Company Name. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a href="#" className="footer-link hover:text-white">
            About Us
          </a>
          <a href="#" className="footer-link hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="footer-link hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="footer-link hover:text-white">
            Contact Us
          </a>
        </div>
        <form
          action="#"
          method="post"
          className="flex flex-wrap justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 rounded-lg text-gray-800"
            required
          />
          <button
            type="submit"
            className="cta-button py-2 px-4 rounded-lg text-white text-lg font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}
