'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoCard from "@/components/ui/card";
import Compteur from "@/components/ui/compteur";
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navBar";
import Reveal from "@/components/ui/reveal";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("GOTEN7");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className=" pl-4 pr-4">
      <NavBar></NavBar>
      <main className="">

        <section className="w-full p-2.5 xl:p-5 mt-2.5 h-[calc(100vh-70px)]" id="hero-section">
          <div className="relative h-full flex overflow-hidden">
            <div className="hidden xl:block absolute left-0 top-0 z-20 bg-white h-[100vh] border-r border-r-blue-500 w-1/4 rounded-tr-full transform rotate-[-10deg] translate-x-[-60px] "></div>
            <div className="z-10 absolute w-full h-full xl:bg-gradient-to-b from-[rgba(0,0,0,0)] via-blue-100 to-white text-black flex mt-5 md::mt-0 md:items-center justify-center">
              <div className="xl:w-3/5 xl:p-3.5 text-center">
              <h1 className="text-4xl mb-1 font-semibold"><span className="text-blue-500 flex items-center justify-center">+<Compteur valeurFinale={200}></Compteur>% </span>on your first deposit</h1>
              <h1 className="text-4xl text-blue-500 font-semibold xl:mb-5">GOTEN7</h1>
                <div className="hidden xl:flex w-4/5 mx-auto rounded-full p-3.5 bg-blue-500 text-white items-center justify-center gap-3.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                  </svg>
                  More than 1000 people use our promo codes
                </div>
                <h1 className="mt-3.5 md:mt-10 text-4xl font-semibold">The best promo codes for your favorite <span className="text-blue-500">bookmakers</span>, all in one place!</h1>
                <p>Take advantage of exclusive offers, boost your first</p>
                <p>deposits and bet smart thanks to our always valid codes.</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3.5 mt-10">
                  <button className="w-full xl:w-fit rounded-full p-3.5 bg-blue-500 text-white">Discover Promo Codes</button>
                  <button className="w-full xl:w-fit rounded-full p-3.5 bg-white text-blue-500 border border-blue-500">Take Advantage of the Bonus Now</button>
                </div>
              </div>
            </div>
            <div className="hidden xl:block absolute right-0 z-20 bg-white  h-[100vh] border-l border-l-blue-500 w-1/4 rounded-tl-full transform rotate-[10deg] translate-x-[60px]">
            </div>
          </div>
        </section>

        <section className="w-full p-2.5 xl:p-5" id="stat">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:w-4/5 xl:mx-auto text-black">
            <Reveal>
              <div className=" border border-gray-200 h-38 rounded-xl p-3.5">
                  <div className="text-center">
                    <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500 flex items-center justify-center">+<Compteur valeurFinale={1000}></Compteur></h1>
                    <p className="text-gray-500 mt-3.5">users already benefit from our promo codes every day.</p>
                  </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="border border-gray-200 h-38 rounded-xl p-3.5">
                  <div className="text-center">
                    <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500 flex items-center justify-center">+<Compteur valeurFinale={500}></Compteur></h1>
                    <p className="text-gray-500 mt-3.5">offers available You can easily find exclusive bonuses for your favorite bookmarkers.</p>
                  </div> 
              </div>
            </Reveal>
            <Reveal>
              <div className="border border-gray-200 h-38 rounded-xl p-3.5">
                  <div className="text-center">
                    <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500 flex items-center justify-center">+<Compteur valeurFinale={200}></Compteur></h1>
                    <p className="text-gray-500 mt-3.5">partners.We work with the best brands to offer you maximum savings.</p>
                  </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="border border-gray-200 h-38 rounded-xl p-3.5">
                  <div className="text-center">
                    <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500 flex items-center justify-center">+<Compteur valeurFinale={99}></Compteur>%</h1>
                    <p className="text-gray-500 mt-3.5">satisfaction. Our users love saving online with our curated offers.</p>
                  </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* <section className="w-full p-2.5 xl:p-5" id="sponsor">
          <hr  className="border border-gray-200 mt-1.5"/>
          <div className="mt-1.5  grid grid-cols-3 md:grid-cols-3 items-center justify-center text-black">
              <div className="flex h-30 w-30 items-center justify-center overflow-hidden">
                <Image src={'/1xbet.png'} alt="" width={1000} height={1000}></Image>
              </div>
              <div className="h-30 w-30 flex items-center justify-center overflow-hidde text-white md:bg-white md:text-black rounded-xl">
                <Image src={'/betwinner.png'} alt="" width={1000} height={1000}></Image>
              </div>
              <div className="hidden md:flex h-30 w-30 items-center justify-center overflow-hidden">
                <Image src={'/888starz.png'} alt="" width={1000} height={1000}></Image>
              </div>
          </div>
          <hr  className="border border-gray-200 mt-1.5"/>
        </section> */}

        <section className="max-w-6xl mx-auto w-full p-2.5 xl:p-5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
            
            {/* Texte */}
            <div className="space-y-6">
              <Reveal direction="right">
                <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
                  Rejoignez plus de <span className="text-blue-500">1000+</span> parieurs gagnants sur 1xBet !
                </h1>
                <p className="text-lg">
                  Profitez de notre code promo exclusif pour{" "}
                  <span className="font-semibold text-blue-500">
                    doubler votre premier dépôt
                  </span>{" "}
                  et maximiser vos chances dès le début.
                </p>
                <ul className="space-y-2">
                  <li>Bonus de bienvenue <strong>200%</strong></li>
                  <li>Inscription rapide en 1 minute</li>
                  <li>Paiements sécurisés et variés</li>
                  <li>Accès à toutes les compétitions sportives & eSports</li>
                </ul>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button 
                    className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-500 transition" 
                    onClick={()=>window.location.href='https://refpa58144.com/L?tag=d_2945337m_1573c_&site=2945337&ad=1573'}
                  >
                    S&apos;inscrire maintenant
                  </button>
                  <button
                    onClick={handleCopy}
                    className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition"
                  >
                    {copied ? "✅ Code copié !" : "Copier le code promo"}
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Image illustration */}
            <div className="flex justify-center">
              <Reveal direction="left">
                <img
                  src="/pronostics-foot.webp"
                  alt="1xBet inscription"
                  className="rounded-2xl  max-h-[400px] object-cover"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto w-full p-2.5 xl:p-5" id="what-is-bookmaker">
          
          <div className="max-w-6xl mx-auto text-center">
            <Reveal>
              <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight">
                What is a bookmaker and why use one?
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                Understand the role of bookmakers and how they make your online betting possible.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mt-12 items-center justify-center">
            {/* Images */}
            <Reveal direction="right">
              <div className="relative flex gap-4">
                  <Image
                    src="/1xbet.webp"
                    alt="1xbet"
                    width={1000}
                    height={1000}
                    className="rounded-2xl mx-auto  w-2/3 md:w-1/2 object-cover"
                  />
                  <Image
                    src="/melbet.webp"
                    alt="melbet"
                    width={1000}
                    height={1000}
                    className="hidden md:block rounded-2xl w-1/3 object-cover"
                  />
              </div>
            </Reveal>

            {/* Text Content */}
            <div className="space-y-5 text-gray-800">
              <Reveal direction="left">
              <p className="leading-relaxed">
                A <span className="font-semibold text-blue-500">bookmaker</span> is a platform
                specializing in taking sports or online gaming bets. Its role is to offer odds
                on various events—such as a football match, a boxing match, or a horse race—and
                allow players to bet on them.
              </p>
              <p className="leading-relaxed">
                In exchange, the bookmaker manages stakes, calculates winnings, and pays out
                winning bettors. Each bookmaker can distinguish itself through its{" "}
                <span className="font-medium">sign-up bonuses</span>,{" "}
                <span className="font-medium">promotional offers</span>,{" "}
                <span className="font-medium">payment methods</span>, and the{" "}
                <span className="font-medium">variety of its bets</span>.
              </p>
              <p className="leading-relaxed">
                By using a reputable bookmaker, players benefit from a{" "}
                <span className="font-semibold text-blue-500">secure experience</span>, a wide
                selection of competitions, and, above all, exclusive advantages such as{" "}
                <span className="font-semibold">promo codes</span> that boost initial deposits
                and maximize winnings.
              </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto w-full p-2.5 xl:p-5" id="advantages-bookmakers">
          <div className="max-w-6xl mx-auto text-center">
            <Reveal>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight">
              Why Choose Online Bookmakers?
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the key benefits that make bookmakers the perfect choice for betting:
              <span className="font-medium text-blue-500"> security</span>, 
              <span className="font-medium text-blue-500"> bonuses</span>, 
              <span className="font-medium text-blue-500"> variety</span>, 
              and an <span className="font-medium text-blue-500">easy-to-use experience</span>.
            </p>
            </Reveal>
          </div>

          <div className="mt-3.5">
            <Reveal>
              <Image src={"/bookmarkers.jpg"} width={1000} height={1000} alt="bookmarker" className="mx-auto rounded-xl"></Image>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3.5 mt-3.5">
            {/* Card 1 */}
            <Reveal>
            <div className="border border-gray-200 bg-white rounded-2xl p-6  hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-blue-500">Exclusive Bonuses</h2>
              <p className="mt-3 text-gray-700">
                Get welcome bonuses, free bets, and promo codes that maximize your winnings.
              </p>
            </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal>
            <div className="border border-gray-200 bg-white rounded-2xl p-6  hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-blue-500">Wide Variety of Sports</h2>
              <p className="mt-3 text-gray-700">
                Bet on football, tennis, basketball, e-sports and many more events worldwide.
              </p>
            </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal>
            <div className="border border-gray-200 bg-white rounded-2xl p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-blue-500">Safety & Reliability</h2>
              <p className="mt-3 text-gray-700">
                All bookmakers are licensed, regulated and provide secure transactions.
              </p>
            </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal>
            <div className="border border-gray-200 bg-white rounded-2xl p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-blue-500">Easy & Fast Experience</h2>
              <p className="mt-3 text-gray-700">
                Simple platforms and mobile apps make betting smooth and accessible anywhere.
              </p>
            </div>
            </Reveal>
          </div>
        </section>

        <section className="max-w-6xl mx-auto w-full p-2.5 xl:p-5" id="nos-code-promo">
          <div className="text-center">
            <Reveal>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight">Our exclusive promo codes for bookmakers</h1>
            <p>Get your welcome bonus and increase your bets from the first registration.</p>
            </Reveal>
          </div>
          <div className="mt-3.5">
            <Reveal>
            <Image src={"/code-promo.webp"} width={800} height={800} alt="code promo" className="mx-auto rounded-xl"></Image>
            </Reveal>
          </div>
          <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
            <Reveal>
            <PromoCard
               name="1xbet"
               subtitle="Enjoy an explosive start with a generous bonus."
               code="GOTEN7"
               bonus="200% on your first deposit"
               logo="/1xbet.png"
               link="https://refpa58144.com/L?tag=d_2945337m_1573c_&site=2945337&ad=1573"
            />
            </Reveal>
            <Reveal>
            <PromoCard
               name="888starz"
               subtitle="A world of exclusive games and offers"
               code="GOTEN7"
               bonus="100% on the first deposit"
               logo="/888starz.png"
               link="https://top100bonus.com/L?tag=d_3330235m_40211c_&site=3330235&ad=40211"
            />
            </Reveal>
            <Reveal>
            <PromoCard
               name="Melbet"
               subtitle="The smart choice to boost your first bets"
               code="DTC44"
               bonus="100% on the first deposit"
               logo="/melbet.png"
               link="https://refpa3665.com/L?tag=d_3297580m_2170c_&site=3297580&ad=2170"
            />
            </Reveal>
            <Reveal>
            <PromoCard
               name="betwinner"
               subtitle="The smart choice to boost your first bets"
               code="GOTEN8"
               bonus="100% on the first deposit"
               logo=""
               link="#"
            />
            </Reveal>
            <Reveal>
            <PromoCard
               name="Megaparis"
               subtitle="The smart choice to boost your first bets"
               code="GOTEN7"
               bonus="100% on the first deposit"
               logo=""
               link="https://refpazitag.top/L?tag=d_3860481m_25437c_&site=3860481&ad=25437"
            />
            </Reveal>
          </div>
        </section>

        <section className="max-w-6xl mx-auto w-full p-2.5 xl:p-5" id="why-choose-code">
          <div className="max-w-6xl mx-auto text-center">
            <Reveal>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight">
              Why Choose Our Promo Code?
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Our exclusive promo code unlocks the best advantages for your betting journey: 
              <span className="font-medium text-blue-500"> higher bonuses</span>, 
              <span className="font-medium text-blue-500"> more rewards</span>, and 
              <span className="font-medium text-blue-500">maximum value</span> on every deposit.
            </p>
            </Reveal>
          </div>
          <div className="mt-3.5">
            <Reveal>
            <Image src={"/think.jpg"} width={500} height={500} alt="bookmarker" className="mx-auto rounded-xl"></Image>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 md:mt-12">
            {/* Card 1 */}
            <Reveal>
            <div className="border border-gray-200 bg-white rounded-2xl p-6  hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-blue-500">Bigger Welcome Bonus</h2>
              <p className="mt-3 text-gray-700">
                Enjoy an exclusive <span className="font-medium">200% bonus</span> on your first deposit
                when using our code — more than the standard offer.
              </p>
            </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal>
            <div className="border border-gray-200 bg-white rounded-2xl p-6  hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-blue-500">Extra Rewards</h2>
              <p className="mt-3 text-gray-700">
                Access <span className="font-medium">exclusive free bets</span> and ongoing promotions
                reserved only for players using our promo code.
              </p>
            </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal>
            <div className="border border-gray-200 bg-white rounded-2xl p-6  hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-blue-500">Faster Start</h2>
              <p className="mt-3 text-gray-700">
                With our code, your account is <span className="font-medium">activated instantly</span>, 
                letting you jump into betting without delays.
              </p>
            </div>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal>
          <div className="mt-12 text-center">
            <a
              href="#register"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-blue-600 transition"
            >
              Use Our Promo Code
            </a>
          </div>
          </Reveal>
        </section>

        <section className="max-w-6xl mx-auto w-full xl:p-5 mt-5" id="testimonial">
          <div className="text-center text-black">
            <Reveal>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight">Testimonials</h1>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 mt-3.5">
            <Reveal>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                  <p className="text-3xl text-white">A</p>
                </div>
                <p className="text-black">Ahmed Al-Mansouri</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>Thanks to promo codes, I doubled my first deposit on 1xBet. Simple, fast, and effective!</p>
              </div>

            </div>
            </Reveal>
            <Reveal>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                  <p className="text-3xl text-white">F</p>
                </div>
                <p className="text-black">Fatima Khaled</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>I didn&apos;t know how to use a promo code before, but the explanations are clear and I was able to take advantage of a great bonus</p>
              </div>

            </div>
            </Reveal>
            <Reveal>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                  <p className="text-3xl text-white">O</p>
                </div>
                <p className="text-black">Omar El-Haddad</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>Melbet has become my favorite bookmaker. The promo code gave me a real financial boost to get started.</p>
              </div>

            </div>
            </Reveal>
            <Reveal>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                  <p className="text-3xl text-white">L</p>
                </div>
                <p className="text-black">Layla Ben Youssef</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>I&apos;ve tried several sites, but the codes here are always valid. I&apos;ve saved and won more with my bets.</p>
              </div>

            </div>
            </Reveal>
            <Reveal>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                  <p className="text-3xl text-white">Y</p>
                </div>
                <p className="text-black">Youssef Al-Farouq</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>888Starz impressed me with its exclusive bonuses. Thanks for the promo code that gave me free spins upon registration.</p>
              </div>

            </div>
            </Reveal>
            <Reveal>
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                  <p className="text-3xl text-white">S</p>
                </div>
                <p className="text-black">Salma Nasser</p>
              </div>
              <div className="flex mt-3.5 gap-2 items-center text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <p className="ml-3.5 text-gray-300">5/5</p>
              </div>
              <div className="text-black">
                <p>Very satisfied! The promo codes are easy to copy and I was able to place bets immediately. I recommend this site to my friends.</p>
              </div>

            </div>
            </Reveal>
          </div>
          
        </section>

        <section className="w-full bg-gray-50 text-black py-16 px-6 rounded-2xl mt-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
            {/* Text and links */}
            <div className="space-y-6">
              <Reveal>
              <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
                Download the Best Bookmakers&apos; Apps
              </h1>
              <p className="text-lg text-gray-700">
                Access your favorite betting sites more easily from your mobile. 
                Click on the official links to install Android or iOS apps, or download the APK if the app is not available in the stores.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 mt-8">
                {/* 1xBet */}
                <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col items-start">
                  <h2 className="text-xl font-semibold mb-2">1xBet</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Android / iOS App or Official APK
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://1xbet.com/en/mobile" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition"
                    >
                      Download / Info
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?hl=en_CA&id=org.xbet.client.ng_ps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-blue-800 text-blue-800 rounded-md hover:bg-blue-50 transition"
                    >
                      Google Play
                    </a>
                  </div>
                </div>

                {/* Melbet */}
                <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col items-start">
                  <h2 className="text-xl font-semibold mb-2">Melbet</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    iOS App available, Android APK
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://apps.apple.com/in/app/melbet-sports-betting/id1005593631"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
                    >
                      App Store
                    </a>
                    <a
                      href="https://melbet.en.uptodown.com/android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-green-700 text-green-700 rounded-md hover:bg-green-50 transition"
                    >
                      Download APK
                    </a>
                  </div>
                </div>

                {/* BetWinner */}
                <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col items-start">
                  <h2 className="text-xl font-semibold mb-2">BetWinner</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Official Mobile Application
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://betwinner.com/en/mobile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition"
                    >
                      Get App / Info
                    </a>
                  </div>
                </div>

                {/* 888Starz */}
                <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col items-start">
                  <h2 className="text-xl font-semibold mb-2">888Starz</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Android & iOS APK Download
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://888starz.bet/en/mobile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition"
                    >
                      Download App
                    </a>
                    <a
                      href="https://888starz.en.uptodown.com/android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-red-700 text-red-700 rounded-md hover:bg-red-50 transition"
                    >
                      Download APK
                    </a>
                  </div>
                </div>

                {/* Megapari */}
                <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col items-start">
                  <h2 className="text-xl font-semibold mb-2">Megapari</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Mobile Download (Android / iOS)
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition"
                    >
                      Visit Site
                    </a>
                    {/* If APK or store available, add link here */}
                  </div>
                </div>
              </div>
              </Reveal>

            </div>

            {/* Image or illustration */}
            <div className="">
              <Reveal direction="left">
              <img
                src="/mobile.webp"
                alt="Mobile betting apps"
                width={1000}
                height={1000}
                className="rounded-xl mb-3.5"
              />
              <img
                src="/mobile2.webp"
                alt="Mobile betting apps"
                width={1000}
                height={1000}
                className="rounded-xl"
              />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto w-full xl:p-5 mt-5 text-black" id="faq">
          <div className="grid cols-1 xl:grid-cols-2 gap-20">
            <div>
              <Reveal>
              <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-blue-500 tracking-tight">Frequently Asked Questions</h1>
              </Reveal>
              <Reveal direction="right">
              <div className="mt-5 border border-gray-200 p-5 rounded-xl">
                <div className="flex w-full items-center justify-center">
                  <Image
                    src={
                      "https://cdn.prod.website-files.com/66f8845b6f7911f99d856648/66f8845b6f7911f99d8566d5_Icon%20Container.svg"
                    }
                    width={60}
                    height={60}
                    alt="help"
                  />
                </div>
                <div className="text-center mt-3.5">
                  <p>Do you need more help?</p>
                  <p>
                    If you can&apos;t find the answer you&apos;re looking for, please contact us by
                    clicking the button below.
                  </p>
                </div>
                <div className="flex w-full items-center justify-center">
                  <button className="flex items-center gap-2 bg-blue-900 rounded-full p-3.5 mt-3.5 text-white">
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              </Reveal>
            </div>
            <div>
              <Reveal direction="left">
              <Accordion
                type="single"
                collapsible
                className="w-full text-left"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is a bookmaker promo code?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      A promo code is a special code that gives you extra rewards when
                      registering or depositing on sports betting sites. It may include
                      welcome bonuses, free bets, or cashback.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I use a promo code?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      The process is very simple: copy the code from our website and paste
                      it into the promo field when registering or making your first deposit.
                      The bonus will be activated automatically.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Are the codes free?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Yes, all promo codes are completely free. Our goal is to help you
                      increase your winnings from your very first bet.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Are these codes valid in the UAE?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      The codes work with international bookmaker sites available in the
                      UAE. In some cases, you may need to use a VPN and alternative payment
                      methods such as e-wallets or cryptocurrencies.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What should I do if the code doesn&apos;t work?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Some codes may expire over time. We regularly update our list to
                      ensure that all codes displayed are valid and tested.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="joins-us"></section>

        <hr className="border-gray-300 mt-20"/>

      </main>

      <Footer></Footer>
    </div>
  );
}