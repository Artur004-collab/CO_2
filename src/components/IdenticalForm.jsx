export default function IdenticalForm() {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
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
  );
}