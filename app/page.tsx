import NavBar from "@/components/ui/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white pl-4 pr-4">
      <main className="">
        <NavBar></NavBar>
        
        <section className="w-full p-2.5 xl:p-5 mt-2.5 h-[calc(100vh-70px)]" id="hero-section">
          <div className="relative h-full flex overflow-hidden">
            <div className="hidden xl:block absolute left-0 top-0 z-20 bg-white h-[100vh] border-r border-r-gray-500 w-1/4 rounded-tr-full transform rotate-[-10deg] translate-x-[-60px] "></div>
            <div className="z-10 absolute w-full h-full xl:bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.2)] to-white text-black flex items-center justify-center">
              <div className="text-center">
                <div className="rounded-full p-3.5 bg-black text-white flex items-center justify-center gap-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                  </svg>
                  أكثر من 1000 شخص يستخدمون أكوادنا الترويجية
                </div>
                <h1 className=" mt-10 text-4xl font-semibold">اربح ووفر الكثير كل يوم باستخدام أكوادنا الحصرية</h1>
                <p>ابحث بسهولة عن أفضل أكواد الخصم والخصومات لعمليات الشراء عبر الإنترنت الخاصة بك ولا تفوت أبدًا صفقة رائعة.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3.5 mt-10">
                  <button className="w-full xl:w-fit rounded-full p-3.5 bg-black text-white">اكتشف أكواد الخصم</button>
                  <button className="w-full xl:w-fit rounded-full p-3.5 bg-white text-black border border-black">اكتشف مزايا جميع أكواد الخصم لدينا</button>
                </div>
              </div>
            </div>
            <div className="absolute z-0 h-full w-full">
              <Image src={'/bg.jpg'} width={10000} height={1000} alt="background" className="z-0 w-full h-full absolute"></Image>
            </div>
            <div className="hidden xl:block absolute right-0 z-20 bg-white  h-[100vh] border-l border-l-gray-500 w-1/4 rounded-tl-full transform rotate-[10deg] translate-x-[60px]"></div>
          </div>
        </section>

        <section className="w-full p-2.5 xl:p-5" id="stat">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:w-4/5 xl:mx-auto text-black">
            <div className=" border border-gray-200 rounded-xl p-10">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-5xl">+1000 مستخدم</h1>
                  <p className="text-gray-500 ">يستفيد الآلاف من الأشخاص بالفعل من أكوادنا الترويجية كل يوم.</p>
                </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-10">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-5xl">+500 عرض متاح</h1>
                  <p className="text-gray-500">يمكنك بسهولة العثور على خصومات حصرية لمتاجرك المفضلة.</p>
                </div> 
            </div>
            <div className="border border-gray-200 rounded-xl p-10">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-5xl">+200 شريك</h1>
                  <p className="text-gray-500">نحن نعمل مع أفضل العلامات التجارية لنقدم لك أقصى قدر من التوفير.</p>
                </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-10">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-5xl">+99% رضا</h1>
                  <p className="text-gray-500">يحب مستخدمونا التوفير عبر الإنترنت من خلال عروضنا المنسقة.</p>
                </div>
            </div>
          </div>
        </section>

        <section className="w-full p-2.5 xl:p-5" id="sponsor">
          <hr  className="border border-gray-200 mt-1.5"/>
          <div className="mt-1.5  grid grid-cols-3 md:grid-cols-6 items-center justify-center text-black">
              <div className="flex h-30 w-30 items-center justify-center overflow-hidden">
                <h1 className="xl:text-2xl font-bold">1XBET</h1>
              </div>
              <div className="hidden md:flex h-30 w-30  items-center justify-center overflow-hidden bg-gray-500 text-white rounded-xl">
                <h1 className="xl:text-2xl font-bold">22BET</h1>
              </div>
              <div className="h-30 w-30 flex items-center justify-center overflow-hidde bg-gray-500 text-white md:bg-white md:text-black rounded-xl">
                <h1 className="xl:text-2xl font-bold">BETWINNER</h1>
              </div>
              <div className="h-30 w-30 flex items-center justify-center overflow-hidden md:bg-gray-500 md:text-white rounded-xl">
                <h1 className="xl:text-2xl font-bold">BET365</h1>
              </div>
              <div className="hidden md:flex h-30 w-30 items-center justify-center overflow-hidden">
                <h1 className="xl:text-2xl font-bold">BETWAY</h1>
              </div>
              <div className="hidden md:flex h-30 w-30 items-center justify-center overflow-hidden bg-gray-500 text-white rounded-xl">
                <h1 className="xl:text-2xl font-bold">1BET</h1>
              </div>
          </div>
          <hr  className="border border-gray-200 mt-1.5"/>
        </section>

        <section className="w-full p-2.5 xl:p-5 text-black" id="what-is-bookmarker">
        <div className="text-center">
          <h1 className=" mt-10 text-4xl font-semibold">ما هو Bookmarker ولماذا نستخدمه؟</h1>
            <p>اكتشف كيف يمكن لعلامة مرجعية أن تبسط عملية التسوق عبر الإنترنت وتزيد من مدخراتك.</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10">
          <div className="h-100  rounded-xl flex">
            <Image src={'/1xbet.webp'} alt='1xbet' width={1000} height={1000} className=" w-full md:w-1/2 h-full"></Image>
            <Image src={'/melbet.webp'} alt='1xbet' width={1000} height={1000} className="hidden md:block w-1/3 h-full"></Image>
          </div>
          <div className="h-100  rounded-xl flex md:items-center">
            <div>
              <p>أداة تحديد المواقع ليست مجرد أداة، بل هي مساعدك الشخصي للعثور على أفضل العروض ورموز الخصم المتاحة على الإنترنت. بدلاً من قضاء ساعات في البحث عن الخصومات على كل موقع، تجمع أداة تحديد المواقع جميع العروض الترويجية في مكان واحد، جاهزة للاستخدام.</p>
              <p className="mt-3.5">باستخدام أداة الإشارة المرجعية، يمكنك بسهولة تصفية العروض حسب الفئة أو المتجر أو نوع المنتج، والوصول فورًا إلى أكواد الخصم الصالحة. يتيح لك هذا عدم تفويت أي عرض وتوفير المال في كل عملية شراء.</p>
              <p className="mt-3.5">باختصار، يوفر لك مُعلّم الكتب الوقت والمال وراحة البال. إنه الأداة الأساسية لكل من يرغب في التسوق بذكاء والاستفادة من جميع الخصومات المتاحة على الإنترنت.</p>
            </div>
          </div>
        </div>
        </section>

        <section className="w-full p-2.5 xl:p-5 text-black" id="advantages-bookmarker">
        <div className="text-center">
          <h1 className=" mt-10 text-4xl font-semibold">لماذا تختار Bookmarker للتسوق عبر الإنترنت؟</h1>
            <p>اكتشف المزايا التي تجعل من الإشارة المرجعية الحليف المثالي لتوفير المال وتوفير الوقت والاستفادة الكاملة من كل عرض.</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mt-10">
          <div className="h-100 border border-gray-200 rounded-xl p-3.5">
            <h1 className="text-2xl font-semibold">1. المدخرات المضمونة</h1>
            <p>احصل على أفضل أكواد الخصم والخصومات دون إضاعة الوقت.</p>
          </div>
          <div className="relative h-100 border border-gray-200 rounded-xl p-3.5">
            <h1 className="text-2xl font-semibold">2. توفير الوقت</h1>
            <p>لا داعي للبحث في كل مكان، جميع العروض مجمعة في مكان واحد.</p>
          </div>
          <div className="relative h-100 border border-gray-200 rounded-xl p-3.5">
            <h1 className="text-2xl font-semibold">3. موثوقية العروض</h1>
            <p>يتم التحقق من رموز العرض الترويجي واختبارها للتأكد من صحتها.</p>
          </div>
          <div className="relative h-100 border border-gray-200 rounded-xl p-3.5">
            <h1 className="text-2xl font-semibold">4. تجربة مبسطة</h1>
            <p>واجهة واضحة وبديهية للعثور على الخصم المثالي ببضع نقرات فقط.</p>
          </div>
        </div>
        </section>

      </main>
    </div>
  );
}
