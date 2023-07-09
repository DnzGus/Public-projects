const Software = () => {
    return (
        <div className="text-center flex items-center h-full flex-col text-white">
            <h2 className="text-3xl font-extrabold p-2">Desenvolvimento de Software</h2>
            <div className="flex flex-col justify-start gap-2 p-4">
                <h3 className="font-semibold text-yellow-300">Planejamento e Análise</h3>
                <p className="text-start">O desenvolvimento de software começa com o planejamento e análise dos requisitos do cliente.
                Nessa fase, são identificadas as necessidades, objetivos e funcionalidades desejadas. Os desenvolvedores trabalham em estreita colaboração com os clientes para entender seus requisitos e definir o escopo do projeto.</p>
                <h3 className="font-semibold text-yellow-300">Design e Arquitetura</h3>
                <p className="text-start">Com base nos requisitos identificados, os desenvolvedores criam o design e a arquitetura do software.
                Isso envolve a definição da estrutura, o fluxo de informações, a interface do usuário e outros aspectos importantes. O design é criado levando em consideração os princípios de usabilidade, escalabilidade e segurança.</p>
                <h3 className="font-semibold text-yellow-300">Codificação e Desenvolvimento</h3>
                <p className="text-start">Nessa fase, nssos desenvolvedores escrevem o código do software usando linguagens de programação adequadas, como Java, Python, C++, entre outras.
                Eles implementam as funcionalidades conforme definido no design e realizam testes unitários para garantir que o código esteja funcionando corretamente.</p>
                <h3 className="font-semibold text-yellow-300">Testes e Depuração</h3>
                <p className="text-start">Após a codificação, o software passa por uma fase de testes para identificar e corrigir possíveis erros e falhas. Testes de unidade, testes de integração e testes de aceitação são realizados para garantir que o software esteja funcionando conforme o esperado.
                Os bugs são corrigidos e o software é refinado até que atenda aos requisitos de qualidade.</p>
                <h3 className="font-semibold text-yellow-300">Implantação e Manutenção</h3>
                <p className="text-start">Uma vez que o software tenha sido testado e aprovado, ele é implantado no ambiente de produção. 
                Os desenvolvedores monitoram seu desempenho e realizam manutenção contínua, corrigindo erros, atualizando recursos e garantindo a segurança do software ao longo do tempo.</p>
            </div>
            <button className="flex justify-center w-60 items-center border-2 text-xl border-yellow-300 bg-sky-600 rounded-full p-4
            hover:scale-105">Contratar serviço!</button>
        </div>
    )
}


export default Software