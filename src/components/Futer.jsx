export default function Futer() {
  return (
    <footer className="bg-black py-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Верхняя часть футера */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-yellow-400">CryptoOpen</h2>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-xl"
              aria-label="Telegram"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-xl"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        {/* Средняя часть футера */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-700 pb-6">
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

        {/* Нижняя часть футера */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} CryptoOpen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}