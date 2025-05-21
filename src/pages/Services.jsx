import Navbar from "../components/Navbar";
import Futer from "../components/Futer";
import IdenticalForm from "../components/IdenticalForm";

export default function Services() {
  return (
    <div className="bg-black text-white">
      <Navbar /> 
      {/* Hero Section */}
      <section className="text-center py-12 bg-black">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-yellow-400">Crypto Open Services</h1>
          <p className="text-lg text-gray-400 mt-4">
            Explore our offerings in a clear, client-oriented structure.
          </p>
          {/*<a
            href="/"
            className="inline-block mt-6 px-6 py-3 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            ← Back to Homepage
          </a>*/}
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-12 border-b border-gray-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-yellow-400 text-4xl mb-4">
              <i className="bi bi-credit-card-2-front"></i>
            </div>
            <h2 className="text-2xl font-bold text-white">Gateway & Processing</h2>
            <p className="text-gray-400 mt-4">
              Our crypto payment gateway enables businesses to accept cryptocurrency payments (BTC, ETH, USDT and more) with instant conversion to fiat or stablecoins.
            </p>
            <p className="text-gray-400 mt-2">
              The platform provides ready-made tools: payment buttons, API integrations, crypto invoices, and bulk payouts.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-800">
            <h6 className="text-yellow-400 font-semibold mb-4">You Get:</h6>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Hosted payment buttons for websites</li>
              <li>Robust API for full automation</li>
              <li>QR-based crypto invoice generation</li>
              <li>Mass payouts in crypto</li>
              <li>Auto-conversion to fiat/stablecoins</li>
              <li>Institutional-grade custody solutions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-gray-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-yellow-400 text-4xl mb-4">
              <i className="bi bi-graph-up-arrow"></i>
            </div>
            <h2 className="text-2xl font-bold text-white">Crypto Exchange</h2>
            <p className="text-gray-400 mt-4">
              We assist in launching your own centralized or decentralized exchange. Our solution includes legal structuring, liquidity provisioning, security architecture, and custom branding.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-800">
            <h6 className="text-yellow-400 font-semibold mb-4">You Get:</h6>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>White-label CEX or hybrid exchange setup</li>
              <li>Liquidity aggregation from Tier-1 providers</li>
              <li>Integrated KYC/AML flows</li>
              <li>Admin and user dashboards</li>
              <li>Regulatory advisory for licensing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-gray-800" id="otc">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-yellow-400 text-4xl mb-4">
              <i className="bi bi-currency-exchange"></i>
            </div>
            <h2 className="text-2xl font-bold text-white">OTC deals and Liquidity</h2>
            <p className="text-gray-400 mt-4">
              Our OTC desk facilitates high-volume trades for institutional and HNW clients. We offer competitive pricing, privacy, and personalized execution strategies through regulated counterparties.
            </p>
            <p className="text-gray-400 mt-2">
              Direct crypto-fiat swaps, bulk USDT settlements, and escrowed BTC deals — tailored to the client's operational flow.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-800">
            <h6 className="text-yellow-400 font-semibold mb-4">You Get:</h6>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Access to deep liquidity</li>
              <li>Fixed-rate execution and low spreads</li>
              <li>Escrow, KYC, and settlement guarantee</li>
              <li>EUR, USD, GBP, AED pair support</li>
              <li>Confidentiality and VIP desk support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-gray-800" id="licences">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-yellow-400 text-4xl mb-4">
              <i className="bi bi-building"></i>
            </div>
            <h2 className="text-2xl font-bold text-white">Company and Licences</h2>
            <p className="text-gray-400 mt-4">
              We guide crypto startups and fintech projects through company formation, regulatory compliance, and licensing procedures in top jurisdictions.
            </p>
            <p className="text-gray-400 mt-2">
              Jurisdictions covered: Lithuania, Estonia, Dubai, Seychelles, BVI and others. We help you navigate structure choice, legal opinions, and post-registration support.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-800">
            <h6 className="text-yellow-400 font-semibold mb-4">You Get:</h6>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Company registration with nominee support</li>
              <li>Crypto license preparation and filing</li>
              <li>Local legal and accounting partners</li>
              <li>Banking and PSP connections</li>
              <li>White-label documentation (ToS, Privacy, KYC)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-12 border-b border-gray-800" id="traffic">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-yellow-400 text-4xl mb-4">
              <i className="bi bi-megaphone"></i>
            </div>
            <h2 className="text-2xl font-bold text-white">Traffic and Clients</h2>
            <p className="text-gray-400 mt-4">
              We attract real users, crypto traffic, and investors through our performance marketing network and affiliate systems. Whether you need Web3 users, traders, or conversion-ready leads — we structure inbound flow around results.
            </p>
            <p className="text-gray-400 mt-2">
              Our ecosystem includes crypto influencers, paid media, SEO, content marketing, and integration with token communities and launchpads.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-800">
            <h6 className="text-yellow-400 font-semibold mb-4">You Get:</h6>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Verified crypto user traffic (global + GEO targeting)</li>
              <li>Affiliate acquisition with dashboard access</li>
              <li>Search visibility (SEO/SEM)</li>
              <li>Influencer campaigns & growth hacking</li>
              <li>Lead gen for token sales or B2B deals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Get a Free Consultation */}
      <IdenticalForm />

      {/* Footer */}
      <Futer />
    </div>
  );
}