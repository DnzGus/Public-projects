import { Link } from "react-router-dom"


const Card = ({ title, alt, path, img }) => {
    return (
        <>
        <div className='w-64 ease-in transform hover:scale-110 transition duration-300 m-2'>
            <Link to={path}>
                <div className='flex text-center justify-center items-center rounded-2xl h-48 overflow-hidden'>
                <img src={img} alt={alt} className='blur-sm h-48'/>
                <h2 className='absolute text-yellow-300 font-extrabold text-3xl'>{title}</h2>
                </div>
            </Link>
        </div>
        </>
    )
}


export default Card