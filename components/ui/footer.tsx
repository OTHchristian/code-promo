import Image from "next/image";

export default function Footer() {
  return (
    <footer className="absolute left-0 w-full bg-white text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-6 mb-6">
          <h2 className="text-2xl font-bold text-black">أفضل أكواد البرومو لمواقع المراهنات</h2>
          <p className="mt-4 md:mt-0 text-sm text-gray-400">
            مهمتنا بسيطة: مساعدتك على التوفير في رهاناتك عبر الإنترنت من خلال أكواد برومو حصرية وصالحة دائماً.
          </p>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} أفضل أكواد البرومو لمواقع المراهنات. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
