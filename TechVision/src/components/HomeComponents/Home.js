import React from "react"
import Card from "../MiscComponents/Card"
import Company from "../IMGS/Company.jpg"
import Softwareimg from '../IMGS/SoftwareIMG.jpg'
import Consultoria from '../IMGS/Consultoria.jpg'
import Cloud from '../IMGS/Cloud.jpg'
import WorkWUs from '../MiscComponents/WorkFormAnimated'

const Home = () => {
    return (
        <main className="cursor-default">
            <div>
                <img src={Company} alt="Company Building" className="h-96 w-full"/>
            </div>
            <div className="text-center text-white p-1 flex flex-col h-full">
                <h1 className="animate-pulse font-extrabold text-yellow-300 text-5xl mt-2">TechVision</h1>
                <h3 className="text-start font-semibold text-xl p-2">Sobre nós:</h3>
                <p className="text-center p-3">A TechVision oferece uma ampla gama de serviços, incluindo desenvolvimento de software personalizado, consultoria em TI, soluções em nuvem, segurança cibernética e integração de sistemas. Nossa equipe altamente qualificada de especialistas técnicos e consultores de negócios está comprometida em oferecer soluções de alta qualidade, sob medida para cada cliente.<br/>
                Nosso objetivo é ser reconhecido como líderes do setor, referência em inovação e qualidade. Buscamos constantemente novas tecnologias e tendências emergentes para fornecer soluções de última geração que impulsionem o sucesso dos negócios de nossos clientes.<br/>
                A TechVision acredita que a tecnologia tem o poder de transformar negócios e impulsionar o progresso. Nosso objetivo é ser o parceiro confiável e de longo prazo de nossos clientes, ajudando-os a alcançar seus objetivos estratégicos por meio de soluções tecnológicas eficazes e serviços excepcionais.<br/>
                </p>
                <h3 className="text-start font-semibold text-xl p-2">Objetivo:</h3>
                <p className="text-center p-3">A TechVision tem como objetivo fornecer soluções tecnológicas inovadoras para empresas de todos os setores. Nosso objetivo é capacitar as empresas a alcançarem o máximo de eficiência, produtividade e crescimento por meio da aplicação estratégica de tecnologia. Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades exclusivas e fornecer soluções personalizadas que impulsionam o sucesso do negócio.<br/>
                </p>
            </div>
            <div className="flex mt-5 flex-col justify-center">
                <h3 className="p-2 font-semibold text-xl text-center text-white">Serviços:</h3>
                <div className="p-5 flex flex-row flex-wrap justify-evenly ">
                    <Card title={"Desenvolvimento de Software"} path={""} img={Softwareimg} alt={"Software Dev."}/>
                    <Card title={"Consultoria em TI"} path={""} img={Consultoria} alt={"Uma imagem ilustrativa de consultoria."}/>
                    <Card title={"Soluções em Nuvem"} path={""} img={Cloud} alt={"Tech Cloud."}/>
                </div>
            </div>
            <div className="bg-sky-950 p-10 flex justify-center items-center border-2 border-cyan-800 ">
                <WorkWUs />
            </div>
        </main>
    )
}


export default Home