export default function ConsultationBlock() {
  return (
    <section className="py-12 bg-black text-white" id="consultation">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Get a Free Consultation</h2>
        <p className="text-lg text-gray-400 mb-8">
          Choose the way that works best for you – talk to us directly or let our AI guide you through.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Option 1: Talk to us directly */}
          <div className="flex flex-col items-center">
            <h5 className="text-2xl font-bold text-white mb-4">Talk to us directly</h5>
            <div className="flex items-center gap-4 mb-4">
              <img src="https://img.icons8.com/ios-filled/50/ffc107/telegram-app.png" alt="Telegram" className="h-8 w-8" />
              <a
                href="https://t.me/YourTelegram"
                className="text-yellow-400 text-lg font-semibold transition-all duration-300 hover:underline"
              >
                Telegram Chat
              </a>
            </div>
            <div className="flex items-center gap-4">
              <img src="https://img.icons8.com/ios-filled/50/ffc107/whatsapp.png" alt="WhatsApp" className="h-8 w-8" />
              <a
                href="https://wa.me/123456789"
                className="text-yellow-400 text-lg font-semibold transition-all duration-300 hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Option 2: AI Assistant */}
          <div className="flex flex-col items-center">
            <h5 className="text-2xl font-bold text-white mb-4">Crypto Open AI Assistant</h5>
            <p className="text-gray-400 text-base mb-4">
              Our bot is available 24/7 and ready to help you with crypto-related consultations instantly.
            </p>
            <a
              href="#"
              className="inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-yellow-500"
            >
              Start with AI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}