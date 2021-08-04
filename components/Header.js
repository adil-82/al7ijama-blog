import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.jpg';

export default function Header() {
    return (
        <header>
           <nav className="bg-red-900 px-8 py-4 shadow-2xl">
               <div dir="rtl" className="max-w-5xl mx-auto flex justify-between">
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
                <div className="relative bg-white pb-5 px-3 transform skew-x-12 rounded-xl">


            <Image width={100} height={40} className="rounded-lg" src={logo} alt="logo" />
                <p className="absolute text-xs text-black font-semibold m-0">
            مركز الحجامة للطب البديل
                </p>
                </div>
            </a>
        </Link>
    )
}

function SiteNav() {
    return (
        <div className="relative items-center py-5 font-extrabold ">
            <Link href="/contact"><a className="bg-red-700 hover:bg-red-400 py-2 px-3 rounded-xl no-underline text-white">اتصل بنا</a></Link>
            <Link href="/qui-somme-nous"><a className="bg-red-700 hover:bg-red-400 py-2 px-3 mr-4 rounded-xl no-underline text-white"> من نحن </a></Link>
            <Link href="/"><a className="bg-red-700 hover:bg-red-400 py-2 px-3 mr-4 rounded-xl no-underline text-white">الرئيسية</a></Link>
        </div>
    )
}