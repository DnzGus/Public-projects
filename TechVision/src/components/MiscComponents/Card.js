import { Link } from "react-router-dom"


const Card = ({ title, alt, path, img }) => {
    return (
        <>
        <div className='w-72 ease-in transform hover:scale-110 transition duration-300 m-3'>
            <Link to={path}>
                <div className='flex text-center justify-center items-center h-48 rounded-2xl overflow-hidden'>
                <img src={img} alt={alt} className='blur-sm min-h-full'/>
                <h2 className='absolute text-yellow-400 font-extrabold text-2xl'>{title}</h2>
                </div>
            </Link>
        </div>
        </>
    )
}


export default Card