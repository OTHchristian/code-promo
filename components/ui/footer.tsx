
export default function Footer() {
  return (
    <footer className="absolute left-0 w-full bg-[#f7fafb] text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-6 mb-6">
          <h2 className="text-2xl font-bold text-black">
            Best Promo Codes for Bookmakers
          </h2>
          <p className="mt-4 md:mt-0 text-sm text-gray-500 max-w-lg">
            Our mission is simple: helping you save money on your online bets with exclusive and always valid promo codes.
          </p>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Best Promo Codes for Bookmakers. All rights reserved.
        </div>
      </div>
    </footer>

  );
}
