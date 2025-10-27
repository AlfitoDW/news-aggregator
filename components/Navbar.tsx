import Link from "next/link";

export default function Navbar(){
  return (
    <nav className="bg-white shadow-sm  ">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
            <Link href= "/" className="text-xl font-bold text-blue-600">
                News<span className="text-gray-800">Aggregator</span>
            </Link>
            <div className="space-x-4 text-sm font-medium">
                <Link href= "/" className=" text-gray-950  hover:text-blue-600">
                    Beranda
                </Link>
                <Link href= "/news" className="text-gray-950 hover:text-blue-600">
                    Berita
                </Link>
                <Link href= "/about" className="text-gray-950 hover:text-blue-600">
                    Tentang
                </Link>
            </div>
        </div>
    </nav>
  )  
};