import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ru");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Логотип */}
        <div className="text-3xl font-bold text-white hover:scale-105 transition-transform duration-300">
          CryptoOpen
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

        {/* Кнопка открытия мобильного меню */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition duration-300 text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col">
          {/* Оверлей */}
          <div
            className="absolute inset-0"
            onClick={closeMenu}
          ></div>

          {/* Меню */}
          <div className="relative bg-black w-full max-w-md mx-auto p-6 transform transition-transform duration-300 translate-y-0">
            {/* Кнопка закрытия */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl"
              onClick={closeMenu}
            >
              <X />
            </button>

            {/* Ссылки меню */}
            <nav className="flex flex-col gap-6 text-lg text-center mt-12">
              <a
                href="#"
                className="hover:text-yellow-400 font-semibold transition duration-300"
                onClick={closeMenu}
              >
                Трафик и Клиенты
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 font-semibold transition duration-300"
                onClick={closeMenu}
              >
                Криптокомпании
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 font-semibold transition duration-300"
                onClick={closeMenu}
              >
                Ликвидность
              </a>
              <a
                href="#"
                className="hover:text-yellow-400 font-semibold transition duration-300"
                onClick={closeMenu}
              >
                Стать партнёром
              </a>
            </nav>

            {/* Переключатель языка и кнопка */}
            <div className="flex flex-col items-center gap-4 mt-12">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-white hover:text-yellow-400 transition duration-300"
              >
                <Globe size={20} />
                {language === "ru" ? "Русский" : "English"}
              </button>
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                Покупаем трафик
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}