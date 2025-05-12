import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Globe, Settings, Repeat, Shield, MoveRight, Send } from "lucide-react";

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

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "ru" ? "en" : "ru"));
  };

  const handleTabChange = (newTab) => {
    if (newTab !== tab) {
      setTab(newTab);
    }
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
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Логотип */}
          <div className="text-xl font-bold hover:scale-105 transition-transform duration-300">
            Cryptoopen
          </div>

          {/* Бургер-меню для мобильных устройств */}
          <button
            className="lg:hidden text-gray-400 hover:text-white transition duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Подложка для меню */}
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black/80 z-40"
              onClick={() => setMenuOpen(false)}
            ></div>
          )}

          {/* Основное меню */}
          <nav
            className={`fixed top-0 right-0 h-full w-64 bg-black z-50 transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 lg:static lg:transform-none lg:flex lg:flex-row lg:gap-8 lg:w-auto lg:bg-transparent`}
          >
            <div className="flex flex-col gap-6 p-6 lg:p-0 lg:flex-row lg:items-center">
              <a href="#" className="hover:text-white transition duration-300">
                {language === "ru" ? "Трафик и Продажи" : "Traffic and Sales"}
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                {language === "ru" ? "Криптокомпании" : "Crypto Companies"}
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                {language === "ru" ? "Ликвидность" : "Liquidity"}
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                {language === "ru" ? "Как стать партнёром" : "Become a Partner"}
              </a>
            </div>
          </nav>

          {/* Кнопка выбора языка и кнопка "Покупаем трафик" */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition duration-300 cursor-pointer">
                <Globe size={18} /> {language === "ru" ? "Русский" : "English"}
              </button>
              <div className="absolute right-0 mt-2 bg-black/80 border border-gray-700 rounded-xl shadow-lg p-4 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <ul className="space-y-2">
                  <li
                    className={`hover:text-gray-300 transition cursor-pointer ${
                      language === "ru" ? "text-white font-semibold" : "text-gray-400"
                    }`}
                    onClick={() => setLanguage("ru")}
                  >
                    Русский
                  </li>
                  <li
                    className={`hover:text-gray-300 transition cursor-pointer ${
                      language === "en" ? "text-white font-semibold" : "text-gray-400"
                    }`}
                    onClick={() => setLanguage("en")}
                  >
                    English
                  </li>
                </ul>
              </div>
            </div>

            {/* Кнопка "Покупаем трафик" */}
            <button className="bg-white text-black px-4 py-2 rounded-xl shadow hover:scale-110 transition-transform duration-300">
              {language === "ru" ? "Покупаем трафик" : "Buy Traffic"}
            </button>
          </div>
        </div>
      </header>

      <section className="h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{texts[language].title}</h1>
          <p className="text-lg text-gray-400 mb-6">{texts[language].description}</p>
          <button className="bg-white text-black px-6 py-2 rounded-xl shadow hover:scale-110 transition-transform duration-300">
            {texts[language].startIntegration}
          </button>
          <div onClick={scrollToServices} className="mt-4 flex items-center justify-center text-sm text-gray-400 hover:text-white cursor-pointer">
            <span className="mr-1">{texts[language].learnMore}</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen px-6 py-12 flex flex-col justify-center space-y-12">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-6 items-center">
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg w-full max-w-3xl hover:shadow-white/20 transition-shadow duration-500">
            <h2 className="text-xl font-semibold mb-2">{texts[language].whatWeOffer}</h2>
            <div className="flex gap-4 mb-4">
              <button className={`px-3 py-1 rounded ${tab === "accept" ? "bg-white text-black" : "border border-gray-500 text-gray-300 hover:scale-105"}`} onClick={() => handleTabChange("accept")}>Приём крипты</button>
              <button className={`px-3 py-1 rounded ${tab === "convert" ? "bg-white text-black" : "border border-gray-500 text-gray-300 hover:scale-105"}`} onClick={() => handleTabChange("convert")}>Конвертация</button>
              <button className={`px-3 py-1 rounded ${tab === "invoice" ? "bg-white text-black" : "border border-gray-500 text-gray-300 hover:scale-105"}`} onClick={() => handleTabChange("invoice")}>Счета и API</button>
            </div>
            <p className="text-sm text-gray-300">
              {tab === "accept" && "Интеграция через виджет, Telegram-бот или API. Поддержка BTC, ETH, USDT и других."}
              {tab === "convert" && "Мгновенная конвертация в фиат на бирже или стейблкоины. Лёгкое управление балансом."}
              {tab === "invoice" && "Создавайте счета и ссылки на оплату. Контроль статусов, вебхуки, аналитика."}
            </p>
          </div>

          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg w-full max-w-3xl hover:shadow-white/20 transition-shadow duration-500">
            <h2 className="text-xl font-semibold mb-2">{texts[language].liquidity}</h2>
            <p className="text-sm text-gray-300">Мы сотрудничаем с крупнейшими платформами: Binance, Kraken, OKX и другими.</p>
          </div>

          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg w-full max-w-3xl hover:shadow-white/20 transition-shadow duration-500">
            <h2 className="text-xl font-semibold mb-2">{texts[language].globalReach}</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>✅ Работаем по всему миру, без ограничений по ГЕО</li>
              <li>✅ Принимаем проекты любой зоны риска</li>
              <li>✅ Персональные решения под ваш бизнес</li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg w-full hover:shadow-white/20 transition-shadow duration-500">
              <h2 className="text-xl font-semibold mb-4">{texts[language].reliability}</h2>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✅ Совместимость с KYC/AML</li>
                <li>✅ Контроль рисков и поддержка 24/7</li>
                <li>✅ Надёжное шифрование данных</li>
              </ul>
            </div>

            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg w-full hover:shadow-white/20 transition-shadow duration-500">
              <h2 className="text-xl font-semibold mb-4">{texts[language].startNow}</h2>
              <button className="bg-white text-black px-4 py-2 rounded-xl shadow hover:scale-110 transition-transform duration-300 mb-3">
                {texts[language].startIntegration}
              </button>
              <p className="text-sm text-gray-400">
                Или свяжитесь с нами через Telegram: <span className="text-white">@cryptoteam</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full px-6 py-6 border-t border-white/10 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8">
          <div className="font-semibold">Cryptoopen © {new Date().getFullYear()}</div>
          <div className="flex flex-col gap-2 text-center">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            <a href="#" className="hover:text-white transition-colors">GDPR</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white transition-colors">
              <Send size={24} />
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {chatOpen && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-neutral-900 rounded-2xl shadow-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white text-lg font-semibold">Чат поддержки</h3>
            <button onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-white">
              ✖
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              className="w-full h-24 p-2 rounded-md bg-black/80 text-white placeholder-gray-400 resize-none"
              placeholder="Напишите сообщение..."
            />
            <button className="w-full bg-white text-black py-2 rounded-xl hover:scale-105 transition-transform duration-300">
              Отправить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
