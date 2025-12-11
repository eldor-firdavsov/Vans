import { Link, useLocation } from "react-router-dom";


export default function Header(){
    const location = useLocation()
    return(
        <header className="flex justify-between items-center py-[45px] px-[27px]  bg-[#FFF7ED] ">
            <Link className="font-black text-[26px]" to={''}>#VANLIFE</Link>

            <nav className="flex gap-3 items-center">
                <Link className={`font-semibold text-16px ${location.pathname === '/about' ? 'underline' : ''}`} to={'/about'}>About</Link>
                <Link className={`font-semibold text-16px ${location.pathname === '/vans' ? 'underline' : ''}`} to={'/vans'}>Vans</Link>
            </nav>
        </header>
    )
}