export default function Futer() {
  return (
    <footer className="bg-black py-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Верхняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Логотип и описание */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-3xl font-bold text-yellow-400">Crypto Open</h2>
            <p className="text-sm mt-2 max-w-xs">
              We don't just understand the crypto business — we are part of it. Your trusted partner in navigating the world of cryptocurrencies.
            </p>
          </div>

          {/* Столбики */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-2/3 text-center md:text-left">
            {/* Раздел Documents */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Documents</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Terms of condition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Раздел Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Incorporation consulting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    OTC deals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Exchange
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Gateway
                  </a>
                </li>
              </ul>
            </div>

            {/* Раздел Partnership */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Partnership</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Affiliate
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Collaboration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Социальные сети */}
        <div className="flex space-x-8 mb-10">
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors text-4xl"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors text-4xl"
            aria-label="Telegram"
          >
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors text-4xl"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition-colors text-4xl"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>

        {/* Нижняя часть футера */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-sm">
            © 2025 CryptoOpen. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Disclaimer: Cryptocurrency investments involve significant risk. Please consult with a financial advisor before making any decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}