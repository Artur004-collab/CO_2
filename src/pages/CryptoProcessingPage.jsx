import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function CryptoProcessingPage() {
  const [tab, setTab] = useState("accept");
  const [language, setLanguage] = useState("en");
  const [chatOpen, setChatOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Autoplay],
      loop: true,
      autoplay: {
        delay: 6000,
      },
      navigation: {
        nextEl: "#next",
        prevEl: "#prev",
      },
    });
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

  const texts = {
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
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center bg-black">
        <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">
          {texts.title}
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          {texts.description}
        </p>
        <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          {texts.startIntegration}
        </button>
        <div
          onClick={scrollToServices}
          className="mt-6 flex items-center justify-center text-sm text-gray-400 hover:text-yellow-400 cursor-pointer"
        >
          <span className="mr-2">{texts.learnMore}</span>
          <ArrowRight size={16} />
        </div>

        {/* Карусель логотипов */}
        <div className="logo-carousel-wrapper mt-20 w-full overflow-hidden">
          <div className="logo-carousel-track flex space-x-8 animate-marquee">
            {/* Логотипы токенов с CoinMarketCap */}
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="Bitcoin" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="Ethereum" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png" alt="Tether" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" alt="Binance" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" alt="Solana" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png" alt="Cardano" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png" alt="Polkadot" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png" alt="Dogecoin" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png" alt="Tron" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png" alt="XRP" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2.png" alt="Litecoin" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png" alt="Avalanche" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png" alt="Chainlink" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png" alt="Shiba Inu" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/512.png" alt="Stellar" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/328.png" alt="Monero" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png" alt="VeChain" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" alt="Tezos" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png" alt="Cosmos" className="h-12 w-auto" />
            {/* Дублирование для зацикливания */}
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="Bitcoin" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="Ethereum" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png" alt="Tether" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" alt="Binance" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" alt="Solana" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png" alt="Cardano" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png" alt="Polkadot" className="h-12 w-auto" />
            <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png" alt="Dogecoin" className="h-12 w-auto" />
          </div>
        </div>

        {/* CSS для карусели */}
        <style jsx>{`
          .logo-carousel-wrapper {
            position: relative;
            width: 100%;
            overflow: hidden;
          }

          .logo-carousel-track {
            display: flex;
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* Second Block */}
      <section id="services" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Заголовок и подзаголовок */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-4">Наши возможности</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Мы предлагаем полный спектр услуг для работы с криптовалютами. Выберите нужное — или используйте всё сразу.
            </p>
          </div>

          {/* Карточки */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Карточка 1 */}
            <div className="relative group bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700 hover:shadow-2xl transition-transform transform hover:scale-105">
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                <i className="fas fa-credit-card text-2xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                Crypto Acquiring
              </h5>
              <p className="text-gray-400 text-base">
                Accept payments in BTC, ETH, USDT. No KYC, via API or Telegram.
              </p>
            </div>

            {/* Карточка 2 */}
            <div className="relative group bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700 hover:shadow-2xl transition-transform transform hover:scale-105">
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                <i className="fas fa-sync-alt text-2xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                Crypto Conversion
              </h5>
              <p className="text-gray-400 text-base">
                Exchange assets to fiat at a fixed rate anytime.
              </p>
            </div>

            {/* Карточка 3 */}
            <div className="relative group bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700 hover:shadow-2xl transition-transform transform hover:scale-105">
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                <i className="fas fa-water text-2xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                Liquidity Providers
              </h5>
              <p className="text-gray-400 text-base">
                We work only with verified platforms: Binance, Kraken, OKX.
              </p>
            </div>

            {/* Карточка 4 */}
            <div className="relative group bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700 hover:shadow-2xl transition-transform transform hover:scale-105">
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                <i className="fas fa-handshake text-2xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                Partnership Program
              </h5>
              <p className="text-gray-400 text-base">
                Invite clients and earn a percentage of their transactions.
              </p>
            </div>

            {/* Карточка 5 */}
            <div className="relative group bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700 hover:shadow-2xl transition-transform transform hover:scale-105">
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                <i className="fab fa-telegram text-2xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                Telegram Integration
              </h5>
              <p className="text-gray-400 text-base">
                All features are available via Telegram bot. No website needed.
              </p>
            </div>

            {/* Карточка 6 */}
            <div className="relative group bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700 hover:shadow-2xl transition-transform transform hover:scale-105">
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-black w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                <i className="fas fa-headset text-2xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                24/7 Support
              </h5>
              <p className="text-gray-400 text-base">
                Our specialists are available in Telegram around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Block */}
      <section id="about" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-4">Learn More About Us</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We create innovative solutions that help businesses achieve their goals in a rapidly changing world.
            </p>
          </div>

          {/* Основной контент */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Левая часть: изображение */}
            <div className="relative">
              <img
                src="https://via.placeholder.com/600x400"
                alt="О нас"
                className="rounded-3xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-6 py-4 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold">20+ Years of Experience</h4>
                <p className="text-sm">In the field of innovative solutions</p>
              </div>
            </div>

            {/* Правая часть: текст и карточки */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Enhancing Business Efficiency Through Innovation
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                We focus on creating strategies that help our clients overcome challenges and achieve tangible results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Карточка 1 */}
                <div className="bg-[#111827] p-6 rounded-3xl shadow-lg border border-gray-700">
                  <i className="fas fa-users text-yellow-400 text-3xl mb-4"></i>
                  <h5 className="text-xl font-bold text-white mb-2">Поддержка команды</h5>
                  <p className="text-gray-400 text-sm">
                    Наша команда профессионалов предоставляет персонализированные услуги и эффективные решения.
                  </p>
                </div>

                {/* Карточка 2 */}
                <div className="bg-[#111827] p-6 rounded-3xl shadow-lg border border-gray-700">
                  <i className="fas fa-lightbulb text-yellow-400 text-3xl mb-4"></i>
                  <h5 className="text-xl font-bold text-white mb-2">Инновационный подход</h5>
                  <p className="text-gray-400 text-sm">
                    Мы разрабатываем уникальные стратегии, которые обеспечивают долгосрочный успех.
                  </p>
                </div>
              </div>
              <button className="mt-6 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывной блок */}
      <section className="bg-[#081b22] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Заголовок и описание */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients Speak Highly</h2>
              <p className="text-gray-400 max-w-md">
                Hear directly from those who have experienced the impact of our partnership and achieved their strategic goals.
              </p>
            </div>
            {/* Кнопки навигации */}
            <div className="flex gap-4 mt-6 md:mt-0">
              <button id="prev" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c222c] hover:bg-[#12303d]">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button id="next" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c222c] hover:bg-[#12303d]">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Слайдер */}
          <div className="swiper">
            <div className="swiper-wrapper">
              {/* Отзыв 1 */}
              <div className="swiper-slide bg-[#0f2932] rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>
                <p className="text-sm italic mb-6">
                  “С Cryptoopen мы подключили платёжку за 1 день. Поддержка — 🔥”
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="w-12 h-12 rounded-full object-cover"
                    alt="Анна Петрова"
                  />
                  <div>
                    <div className="font-semibold">Анна Петрова</div>
                    <div className="text-gray-400 text-sm">CEO Web3 Tech</div>
                  </div>
                </div>
              </div>

              {/* Отзыв 2 */}
              <div className="swiper-slide bg-[#0f2932] rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-xl">★★★★☆</span>
                </div>
                <p className="text-sm italic mb-6">
                  “Очень гибко. Telegram-бот сэкономил нам часы работы.”
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-12 h-12 rounded-full object-cover"
                    alt="Игорь Смирнов"
                  />
                  <div>
                    <div className="font-semibold">Игорь Смирнов</div>
                    <div className="text-gray-400 text-sm">Продакт BitFlow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-400">
        <p>{texts.privacy}</p>
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
