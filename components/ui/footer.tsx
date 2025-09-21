import Image from "next/image";

export default function Footer() {
  return (
    <footer className="absolute left-0 w-full bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-700 pb-6 mb-6">
          <h2 className="text-2xl font-bold text-white"><span className="text-blue-500">Axe</span> digital</h2>
          <p className="mt-4 md:mt-0 text-sm text-gray-400">
            Nous aidons les e-commerçants à booster leurs ventes en ligne.
          </p>
        </div>

        {/* Liens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="font-semibold text-white mb-3">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#solutions" className="hover:text-white">Nos solutions</a></li>
              <li><a href="#pricing" className="hover:text-white">Nos prix</a></li>
              <li><a href="#testimonial" className="hover:text-white">Temoignages</a></li>
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
          © {new Date().getFullYear()} Axe digital. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
