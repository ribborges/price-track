import Image from "next/image";
import Link from "next/link";
import { HeartFill, PersonFill, Search } from "react-bootstrap-icons";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/assets/icons/logo.svg"
                    width={27}
                    height={27}
                    alt="App logo"
                />
                <p className="nav-logo">
                    Price<span className="text-primary">Tracker</span>
                </p>
            </Link>

            <div className="nav-itens">
                <Search />
                <HeartFill />
                <PersonFill />
            </div>
        </nav>
    )
}