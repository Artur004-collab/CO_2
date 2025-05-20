export default function Futer() {
  return (
    <footer className="bg-black py-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Верхняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-yellow-400">CryptoOpen</h2>
            <p className="text-sm mt-2">
              Your trusted partner in crypto solutions.
            </p>
          </div>
          <div className="flex space-x-6">
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

        {/* Нижняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} CryptoOpen. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}