import { Link } from "react-router-dom"


const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-3xl text-white bg-gradient-to-b from-sky-900 from-15% via-sky-800 via-40% to-sky-700 to-60% font-extrabold">
            <span className="m-8 animate-pulse"><h1>Ocorreu um erro!</h1>
            <p>Retornar para a página <Link className="text-cyan-500" to="/">princial</Link>?</p></span>
        </div>
    )
}


export default Error