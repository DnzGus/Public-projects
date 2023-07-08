import { Link } from "react-router-dom"

const Links = ({pathLink, pathLocation}) => {
    return (
        <>
        <li>
            <Link to={pathLocation}>{pathLink}</Link>
        </li>
        </>
    )
}


export default Links