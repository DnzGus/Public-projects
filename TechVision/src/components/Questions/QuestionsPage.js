const QPage = () => {
    return (<main className="flex flex-col justify-center items-center flex-wrap min-h-screen m-0 bg-sky-950">
        <div className="flex flex-col justify-center items-center m-4 flex-wrap bg-slate-300 rounded-2xl shadow-black border-2 border-slate-700 shadow-xl p-16 gap-4">
            <button className="cursor-pointer hover:scale-105 text-red-600 font-semibold">Fale conosco.</button>
            <button className="cursor-pointer hover:scale-105 text-red-600 font-semibold">Privacidade.</button>
            <button className="cursor-pointer hover:scale-105 text-red-600 font-semibold">Reporte um erro.</button>
            <button className="cursor-pointer hover:scale-105 text-red-600 font-semibold">Suporte</button>
            <button className="cursor-pointer hover:scale-105 text-red-600 font-semibold">Serviços</button>
            <button className="cursor-pointer hover:scale-105 text-red-600 font-semibold">Serviço Digital</button>
        </div>
    </main>)
}


export default QPage