'use client';

const Navbar = () => {
    return ( 
        <nav className="fixed top-1 md:top-8 h-20 w-screen flex justify-between items-center">
            <div className="flex justify-start items-center ml-6 md:ml-20">
                <img src="/images/logo.png" alt="Logo" className="w-[55px] md:w-[70px]"/>
                <div className="hidden md:block md:m-20 md:font-bold md:text-black md:text-[24px] whitespace-nowrap">
                    <a href="#">Crea Curriculum</a>
                    <a href="#" className="ml-20">Per le Aziende</a>
                </div>
            </div>
            <div className="flex items-center mr-6 md:mr-20">
                <button className="hidden md:block bg-transparent text-[#1f1695] py-3 px-8 border-2 border-[#7676767b] font-semibold">ISCRIVITI</button>
                <img src="/images/menu-hamburger.png" alt="Menu" className="block md:hidden w-[35px]"/>
            </div>
        </nav>
     );
}
 
export default Navbar;