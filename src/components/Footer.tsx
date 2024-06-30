import {ChatMessageInput} from "@/components/ChatMessageInput";

type  Props = {
    disabled: boolean;
    onSendMessage: (message: string) => void;
}

export const Footer = ({disabled, onSendMessage}:Props) =>  {
    return(
        <footer className="w-full border-t border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput
                    disabled={disabled}
                    onSend={onSendMessage}
                />
                <div className="pt-3 text-center text-xs ">
                    <p>&copy; 2024 UFSJ. <strong>GARGID</strong> Desenvolvido durante a Disciplina de Principio e Desenvolvimento de Software
                        Durante o curso de Ciência da Computação - UFSJ.</p>
                    <p>Em colaboração com o TI do Grupo CACEL de São João del-Rei.</p>
                    <div>
                        <a href="https://www.ufsj.edu.br/termos-de-uso" className="underline">Termos de Uso</a> |
                        <a href="https://www.ufsj.edu.br/politica-de-privacidade" className="underline">Política de Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}