import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Futer from "../components/Futer";
import { Link } from "react-router-dom";
import IdenticalForm from "../components/IdenticalForm";

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

export default function CryptoProcessingPage() {
  const [tab, setTab] = useState("accept");
  const [language, setLanguage] = useState("en");
  const [chatOpen, setChatOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentReview, setCurrentReview] = useState(0); // Текущий отзыв

  const reviews = [
    {
      stars: "★★★★★",
      text: "“With Cryptoopen, we integrated payments in 1 day. Support is 🔥”",
      author: "Anna Petrova",
    },
    {
      stars: "★★★★☆",
      text: "“Very flexible. Telegram bot saved us hours of work.”",
      author: "Igor Smirnov",
      position: "Product Manager at BitFlow",
    },
    {
      stars: "★★★★★",
      text: "“The integration process was seamless, and the support team was always available.”",
      author: "John Doe",
      position: "CTO at FinTech Solutions",
    },
  ];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Autoplay],
      loop: true, // Зацикливание
      autoplay: {
        delay: 4000, // Интервал 4 секунды
        disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
      },
      navigation: {
        nextEl: "#next",
        prevEl: "#prev",
      },
      slidesPerView: 1, // Показывать только один слайд
      spaceBetween: 30, // Расстояние между слайдами
    });

    return () => {
      swiper.destroy(); // Уничтожение Swiper при размонтировании компонента
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length); // Зацикливание
    }, 4000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [reviews.length]);

  const scrollToServices = () => {
    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabChange = (newTab) => {
    if (newTab !== tab) {
      setTab(newTab);
    }
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
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
          <div className="text-white text-lg font-semibold">CryptoOpen</div>
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
      </section>

      {/* Second Block */}
      <section id="services" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Заголовок и подзаголовок */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-4">With us you will do</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We offer a full range of services for working with cryptocurrencies. Choose what you need - or use them all at once.
            </p>
          </div>

          {/* Карточки */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Карточка 1 */}
            <div className="group relative flex flex-col bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700">
            <div className="absolute -top-8 -right-8 bg-[#c98f0d] text-black w-20 h-20 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:rotate-12">
              <i className="fas fa-wallet text-3xl"></i>
            </div>
              <h5 className="text-2xl font-bold text-white mb-4 text-center mt-6">
                Gateway & Processing
              </h5>
              <p className="text-gray-400 text-base text-justify">
                Accept payments on your website in BTC, ETH, USDT and other tokens. Our platform ensures secure and fast transactions, making it easy for businesses to integrate cryptocurrency payments.
              </p>
            </div>

            {/* Карточка 2 */}
            <div className="group relative flex flex-col bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700">
            <div className="absolute -top-8 -right-8 bg-[#c98f0d] text-black w-20 h-20 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:rotate-12">
                <i className="fas fa-exchange-alt text-3xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 text-center mt-6">
                Crypto Exchange
              </h5>
              <p className="text-gray-400 text-base text-justify">
                Exchange assets to fiat at a fixed rate anytime. Our service provides competitive rates and ensures that your transactions are processed quickly and securely.
              </p>
            </div>

            {/* Карточка 3 */}
            <div className="group relative flex flex-col bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700">
             <div className="absolute -top-8 -right-8 bg-[#c98f0d] text-black w-20 h-20 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:rotate-12">
                <i className="fas fa-handshake text-3xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 text-center mt-6">
                OTC deals and Liquidity
              </h5>
              <p className="text-gray-400 text-base text-justify">
                We work only with verified platforms: Binance, Kraken, OKX. Our OTC services ensure high liquidity and competitive pricing for large transactions.
              </p>
            </div>

            {/* Карточка 4 */}
            <div className="group relative flex flex-col bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700">
             <div className="absolute -top-8 -right-8 bg-[#c98f0d] text-black w-20 h-20 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:rotate-12">
                <i className="fas fa-file-alt text-3xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 text-center mt-6">
                Company and Licences
              </h5>
              <p className="text-gray-400 text-base text-justify">
                Legal support in company registration and licensing of crypto activities. We help you navigate the complexities of compliance and ensure your business operates within legal frameworks.
              </p>
            </div>

            {/* Карточка 5 */}
            <div className="group relative flex flex-col bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700">
            <div className="absolute -top-8 -right-8 bg-[#c98f0d] text-black w-20 h-20 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:rotate-12">
                <i className="fas fa-bullhorn text-3xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 text-center mt-6">
                Traffic and Clients
              </h5>
              <p className="text-gray-400 text-base text-justify">
                A flow of warm leads to your sales department we bring in a direct client. Our marketing strategies ensure you reach the right audience effectively.
              </p>
            </div>

            {/* Карточка 6 */}
            <div className="group relative flex flex-col bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-3xl shadow-lg border border-gray-700">
             <div className="absolute -top-8 -right-8 bg-[#c98f0d] text-black w-20 h-20 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:rotate-12">
                <i className="fas fa-headset text-3xl"></i>
              </div>
              <h5 className="text-2xl font-bold text-white mb-4 text-center mt-6">
                24/7 Support
              </h5>
              <p className="text-gray-400 text-base text-justify">
                Our specialists are available in Telegram around the clock. We provide prompt and effective support to address your concerns anytime.
              </p>
            </div>
          </div>

          {/* Надпись-ссылка */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="text-yellow-400 text-lg font-semibold flex items-center justify-center transition-all duration-300"
              style={{ fontSize: "1rem" }} // Базовый размер шрифта
              onMouseEnter={(e) => {
                e.currentTarget.style.fontSize = "1.125rem"; // Увеличение шрифта на 2
                e.currentTarget.querySelector("svg").style.transform = "translateX(4px)"; // Движение стрелки
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.fontSize = "1rem"; // Возврат к базовому размеру
                e.currentTarget.querySelector("svg").style.transform = "translateX(0)"; // Возврат стрелки
              }}
            >
              See more ...
              <ArrowRight size={20} className="ml-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Карусель логотипов */}
        <div className="logo-carousel-wrapper mt-20 w-full overflow-hidden" mb-4>
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
          </div>
        </div>

        {/* Надпись под каруселью */}
        <div className="text-center mt-8">
          <p className="text-lg text-gray-400 font-semibold mb-4">
            Over 100+ Popular Crypto currencies and tokens supported
          </p>
          <p className="text-lg text-gray-400 font-semibold">
            Best quotes for OTC trades
          </p>
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
                src="/images/1.jpg" // Пример изображения
                alt="About Us"
                className="rounded-3xl shadow-lg w-full max-w-md mx-auto" // Ограничение ширины
                style={{ filter: "brightness(80%)" }} // Затемнение на 20%
              />
              <div className="absolute bottom-4 right-4 bg-yellow-600 text-black px-6 py-4 rounded-lg shadow-lg">
                <h4 className="text-2xl font-bold">15+ Years of Experience</h4>
                <p className="text-sm">In the field of Business & Payments solutions</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* Отзывной блок */}
      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Правая часть: отзыв */}
            <div
              className="p-8 border border-gray-700 rounded-3xl shadow-lg bg-gradient-to-br from-[#111827] to-[#1f2937] max-w-[634px] w-full h-[200px] mx-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400 text-xl">{reviews[currentReview].stars}</span>
                </div>
                <p className="text-sm italic mb-6 text-gray-300">{reviews[currentReview].text}</p>
              </div>
              <div>
                <div className="font-semibold text-white">{reviews[currentReview].author}</div>
                <div className="text-gray-400 text-sm">{reviews[currentReview].position}</div>
              </div>
            </div>

            {/* Левая часть: заголовок, описание и стрелочки */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients Speak Highly</h2>
              <p className="text-gray-400 max-w-md mb-6">
                Hear directly from those who have experienced the impact of our partnership and achieved their strategic goals.
              </p>
              {/* Стрелочки */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c222c] hover:bg-[#12303d]"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c222c] hover:bg-[#12303d]"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Block – Why Trust Matters */}
      <section id="trust" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-4">Why Trust Matters</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              In the world of crypto, transparency and security come first. Here’s how we ensure it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Card 1 */}
            <div className="bg-dark rounded-3xl p-6 h-full text-center border border-yellow-400">
              <div className="mb-3 text-yellow-400 text-4xl transition-transform duration-300 hover:scale-110">
                <i className="fas fa-key"></i> {/* Font Awesome Key Icon */}
              </div>
              <h5 className="text-xl font-bold text-white mb-2">Escrow & Verification</h5>
              <p className="text-gray-400 text-sm">
                Secure deals managed through trusted intermediaries and verified identities.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-dark rounded-3xl p-6 h-full text-center border border-yellow-400">
              <div className="mb-3 text-yellow-400 text-4xl transition-transform duration-300 hover:scale-110">
                <i className="fas fa-file-alt"></i> {/* Font Awesome File Icon */}
              </div>
              <h5 className="text-xl font-bold text-white mb-2">Transparent Terms</h5>
              <p className="text-gray-400 text-sm">
                Every transaction is governed by clear and open terms and policies.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-dark rounded-3xl p-6 h-full text-center border border-yellow-400">
              <div className="mb-3 text-yellow-400 text-4xl transition-transform duration-300 hover:scale-110">
                <i className="fas fa-globe"></i> {/* Font Awesome Globe Icon */}
              </div>
              <h5 className="text-xl font-bold text-white mb-2">International Standards</h5>
              <p className="text-gray-400 text-sm">
                Operating in accordance with EU laws and global FATF recommendations.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-dark rounded-3xl p-6 h-full text-center border border-yellow-400">
              <div className="mb-3 text-yellow-400 text-4xl transition-transform duration-300 hover:scale-110">
                <i className="fas fa-shield-alt"></i> {/* Font Awesome Shield Icon */}
              </div>
              <h5 className="text-xl font-bold text-white mb-2">AML/KYC & NDA</h5>
              <p className="text-gray-400 text-sm">
                Compliant with data protection, confidentiality policies, and legal safeguards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-1/2 mb-8">
              <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">Fast. Simple. Secure.</h2>
              <p className="text-lg text-gray-400">
                At CryptoOpen, we don't just deliver services — we deliver outcomes. Our process is built for speed, clarity, and confidence. Whether you're launching or scaling, we keep it seamless and secure — so you stay focused on results.
              </p>
            </div>
            <div className="lg:w-1/2 relative step-line ml-12">
              <div className="step-wrapper">
                <div className="step-icon">
                  <img src="https://img.icons8.com/ios-filled/50/ffc107/telegram-app.png" alt="Submit Icon" className="h-7 w-7" />
                </div>
                <h5 className="text-xl font-bold text-white">Submit Request</h5>
                <p className="text-gray-400">Client sends us their needs via Telegram or form</p>
              </div>

              <div className="step-wrapper">
                <div className="step-icon">
                  <img src="https://img.icons8.com/ios-filled/50/ffc107/task.png" alt="Clarify Icon" className="h-7 w-7" />
                </div>
                <h5 className="text-xl font-bold text-white">Clarify Details</h5>
                <p className="text-gray-400">We analyze and confirm requirements</p>
              </div>

              <div className="step-wrapper">
                <div className="step-icon">
                  <img src="https://img.icons8.com/ios-filled/50/ffc107/maintenance.png" alt="Execution Icon" className="h-7 w-7" />
                </div>
                <h5 className="text-xl font-bold text-white">Execution</h5>
                <p className="text-gray-400">We implement solution or transaction</p>
              </div>

              <div className="step-wrapper">
                <div className="step-icon">
                  <img src="https://img.icons8.com/ios-filled/50/ffc107/chat.png" alt="Support Icon" className="h-7 w-7" />
                </div>
                <h5 className="text-xl font-bold text-white">Ongoing Support</h5>
                <p className="text-gray-400">Client receives updates, support & reports</p>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .step-wrapper {
            position: relative;
            padding-left: 80px;
            margin-bottom: 3rem;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease forwards;
          }
          .step-wrapper:nth-of-type(1) { animation-delay: 0.2s; }
          .step-wrapper:nth-of-type(2) { animation-delay: 0.4s; }
          .step-wrapper:nth-of-type(3) { animation-delay: 0.6s; }
          .step-wrapper:nth-of-type(4) { animation-delay: 0.8s; }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .step-icon {
            position: absolute;
            left: 0;
            top: 0;
            width: 60px;
            height: 60px;
            background: #111;
            border: 2px solid #ffc107;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          {/*.step-line::before {
            content: '';
            position: absolute;
            left: 29px;
            top: 70px;
            width: 2px;
            height: calc(100% - 60px);
            background-color: #444;
          } */}
        `}</style>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12"> {/* Ещё больше увеличена ширина */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Everything you need to know about CryptoOpen — clearly explained and always up to date.
            </p>
          </div>

          <div className="faq-block flex flex-col gap-4 max-w-5xl mx-auto"> {/* Увеличена ширина блока вопросов */}
            {/* FAQ Card 1 */}
            <div className="faq-card bg-[#0a0a0a] border border-gray-700 rounded-3xl p-6 transition-shadow hover:shadow-lg">
              <button
                className="faq-question w-full text-left text-lg font-semibold text-white flex justify-between items-center"
                onClick={(e) => {
                  const card = e.currentTarget.closest(".faq-card");
                  card.classList.toggle("active");
                }}
              >
                What is CryptoOpen?
                <span className="icon bg-yellow-400 text-black rounded-full w-7 h-7 flex items-center justify-center font-bold transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer mt-4 text-gray-400 text-sm hidden">
                CryptoOpen is a secure and scalable crypto gateway and OTC solution provider offering tailored services for Web3 businesses, including acquiring, licensing, and liquidity solutions.
              </div>
            </div>

            {/* FAQ Card 2 */}
            <div className="faq-card bg-[#0a0a0a] border border-gray-700 rounded-3xl p-6 transition-shadow hover:shadow-lg">
              <button
                className="faq-question w-full text-left text-lg font-semibold text-white flex justify-between items-center"
                onClick={(e) => {
                  const card = e.currentTarget.closest(".faq-card");
                  card.classList.toggle("active");
                }}
              >
                How long does onboarding take?
                <span className="icon bg-yellow-400 text-black rounded-full w-7 h-7 flex items-center justify-center font-bold transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer mt-4 text-gray-400 text-sm hidden">
                Onboarding typically takes 24–48 hours, depending on compliance review. You will be guided by a personal manager at every step.
              </div>
            </div>

            {/* FAQ Card 3 */}
            <div className="faq-card bg-[#0a0a0a] border border-gray-700 rounded-3xl p-6 transition-shadow hover:shadow-lg">
              <button
                className="faq-question w-full text-left text-lg font-semibold text-white flex justify-between items-center"
                onClick={(e) => {
                  const card = e.currentTarget.closest(".faq-card");
                  card.classList.toggle("active");
                }}
              >
                Do I need a license to start?
                <span className="icon bg-yellow-400 text-black rounded-full w-7 h-7 flex items-center justify-center font-bold transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer mt-4 text-gray-400 text-sm hidden">
                Not necessarily. We offer models that do not require immediate licensing, and help you scale into compliant frameworks if needed.
              </div>
            </div>

            {/* FAQ Card 4 */}
            <div className="faq-card bg-[#0a0a0a] border border-gray-700 rounded-3xl p-6 transition-shadow hover:shadow-lg">
              <button
                className="faq-question w-full text-left text-lg font-semibold text-white flex justify-between items-center"
                onClick={(e) => {
                  const card = e.currentTarget.closest(".faq-card");
                  card.classList.toggle("active");
                }}
              >
                Can I try CryptoOpen before committing?
                <span className="icon bg-yellow-400 text-black rounded-full w-7 h-7 flex items-center justify-center font-bold transition-transform">
                  +
                </span>
              </button>
              <div className="faq-answer mt-4 text-gray-400 text-sm hidden">
                Yes. You can start with a single OTC transaction or test our acquiring API before full integration.
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .faq-card.active .faq-answer {
          display: block;
        }
        .faq-card.active .icon {
          transform: rotate(45deg);
        }
      `}</style>

      {/* Get a Free Consultation */}
      <IdenticalForm />

      {/* Footer */}
      <Futer />

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
            <h3 className="text-white text-lg font-semibold">Fast Chat</h3>
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
            Send
          </button>
        </div>
      )}
    </div>
  );
}
