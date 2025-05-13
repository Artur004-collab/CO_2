import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";

export default function navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ru");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Логотип */}
        <div className="text-xl font-bold text-white hover:scale-105 transition-transform duration-300">
          Cryptoopen
        </div>

        {/* Десктопное меню */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-400 items-center">
          <a href="#" className="hover:text-white transition duration-300">
            Трафик и Клиенты
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Криптокомпании
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Ликвидность
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Стать партнёром
          </a>
          <div className="flex items-center gap-4">
            {/* Переключатель языка */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition duration-300"
            >
              <Globe size={18} /> {language === "ru" ? "Русский" : "English"}
            </button>
            {/* Кнопка "Покупаем трафик" */}
            <button className="bg-white text-black px-4 py-2 rounded-xl shadow hover:bg-yellow-400 hover:text-black transition-transform duration-300">
              Покупаем трафик
            </button>
          </div>
        </nav>

        {/* Мобильное меню */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition duration-300 text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {/* Overlay меню для мобильных */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#0d0d0d] z-50 flex flex-col items-center text-white">
          {/* Кнопка закрытия */}
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <X />
          </button>

          {/* Ссылки меню */}
          <nav className="flex flex-col gap-6 text-lg text-center mt-20">
            <a
              href="#"
              className="hover:text-yellow-400 font-semibold transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Трафик и Клиенты
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 font-semibold transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Криптокомпании
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 font-semibold transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Ликвидность
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 font-semibold transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Стать партнёром
            </a>
          </nav>

          {/* Переключатель языка */}
          <div className="flex items-center gap-2 mt-12">
            <Globe size={20} />
            <button
              onClick={toggleLanguage}
              className="hover:text-yellow-400 font-semibold transition duration-300"
            >
              {language === "ru" ? "Русский" : "English"}
            </button>
          </div>

          {/* Кнопка "Покупаем трафик" */}
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl shadow hover:scale-110 transition-transform duration-300 mt-12">
            Покупаем трафик
          </button>
        </div>
      )}
    </header>
  );
}