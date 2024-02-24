import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'

const Nav = () => {
    return (
        <header className="absolute padding-x py-8 w-full z-10">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Nike" width={130} height={29}/>
                </a>
                <ul className="flex flex-1 justify-center lg:justify-end items-center gap-16 max-lg:hidden">
                    { navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="montserrat text-slate-400 hover:text-slate-500">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="flex flex-col w-6 h-4 border-0 bg-transparent gap-[.45rem] group/btn lg:hidden">
                    <div className="bg-black h-[2px] w-full rounded-[5px] transition-all origin-left group-hover/btn:rotate-45"></div>
                    <div className="bg-black h-[2px] w-full rounded-[5px] transition-all origin-left group-hover/btn:opacity-0"></div>
                    <div className="bg-black h-[2px] w-full rounded-[5px] transition-all origin-left group-hover/btn:-rotate-45"></div>
                </button>
            </nav>
        </header>
    )
}

export default Nav