'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({href, children}){

    const path = usePathname()

    return(
        <Link
        href={href}
        className={`hover:text-yellow-400 ${path.startsWith(href) ? 'text-yellow-400' : 'text-white'}`}
             >
        {children}
        </Link>
    )
}