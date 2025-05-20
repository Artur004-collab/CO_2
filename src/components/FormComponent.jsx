export default function ConsultationBlock() {
  return (
    <section className="py-12 bg-black text-white" id="consultation">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Get a Free Consultation</h2>
        <p className="text-lg text-gray-400 mb-8">
          Choose the way that works best for you – talk to us directly or let our AI guide you through.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Option 1: Talk to us directly */}
          <div className="flex flex-col items-center">
            <h5 className="text-2xl font-bold text-white mb-4">Talk to us directly</h5>
            <div className="flex items-center gap-4 mb-4">
              <img src="https://img.icons8.com/ios-filled/50/ffc107/telegram-app.png" alt="Telegram" className="h-8 w-8" />
              <a
                href="https://t.me/YourTelegram"
                className="text-yellow-400 text-lg font-semibold transition-all duration-300 hover:underline"
              >
                Telegram Chat
              </a>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://img.icons8.com/ios-filled/50/ffc107/whatsapp.png" alt="WhatsApp" className="h-8 w-8" />
              <a
                href="https://wa.me/123456789"
                className="text-yellow-400 text-lg font-semibold transition-all duration-300 hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Option 2: Form */}
          <div>
            <FormComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FormComponent() {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
      <form action="/send" method="POST" className="space-y-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-yellow-400 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Enter your company name"
            className="w-full bg-[#111] border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="companyWebsite" className="block text-sm font-medium text-yellow-400 mb-2">
            Website
          </label>
          <input
            type="url"
            id="companyWebsite"
            name="companyWebsite"
            placeholder="https://yourcompany.com"
            className="w-full bg-[#111] border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full bg-[#111] border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="serviceSelect" className="block text-sm font-medium text-yellow-400 mb-2">
            Select a Service
          </label>
          <select
            id="serviceSelect"
            name="service"
            defaultValue=""
            className="w-full bg-[#111] border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
          <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-2">
            Your Request
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Describe your request or question"
            className="w-full bg-[#111] border border-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
}