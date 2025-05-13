import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";

export default function CryptoProcessingPage() {
  const [tab, setTab] = useState("accept");
  const [language, setLanguage] = useState("ru");
  const [chatOpen, setChatOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabChange = (newTab) => {
    if (newTab !== tab) {
      setTab(newTab);
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
  };

  const texts = {
    ru: {
      title: "Принимайте крипту. Без головной боли.",
      description: "Мгновенные платежи, глобальный охват, надёжная защита.",
      startIntegration: "Начать интеграцию",
      learnMore: "Узнай больше",
      whatWeOffer: "Что мы предлагаем",
      liquidity: "Только проверенные поставщики ликвидности",
      globalReach: "Глобальные возможности",
      reliability: "Надёжность",
      startNow: "Начнём?",
      privacy: "Политика конфиденциальности",
    },
    en: {
      title: "Accept Crypto. Hassle-Free.",
      description: "Instant payments, global reach, trusted security.",
      startIntegration: "Start Integration",
      learnMore: "Learn More",
      whatWeOffer: "What We Offer",
      liquidity: "Only Verified Liquidity Providers",
      globalReach: "Global Opportunities",
      reliability: "Reliability",
      startNow: "Let's Start",
      privacy: "Privacy Policy",
    },
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <div className="text-white text-lg font-semibold">Cryptoopen</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-black text-white flex flex-col relative overflow-x-hidden">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">{texts[language].title}</h1>
        <p className="text-lg text-gray-400 mb-6">{texts[language].description}</p>
        <button className="bg-white text-black px-6 py-2 rounded-xl shadow hover:scale-110 transition-transform duration-300">
          {texts[language].startIntegration}
        </button>
        <div
          onClick={scrollToServices}
          className="mt-4 flex items-center justify-center text-sm text-gray-400 hover:text-white cursor-pointer"
        >
          <span className="mr-1">{texts[language].learnMore}</span>
          <ArrowRight size={16} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            {texts[language].whatWeOffer}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#16232b] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                {texts[language].liquidity}
              </h3>
              <p className="text-gray-400">
                Мы сотрудничаем с крупнейшими платформами: Binance, Kraken, OKX и другими.
              </p>
            </div>
            <div className="bg-[#16232b] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                {texts[language].globalReach}
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>✅ Работаем по всему миру, без ограничений по ГЕО</li>
                <li>✅ Принимаем проекты любой зоны риска</li>
                <li>✅ Персональные решения под ваш бизнес</li>
              </ul>
            </div>
            <div className="bg-[#16232b] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                {texts[language].reliability}
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>✅ Совместимость с KYC/AML</li>
                <li>✅ Контроль рисков и поддержка 24/7</li>
                <li>✅ Надёжное шифрование данных</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-400">
        <p>{texts[language].privacy}</p>
      </footer>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-neutral-900 rounded-2xl shadow-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white text-lg font-semibold">Чат поддержки</h3>
            <button
              onClick={() => setChatOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✖
            </button>
          </div>
          <textarea
            className="w-full h-24 p-2 rounded-md bg-black/80 text-white placeholder-gray-400 resize-none"
            placeholder="Напишите сообщение..."
          />
          <button className="w-full bg-white text-black py-2 rounded-xl hover:scale-105 transition-transform duration-300 mt-3">
            Отправить
          </button>
        </div>
      )}
    </div>
  );
}
