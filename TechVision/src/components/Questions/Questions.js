import { Link } from "react-router-dom"


const Questions = () =>{
    return (
        <div className=" justify-center flex text-center text-white">
            <p className="transition ease-in-out delay-75 hover:scale-110 duration-200 cursor-pointer font-extrabold text-4xl"><Link to="QPage">Tire suas dúvidas aqui!</Link></p>
        </div>
    )
}


export default Questions