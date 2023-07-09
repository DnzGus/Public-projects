import NavLink from "./NavLinks"
import Logo from "../IMGS/Logo.png"
import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

const NavBar = () => {
    
        return(
        <nav className=' items-center flex justify-start gap-3 font-thin text-yellow-300 bg-sky-950 h-10'>
            <Link to={"/"}><img src={Logo} alt="Company Logo" className="h-12 overflow-hidden"/></Link>
            <ul className="flex items-center flex-row gap-3 justify-between">
                <NavLink pathLink={"Home"} pathLocation={"/"}/>
                <li className="hover:scale-105 hover:font-semibold cursor-pointer">
                <ScrollLink 
                to="Servicos"
                spy={true}
                smooth={true}
                duration={800}>
                    <Link to={"/"}>Serviços</Link>
                </ScrollLink>
                </li>
                <NavLink pathLink={"Sobre nós"} pathLocation={"AboutUs"}/>
            </ul>
        </nav>
    )
}


export default NavBar