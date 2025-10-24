import Link from "next/link";

export default function Navbar(){
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
            <Link href= "/" className="text-xl font-bold text-blue-600">
                News<span className="text-gray-800">Aggregator</span>
            </Link>
            <div className="space-x-4 text-sm font-medium">
                <Link href= "/" className="hover:text-blue-600">
                    Beranda
                </Link>
                <Link href= "/news" className="hover:text-blue-600">
                    Berita
                </Link>
                <Link href= "/about" className="hover:text-blue-600">
                    Tentang
                </Link>
            </div>
        </div>
    </nav>
  )  
};