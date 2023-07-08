import NavLink from "./NavLinks"
import Logo from "../IMGS/Logo.png"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="items-center flex justify-start gap-3 font-semibold text-white bg-sky-950 h-10">
            <Link to={"/"}><img src={Logo} alt="Company Logo" className="h-12 overflow-hidden"/></Link>
            <ul className="flex flex-row gap-5">
                <NavLink pathLink={"Home"} pathLocation={"/"}/>
                <NavLink pathLink={"Learn more!"} pathLocation={"LearnMore"}/>
                <NavLink pathLink={"About Us"}/>
            </ul>
        </nav>
    )
}


export default NavBar