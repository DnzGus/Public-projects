import React from "react"
import Card from "../MiscComponents/Card"
import Company from "../IMGS/Company.jpg"
import Softwareimg from '../IMGS/SoftwareIMG.jpg'
import Consultoria from '../IMGS/Consultoria.jpg'
import Cloud from '../IMGS/Cloud.jpg'
import WorkWUs from '../MiscComponents/WorkFormAnimated'
import ToyotaLogo from '../IMGS/ToyotaLogo.png'
import KabumLogo from '../IMGS/KabumLogo.png'
import DisneyLogo from '../IMGS/DisneyLogo.png'
import PumaLogo from '../IMGS/PumaLogo.png'
import CocaColaLogo from '../IMGS/CocaColaLogo.png'
import MagazineLogo from '../IMGS/MagazineLogo.png'
import PetrobrasLogo from '../IMGS/PetrobrasLogo.png'
import NissanLogo from '../IMGS/NissanLogo.png'
import PancoLogo from '../IMGS/PancoLogo.png'
import UCILogo from '../IMGS/UCILogo.png'





const Home = () => {
    return (
        <main>
                <div className='flex text-center justify-center items-center'>
                    <img src={Company} alt="Company Building" className="h-96 w-full"/>
                    <h2 className='absolute animate-pulse font-extrabold text-yellow-300 text-5xl'>TechVision</h2>
                </div>
            <article className="text-center mb-1 text-white p-2 flex flex-col flex-wrap bg-sky-950 border-2 border-cyan-800">
                <h3 className="text-start font-semibold text-xl p-2 text-yellow-300">Objetivo:</h3>
                <p className="text-center p-3">A TechVision tem como objetivo fornecer soluções tecnológicas inovadoras para empresas de todos os setores. Nosso objetivo é capacitar as empresas a alcançarem o máximo de eficiência, produtividade e crescimento por meio da aplicação estratégica de tecnologia. Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades exclusivas e fornecer soluções personalizadas que impulsionam o sucesso do negócio.<br/>
                </p>
                <h3 className="text-start font-semibold text-xl text-yellow-300 p-2">Por que contatar-nos?</h3>
                <p>
                A TechVision oferece serviços personalizados de desenvolvimento de software, consultoria em TI e soluções em nuvem. Com foco na inovação tecnológica, a empresa desenvolve software personalizado para atender às necessidades únicas de seus clientes.
                Sua consultoria em TI fornece orientação estratégica e soluções eficientes, ajudando as empresas a alcançarem a eficiência e o crescimento desejados.
                Além disso, a TechVision oferece soluções em nuvem para uma infraestrutura tecnológica escalável e segura. Com um compromisso com a excelência e impacto positivo nos negócios, a TechVision busca ser um parceiro confiável, reconhecido por sua inovação e qualidade.
                </p>
            </article>
            <div className="flex mt-1 flex-col justify-center" title="Servicos" id="Servicos" subtitle="Servicos">
                <h3 className="p-2 font-semibold text-xl text-center bg-sky-950 text-white border-2 border-cyan-800 mb-1">Serviços</h3>
                <div className="p-5 flex flex-row flex-wrap justify-evenly ">
                    <Card title={"Desenvolvimento de Software"} path={"Software"} img={Softwareimg} alt={"Software Dev."}/>
                    <Card title={"Consultoria em TI"} path={"Consultoria"} img={Consultoria} alt={"Uma imagem ilustrativa de consultoria."}/>
                    <Card title={"Soluções em Nuvem"} path={"Cloud"} img={Cloud} alt={"Tech Cloud."}/>
                </div>
            </div>
            <div className="flex justify-center flex-col w-100 bg-sky-600 border-2 border-cyan-800 bg-opacity-50 mb-2">
                <h3 className="font-semibold text-xl text-center bg-sky-950 text-yellow-300 border-b-2 border-cyan-800 mb-1">Empresas parceiras</h3>
                <div className="flex justify-evenly items-center flex-row p-5 h-10">
                    <img src={ToyotaLogo} alt="Logo da Toyota" className="w-16" />
                    <img src={KabumLogo} alt="Logo da Kabum" className="w-16" />
                    <img src={DisneyLogo} alt="Logo da Disney" className="w-16" />
                    <img src={PumaLogo} alt="Logo da Puma" className="w-16" />
                    <img src={CocaColaLogo} alt="Logo da Coca-Cola" className="w-16" />
                    <img src={MagazineLogo} alt="Logo da MagazineLuiza" className="w-16" />
                    <img src={PetrobrasLogo} alt="Logo da Petrobras" className="w-16" />
                    <img src={NissanLogo} alt="Logo da Nissan" className="w-16" />
                    <img src={PancoLogo} alt="Logo da Panco" className="w-16" />
                    <img src={UCILogo} alt="Logo da UCI" className="w-16" />
                </div>
            </div>
            <div className="bg-sky-950 p-10 flex justify-center items-center border-t-2 border-cyan-800">
                <WorkWUs />
            </div>
        </main>
    )
}


export default Home