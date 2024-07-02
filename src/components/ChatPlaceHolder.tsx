import {useState} from 'react';
import IconsSol from "@/components/icons/iconsSol";

type Props = {}

export const ChatPlaceHolder = ({}: Props) => {
    const [initialQuestion, setInitialQuestion] = useState<string | null>(null);

    const handleQuestionClick = (question: string) => {
        setInitialQuestion(question);
        // Aqui você pode adicionar lógica para iniciar um novo chat com a pergunta selecionada
        // Por exemplo, chamar uma função ou navegar para uma nova página
        console.log("Iniciar novo chat com pergunta:", question);
    };

    return (
        <div className="m-5">
            <h3 className="text-4xl font-bold text-center my-8">GARGID</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-auto mb-8 max-w-4xl">
                <div>
                    <div className="flex justify-center items-center text-lg mb-4">
                        <IconsSol width={24} height={24} className="mr-4"/>
                        EXEMPLO
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como acessar o Bravos?")}>
                            Como acessar o Bravos?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como acessar o Syonet?")}>
                            Como acessar o Syonet?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como acessar o Auto Avaliar?")}>
                            Como acessar o Auto Avaliar?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como acessar o Via Nuvem?")}>
                            Como acessar o Via Nuvem?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como acessar o Sivolks?")}>
                            Como acessar o Sivolks?
                        </button>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center text-lg mb-4">
                        <IconsSol width={24} height={24} className="mr-4"/>
                        EXEMPLO
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Qual e o CNPJ das lojas?")}>
                            Qual e o CNPJ das lojas?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como entrar em contato com o TI?")}>
                            Como entrar em contato com o TI?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como solicitar uma compra?")}>
                            Como solicitar uma compra?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como transferir uma ligação?")}>
                            Como transferir uma ligação?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como entrar em contato com o CRM?")}>
                            Como entrar em contato com o CRM?
                        </button>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center items-center text-lg mb-4">
                        <IconsSol width={24} height={24} className="mr-4"/>
                        EXEMPLO
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como entrar em contato com o setor de Peças?")}>
                            Como entrar em contato com o setor de Peças?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como entrar em contato com o Agendamento?")}>
                            Como entrar em contato com o Agendamento?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como entrar em contato com o Financeiro?")}>
                            Como entrar em contato com o Financeiro?
                        </button>
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-4 p-4">
                        <button className="focus:outline-none"
                                onClick={() => handleQuestionClick("Como entrar em contato com o setor de Venda de Novos?")}>
                            Como entrar em contato com o setor de Venda de Novos?


                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

