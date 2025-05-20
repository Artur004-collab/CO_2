export default function IdenticalForm() {
  return (
    <>
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">Get a Free Consultation</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose the way that works best for you – talk to us directly or let our AI guide you through.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Messengers + AI */}
            <div className="flex flex-col gap-y-6 mt-10">
              <h5 className="text-2xl font-bold text-white">Talk to us directly</h5>
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/50/ffc107/telegram-app.png" alt="Telegram" className="h-8 w-8" />
                <a
                  href="https://t.me/YourTelegram"
                  className="text-grey-400 text-lg font-semibold transition-all duration-300"
                  style={{ fontSize: "1rem" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.fontSize = "1.125rem"; // Увеличение шрифта
                    e.currentTarget.style.textDecoration = "none"; // Убираем подчеркивание
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.fontSize = "1rem"; // Возврат к базовому размеру
                  }}
                >
                  Telegram Chat
                </a>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/ios-filled/50/ffc107/whatsapp.png" alt="WhatsApp" className="h-8 w-8" />
                <a
                  href="https://wa.me/123456789"
                  className="text-grey-400 text-lg font-semibold transition-all duration-300"
                  style={{ fontSize: "1rem" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.fontSize = "1.125rem"; // Увеличение шрифта
                    e.currentTarget.style.textDecoration = "none"; // Убираем подчеркивание
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.fontSize = "1rem"; // Возврат к базовому размеру
                  }}
                >
                  WhatsApp
                </a>
              </div>
              <div className="mt-20">
                <h6 className="text-yellow-400 text-lg font-semibold flex items-center gap-2">
                  Crypto Open AI Assistant
                </h6>
                <p className="text-gray-400 text-sm mt-2">
                  Our bot is available 24/7 and ready to help you with crypto-related consultations instantly.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#fbbf24"; // Цвет при наведении
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#facc15"; // Исходный цвет
                  }}
                >
                  Start with AI
                </a>
              </div>
            </div>
            {/* Form */}
            <div>
              <form action="/send" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-400">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Enter your company name"
                    className="w-full bg-[#111] border border-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-400">
                    Website
                  </label>
                  <input
                    type="url"
                    id="companyWebsite"
                    name="companyWebsite"
                    placeholder="https://yourcompany.com"
                    className="w-full bg-[#111] border border-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full bg-[#111] border border-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label htmlFor="serviceSelect" className="block text-sm font-medium text-gray-400">
                    Select a Service
                  </label>
                  <select
                    id="serviceSelect"
                    name="service"
                    defaultValue=""
                    className="w-full bg-[#111] border border-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="" disabled>
                      Choose from the list
                    </option>
                    <option value="otc">OTC Deals & Liquidity</option>
                    <option value="acquiring">Crypto Acquiring</option>
                    <option value="setup">Company Setup & Licensing</option>
                    <option value="kyc">KYC/AML Compliance</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                    Your Request
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Describe your request or question"
                    className="w-full bg-[#111] border border-gray-700 text-white rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  ></textarea>
                </div>
                {/* reCAPTCHA */}
                <div className="mb-4">
                  <div className="g-recaptcha" data-sitekey="6LfNYUErAAAAAK3R0CziaIFyQGyy9jT5rx27eMeg"></div>
                  <noscript>
                    <div className="text-red-500 mt-2">Please enable JavaScript to use the reCAPTCHA form.</div>
                  </noscript>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="h-4 w-4 text-yellow-400 border-gray-700 rounded focus:ring-yellow-400"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                    I agree to the{" "}
                    <a href="#" className="text-yellow-400 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-yellow-400 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}