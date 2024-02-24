import { useState } from 'react'
import { navLinks } from '../constants'
import { headerLogo } from '../assets/images'

const Nav = () => {

    const [open, setOpen] = useState(false)

    const navLinkMap = () => navLinks.map((link) => (
        <li key={link.label}>
            <a href={link.href} className="montserrat text-slate-400 hover:text-coral-red">
                {link.label}
            </a>
        </li>
    ))

    return (
        <header className="absolute padding-x py-8 w-full z-10">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Nike" width={130} height={29}/>
                </a>
                {/* Desktop Nav Menu */}
                <ul className="flex flex-1 justify-center lg:justify-end items-center gap-16 max-lg:hidden">
                    { navLinkMap() }
                </ul>
                {/* Mobile Nav Menu */}
                <div className={"dropdown-menu relative inline-block lg:hidden " + (open ? "is-open" : "")}>
                    <button className="flex flex-col w-6 h-4 border-0 bg-transparent gap-[.45rem] outline-none" onClick={() => setOpen(!open)}>
                        <div className={"bg-coral-red h-[2px] w-full rounded-[5px] transition-all origin-left " + (open ? "rotate-45" : "")}></div>
                        <div className={"bg-coral-red h-[2px] w-full rounded-[5px] transition-all origin-left " + (open ? "opacity-0" : "")}></div>
                        <div className={"bg-coral-red h-[2px] w-full rounded-[5px] transition-all origin-left " + (open ? "-rotate-45" : "")}></div>
                    </button>
                    <div className={"dropdown-content absolute right-0 top-10 bg-white p-6 min-w-40 shadow-md rounded-md z-1 " + (open ? "block" : "hidden")}>
                        <ul className="flex flex-col justify-center items-end gap-6">
                            { navLinkMap() }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav