import Link from 'next/link';
export default function Header() {
    return (
        <header>
           <nav className="bg-blue-500 text-blue-100 px-8 py-4">
               <div className="max-w-7xl mx-auto md:flex justify-between">
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
            <a className="relative inline-block p-2">
                <span className="bg-white absolute inset-0 transform rounded skew-y-1 skew-x-12"></span>
                <span className="relative font-bold text-blue-800 text-2xl">
                    Dev Blog
                </span>
            </a>
        </Link>
    )
}

function SiteNav() {
    return (
        <div className="hidden md:flex items-center">
            <Link href="/doc"><a className="font-semibold py-2 px-3 hover:text-white">Doc</a></Link>
            <Link href="/examples"><a className="font-semibold py-2 px-3 hover:text-white">Examples</a></Link>
            <Link href="/contact"><a className="font-semibold py-2 px-3 hover:text-white">Contact</a></Link>
        </div>
    )
}