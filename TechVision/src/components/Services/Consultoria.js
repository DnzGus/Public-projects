const Consultoria = () => {
    return (
        <main className="text-center justify-evenly flex items-center min-h-screen flex-col text-white">
            <h2 className="text-3xl font-extrabold p-2">Consultoria de TI</h2>
            <div className="flex flex-col justify-start p-6">
                <h3 className="font-semibold text-yellow-300">Análise de Negócio</h3>
                <p className="text-start">Os consultores realizam uma análise detalhada do negócio do cliente, examinando seus processos, estrutura organizacional, recursos e estratégias.
                Eles identificam pontos fortes, fraquezas, oportunidades e ameaças, e fornecem recomendações baseadas em sua expertise e conhecimento do setor.</p>
                <h3 className="font-semibold text-yellow-300">Planejamento Estratégico</h3>
                <p className="text-start">Com base na análise de negócio, os consultores ajudam a desenvolver um plano estratégico abrangente para orientar a organização em direção aos seus objetivos.
                Isso pode incluir estratégias de crescimento, reestruturação organizacional, otimização de processos, adoção de novas tecnologias e muito mais.</p>
                <h3 className="font-semibold text-yellow-300">Melhoria de Processos</h3>
                <p className="text-start">Os consultores auxiliam na identificação de oportunidades de melhoria nos processos existentes.
                Eles ajudam a eliminar gargalos, simplificar fluxos de trabalho, implementar eficiências operacionais e melhorar a qualidade dos produtos ou serviços.</p>
                <h3 className="font-semibold text-yellow-300">Implementação de Tecnologia</h3>
                <p className="text-start">A consultoria em TI também pode envolver a seleção, implementação e integração de sistemas e tecnologias adequadas às necessidades do cliente.
                Os consultores ajudam a identificar as melhores soluções tecnológicas para melhorar a eficiência, a segurança e a produtividade do negócio.</p>
                <h3 className="font-semibold text-yellow-300">Gerenciamento de Mudanças</h3>
                <p className="text-start">À medida que as recomendações são implementadas, os consultores auxiliam na gestão da mudança organizacional.
                Eles ajudam a comunicar as mudanças, treinar os funcionários afetados e acompanhar o progresso para garantir uma transição suave e bem-sucedida.</p>
                <h3 className="font-semibold text-yellow-300">Aconselhamento Estratégico</h3>
                <p className="text-start">Os consultores atuam como conselheiros estratégicos, oferecendo insights valiosos com base em sua experiência e conhecimento do setor.
                Eles auxiliam na tomada de decisões críticas, fornecendo informações confiáveis e perspectivas imparciais.</p>
            </div>
                <p className="text-xs text-yellow-300">Não trabalhamos com pacotes, todos os serviços são completos!</p>
            <div className="p-2">
                <button className="flex justify-center w-60 items-center border-2 text-xl border-yellow-300 bg-sky-600 rounded-full p-4
                hover:scale-105 transition">Contratar serviço!</button>
            </div>
        </main>
    )
}


export default Consultoria