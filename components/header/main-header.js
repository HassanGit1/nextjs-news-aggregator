import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader () {
    return(
        <header className="flex justify-between items-center mb-8">
            <div className="font-bold text-3xl tracking-widest">
            <Link className="hover:text-yellow-400"
             href="/">
            NextNews
            </Link>
            </div>
            <nav>
         <ul className="flex gap-8 font-bold tracking-wide text-3xl">
            <li>
                <NavLink className="hover:bg-yellow-400"
                href="/news">
                News
                </NavLink>
            </li>
            <li>
                <NavLink className="hover:bg-yellow-400"
                href="/archive">
                Archive
                </NavLink>
            </li>
         </ul>
         </nav>
        </header>
    )
}