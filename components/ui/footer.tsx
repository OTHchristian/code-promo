
export default function Footer() {
  return (
    <footer className="absolute left-0 w-full bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-6 mb-6">
          <h2 className="text-2xl font-bold text-white">
            Best Promo Codes for Bookmakers
          </h2>
          <p className="mt-4 md:mt-0 text-sm text-gray-500 max-w-lg">
            Our mission is simple: helping you save money on your online bets with exclusive and always valid promo codes.
          </p>
        </div>

        {/* Liens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="font-semibold text-white mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#what-is-bookmaker" className="hover:text-white">what&apos;s bookmarker</a></li>
              <li><a href="#advantages-bookmakers" className="hover:text-white">advantages</a></li>
              <li><a href="#ours-code" className="hover:text-white">ours codes</a></li>
              <li><a href="#testimonial" className="hover:text-white">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Assistance</a></li>
              <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Suivez-nous</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Best Promo Codes for Bookmakers. All rights reserved.
        </div>
      </div>
    </footer>

  );
}
