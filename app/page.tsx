'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white pl-4 pr-4">
      <NavBar></NavBar>
      <main className="bg-white">        
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

        <section className="w-full p-2.5 xl:p-5 text-black" id="nos-code-promo">
          <div className="text-center">
            <h1 className=" mt-10 text-4xl font-semibold">أكوادنا الترويجية الحصرية لمكاتب المراهنات</h1>
            <p>احصل على مكافآت الترحيب الخاصة بك وقم بزيادة رهاناتك من التسجيل الأول.</p>
          </div>
          <div className="text-center mt-5">
            <p>بفضل أكوادنا الترويجية التي تم التفاوض عليها خصيصًا مع أفضل وكلاء المراهنات، يمكنك الاستمتاع بفوائد حصرية من لحظة التسجيل: مكافآت الإيداع، والمراهنات المجانية، واسترداد النقود، وغير ذلك الكثير.</p>
            <p>هدفنا بسيط: أن نسمح لك ببدء رهاناتك بأقصى قدر من الفرص من خلال مضاعفة إيداعاتك الأولى وتقليل المخاطر.</p>
            <p>سواء كنت من مشجعي كرة القدم أو من مشجعي التنس أو من محبي الرياضات الإلكترونية، فإن أكوادنا الترويجية تفتح الأبواب أمام تجربة لعب غنية وأكثر ربحية وآمنة تمامًا.</p>
            <p>لا تفوت هذه الفرص: قم بتفعيل رمزك الترويجي الآن وراهن بذكاء.</p>
          </div>
          <div className="mt-10 w-full xl:w-3/4 grid grid-cols-1 xl:grid-cols-3 gap-5 mx-auto">
            <div className="h-100 border border-gray-200 rounded-xl"></div>
            <div className="h-100 border border-gray-200 rounded-xl"></div>
            <div className="h-100 border border-gray-200 rounded-xl"></div>
          </div>
        </section>

        <section className="w-full xl:p-5 mt-5 text-black" id="faq">
          <div className="grid cols-1 xl:grid-cols-2 gap-20">
            <div>
              <h1 className="text-2xl xl:text-4xl font-semibold">الأسئلة الشائعة</h1>
              <div className="mt-5 border border-gray-200 p-5 rounded-xl">
                <div className="flex w-full items-center justify-center">
                  <Image src={"https://cdn.prod.website-files.com/66f8845b6f7911f99d856648/66f8845b6f7911f99d8566d5_Icon%20Container.svg"} width={60} height={60} alt="help"></Image>
                </div>
                <div className="text-center mt-3.5">
                  <p>هل تحتاج إلى المزيد من المساعدة؟</p>
                  <p>إذا لم تتمكن من العثور على الإجابة التي تبحث عنها، يرجى الاتصال بنا بالنقر فوق الزر أدناه.</p>
                </div>
                <div className="flex w-full items-center justify-center">
                  <button className="flex items-center gap-2 bg-blue-900 rounded-full p-3.5 mt-3.5 text-white">
                    اتصل بنا
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Accordion
                type="single"
                collapsible
                className="w-full text-right"
                dir="rtl"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>ما هو كود برومو خاص بوكماكر؟</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      كود البرومو هو رمز خاص يمنحك مكافآت إضافية عند التسجيل أو
                      الإيداع في مواقع المراهنات الرياضية. يمكن أن يشمل مكافآت ترحيبية،
                      رهانات مجانية، أو استرداد نقدي.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>كيف أستخدم كود البرومو؟</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      العملية سهلة جداً: انسخ الكود من موقعنا وألصقه في خانة
                      البرومو عند التسجيل أو عند إجراء أول إيداع. سيتم تفعيل
                      المكافأة تلقائياً.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>هل الأكواد مجانية؟</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      نعم، جميع أكواد البرومو مجانية تماماً. هدفنا هو مساعدتك
                      على زيادة أرباحك منذ أول رهان.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>هل هذه الأكواد صالحة في الإمارات؟</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      تعمل الأكواد مع مواقع بوكماكر عالمية متاحة في الإمارات.
                      في بعض الحالات قد تحتاج إلى استخدام VPN وطرق دفع بديلة مثل
                      المحافظ الإلكترونية أو العملات الرقمية.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>ماذا أفعل إذا لم يعمل الكود؟</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      قد تنتهي صلاحية بعض الأكواد بمرور الوقت. نحن نقوم بتحديث
                      قائمتنا باستمرار لضمان أن جميع الأكواد المعروضة صالحة
                      ومجربة.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <hr className="border-gray-300 mt-20"/>
      </main>
      <Footer></Footer>
    </div>
  );
}
