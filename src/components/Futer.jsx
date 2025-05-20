export default function Futer() {
  return (
    <footer className="bg-black py-6 text-center text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} CryptoOpen. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}