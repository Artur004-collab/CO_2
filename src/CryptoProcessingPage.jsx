import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Send } from "lucide-react";

export default function CryptoProcessingPage() {
  const [tab, setTab] = useState("accept");
  const [language, setLanguage] = useState("ru");
  const [chatOpen, setChatOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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
      privacy: "Политика конфиденциальности"
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
      privacy: "Privacy Policy"
    }
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
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Логотип */}
          <div className="text-xl font-bold hover:scale-105 transition-transform duration-300">
            Cryptoopen
          </div>

          {/* Бургер-меню для мобильных устройств */}
          <button
            className="lg:hidden text-gray-400 hover:text-white transition duration-300 text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Десктопное меню */}
          <nav className="hidden lg:flex gap-8 text-sm text-gray-400 items-center">
            <a href="#" className="hover:text-white transition duration-300">
              Трафик и Продажи
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Криптокомпании
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Ликвидность
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              Как стать партнёром
            </a>
            <button className="bg-white text-black px-4 py-2 rounded-xl shadow hover:scale-110 transition-transform duration-300">
              Get Started
            </button>
          </nav>
        </div>

        {/* Мобильное меню */}
        {menuOpen && (
          <>
            {/* Затемнение фона */}
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            ></div>

            {/* Меню */}
            <nav
              className={`fixed top-0 right-0 h-full w-64 bg-[#16232b] z-50 transform ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              } transition-all duration-300 rounded-l-2xl shadow-lg`}
            >
              <div className="flex flex-col gap-6 p-6">
                {/* Кнопка закрытия */}
                <button
                  className="self-end text-gray-400 hover:text-white text-3xl"
                  onClick={() => setMenuOpen(false)}
                >
                  ✖
                </button>

                {/* Ссылки */}
                <a
                  href="#"
                  className="hover:text-[#f8b739] font-semibold transition duration-300"
                >
                  Трафик и Продажи
                </a>
                <a
                  href="#"
                  className="hover:text-[#f8b739] font-semibold transition duration-300"
                >
                  Криптокомпании
                </a>
                <a
                  href="#"
                  className="hover:text-[#f8b739] font-semibold transition duration-300"
                >
                  Ликвидность
                </a>
                <a
                  href="#"
                  className="hover:text-[#f8b739] font-semibold transition duration-300"
                >
                  Как стать партнёром
                </a>

                {/* Смена языка */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-gray-400">🌐</span>
                  <button
                    className="hover:text-[#f8b739] font-semibold transition duration-300"
                    onClick={toggleLanguage}
                  >
                    {language === "ru" ? "Русский" : "English"}
                  </button>
                </div>

                {/* Кнопка "Get Started" */}
                <button className="bg-[#f8b739] text-black px-4 py-2 rounded-xl shadow hover:scale-110 transition-transform duration-300 mt-auto">
                  Get Started
                </button>
              </div>
            </nav>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-3xl">
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
        </div>
      </section>
    </div>
  );
}
