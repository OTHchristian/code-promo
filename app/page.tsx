'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PromoCard from "@/components/ui/card";
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
            <div className="hidden xl:block absolute left-0 top-0 z-20 bg-white h-[100vh] border-r border-r-blue-500 w-1/4 rounded-tr-full transform rotate-[-10deg] translate-x-[-60px] "></div>
            <div className="z-10 absolute w-full h-full xl:bg-gradient-to-b from-[rgba(0,0,0,0)] via-blue-100 to-white text-black flex xl:items-center justify-center">
              <div className="xl:w-3/5 xl:p-3.5 text-center">
              <h1 className="text-4xl mb-1 font-semibold"><span className="text-blue-500">+200% </span>on your first deposit</h1>
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
            <div className=" border border-gray-200 rounded-xl p-3.5">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500">+1000</h1>
                  <p className="text-gray-500 mt-3.5">users already benefit from our promo codes every day.</p>
                </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-3.5">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500">+500</h1>
                  <p className="text-gray-500 mt-3.5">offers available You can easily find exclusive bonuses for your favorite bookmarkers.</p>
                </div> 
            </div>
            <div className="border border-gray-200 rounded-xl p-3.5">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500">+200</h1>
                  <p className="text-gray-500 mt-3.5">partners.We work with the best brands to offer you maximum savings.</p>
                </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-3.5">
                <div className="text-center">
                  <h1 className="font-semibold text-3xl xl:text-4xl text-blue-500">+99%</h1>
                  <p className="text-gray-500 mt-3.5">satisfaction. Our users love saving online with our curated offers.</p>
                </div>
            </div>
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

        <section className="w-full p-2.5 xl:p-5 text-black" id="what-is-bookmarker">
        <div className="text-center">
          <h1 className=" mt-10 text-4xl font-semibold text-blue-500">What is a bookmaker and why use one?</h1>
            <p>Understand the role of bookmakers and how they make your online betting possible.</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10">
          <div className="h-100  rounded-xl flex">
            <Image src={'/1xbet.webp'} alt='1xbet' width={1000} height={1000} className=" w-full md:w-1/2 h-full"></Image>
            <Image src={'/melbet.webp'} alt='1xbet' width={1000} height={1000} className="hidden md:block w-1/3 h-full"></Image>
          </div>
          <div className="h-100  rounded-xl flex md:items-center">
            <div>
              <p>A bookmaker  is a platform specializing in taking sports or online gaming bets. Its role is to offer odds on various events—such as a football match, a boxing match, or a horse race—and allow players to bet on them.</p>
              <p className="mt-3.5">In exchange, the bookmaker manages stakes, calculates winnings, and pays out winning bettors. Each bookmaker can distinguish itself through its sign-up bonuses, promotional offers, payment methods, and the variety of its bets.</p>
              <p className="mt-3.5">By using a reputable bookmaker, players benefit from a secure experience, a wide selection of competitions, and, above all, exclusive advantages such as promo codes that boost initial deposits and maximize winnings.</p>
            </div>
          </div>
        </div>
        </section>

        <section className="w-full p-2.5 xl:p-5 text-black" id="advantages-bookmakers">
          <div className="text-center">
            <h1 className="mt-10 text-4xl font-semibold text-blue-500">
              Why Choose Online Bookmakers?
            </h1>
            <p>
              Discover the key benefits that make bookmakers the perfect choice for betting:
              security, bonuses, variety, and an easy-to-use experience.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mt-10">
            <div className="h-100 border border-gray-200 rounded-xl p-3.5">
              <h1 className="text-2xl font-semibold">1. Exclusive Bonuses</h1>
              <p>Get welcome bonuses, free bets, and promo codes that maximize your winnings.</p>
            </div>
            <div className="relative h-100 border border-gray-200 rounded-xl p-3.5">
              <h1 className="text-2xl font-semibold">2. Wide Variety of Sports</h1>
              <p>Bet on football, tennis, basketball, e-sports and many more events worldwide.</p>
            </div>
            <div className="relative h-100 border border-gray-200 rounded-xl p-3.5">
              <h1 className="text-2xl font-semibold">3. Safety & Reliability</h1>
              <p>All bookmakers are licensed, regulated and provide secure transactions.</p>
            </div>
            <div className="relative h-100 border border-gray-200 rounded-xl p-3.5">
              <h1 className="text-2xl font-semibold">4. Easy & Fast Experience</h1>
              <p>Simple platforms and mobile apps make betting smooth and accessible anywhere.</p>
            </div>
          </div>
        </section>


        <section className="w-full p-2.5 xl:p-5 text-black" id="nos-code-promo">
          <div className="text-center">
            <h1 className=" mt-10 text-4xl font-semibold text-blue-500">Our exclusive promo codes for bookmakers</h1>
            <p>Get your welcome bonus and increase your bets from the first registration.</p>
          </div>
          <div className="mt-10 w-full xl:w-3/4 grid grid-cols-1 xl:grid-cols-3 gap-5 mx-auto">
            <PromoCard
               name="1xbet"
               subtitle="Enjoy an explosive start with a generous bonus."
               code="GOTEN7"
               bonus="200% on your first deposit"
               logo="/1xbet.png"
            />
            <PromoCard
               name="888starz"
               subtitle="A world of exclusive games and offers"
               code="GOTEN7"
               bonus="100% on the first deposit"
               logo="/888starz.png"
            />
            <PromoCard
               name="Melbet"
               subtitle="The smart choice to boost your first bets"
               code="DTC44"
               bonus="100% on the first deposit"
               logo="/melbet.png"
            />
          </div>
        </section>

        <section className="w-full xl:p-5 mt-5" id="testimonial">
          <div className="text-center text-black">
            <h1 className="text-2xl xl:text-4xl font-semibold text-blue-500">Testimonials</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 mt-3.5">
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
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
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
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
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
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
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
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
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
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
            <div className="border border-gray-200 rounded-xl p-3.5">
              <div className="flex gap-3.5 items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
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
          </div>
          
        </section>

        <section className="w-full xl:p-5 mt-5 text-black" id="faq">
          <div className="grid cols-1 xl:grid-cols-2 gap-20">
            <div>
              <h1 className="text-2xl xl:text-4xl font-semibold">Frequently Asked Questions</h1>
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
                    If you can’t find the answer you’re looking for, please contact us by
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
            </div>
            <div>
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
                  <AccordionTrigger>What should I do if the code doesn’t work?</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Some codes may expire over time. We regularly update our list to
                      ensure that all codes displayed are valid and tested.
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
