import { Link } from "react-router-dom"

const Links = ({pathLink, pathLocation}) => {
    return (
        <>
        <li className="hover:scale-105 hover:font-semibold">
            <Link to={pathLocation}>{pathLink}</Link>
        </li>
        </>
    )
}


export default Links