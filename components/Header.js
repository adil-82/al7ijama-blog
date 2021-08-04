import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.jpg';

export default function Header() {
    return (
        <header>
           <nav className="bg-red-900 md:px-2 px-2 py-4 shadow-2xl">
               <div dir="rtl" className=" flex justify-between items-center">
                    <Logo />
                    <SiteNav />
               </div>
            </nav> 
        </header>
    )
}

function Logo() {
    return (
        <Link href="/">
            <a>
                {/* <span className="bg-white inset-0 transform rounded "> */}
                {/* </span> */}
                <div className="relative text-center bg-white pb-5 px-2 transform skew-x-12 rounded-xl">


            <Image width={125} height={40} className="rounded-lg" src={logo} alt="logo" />
                <p className="absolute left-0 right-0 text-xs text-red-900 font-semibold m-0">
            مركز الحجامة للطب البديل
                </p>
                </div>
            </a>
        </Link>
    )
}

function SiteNav() {
    return (
        <div className="relative md:text-lg sm:text-base text-xs py-5 font-extrabold ">
            <Link href="/contact"><a className="bg-red-700 hover:bg-red-400 py-2 px-2 rounded-xl no-underline text-white">اتصل بنا</a></Link>
            <Link href="/qui-somme-nous"><a className="bg-red-700 hover:bg-red-400 py-2 px-2 md:mr-4 m-1 rounded-xl no-underline text-white"> من نحن </a></Link>
            {/* <Link href="/"><a className="bg-red-700 hover:bg-red-400 py-2 px-3 md:mr-4 m-1 rounded-xl no-underline text-white">الرئيسية</a></Link> */}
        </div>
    )
}