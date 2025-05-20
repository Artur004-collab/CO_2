export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Our Services</h1>
        <p className="text-lg text-gray-400 mb-8">
          We offer a wide range of services to help you succeed in the world of cryptocurrencies.
        </p>
        <ul className="space-y-6">
          <li>
            <h2 className="text-2xl font-semibold text-white">Incorporation Consulting</h2>
            <p className="text-gray-400">
              We provide expert advice on company incorporation and licensing for crypto businesses.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold text-white">OTC Deals</h2>
            <p className="text-gray-400">
              Secure and efficient over-the-counter deals for large transactions.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold text-white">Exchange</h2>
            <p className="text-gray-400">
              Seamless crypto-to-fiat and crypto-to-crypto exchange services.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold text-white">Gateway</h2>
            <p className="text-gray-400">
              Payment gateway solutions for accepting cryptocurrencies on your platform.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}