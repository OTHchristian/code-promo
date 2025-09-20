export default function NavBar(){
    return (
        <nav className="h-[70px] w-full xl:w-3/4 sticky top-0  md:top-2.5 z-40 md:py-2.5 max-w-landing-width mx-auto flex justify-between items-center md:rounded-full border-b md:border border-[rgba(0,0,0,0.2)]  p-2 backdrop-blur-md bg-white/80">
            <ul className=" xl:w-1/3">
                <li className="font-semibold text-black"></li>
            </ul>
            <ul className="ml-10">
                <li className="flex  gap-2.5 p-2.5 xl:p-3.5 rounded-full bg-black items-center justify-center">
                    <span className="text-white">الرمز الترويجي</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </li>
            </ul>
        </nav>
    )
}