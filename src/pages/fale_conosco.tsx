import Head from "next/head"
import styles from '../styles/faleconosco.module.css';
import { useState, useRef, useContext } from "react";
import { ContextUser } from "@/Context/Context";

export default function FaleConosco() {

    const contexto = useContext(ContextUser)

    const refNome = useRef<HTMLInputElement>(null);
    const refMessage = useRef<HTMLTextAreaElement>(null);
    const refPar = useRef<HTMLParagraphElement>(null)

    const [nome, setNome] = useState<string | undefined>()
    const [message, setMessage] = useState<string | undefined>()

    function handleChangeNome(e: any) {
        setNome(e.target.value)
    }
    function handleChangeMsg(e: any) {
        setMessage(e.target.value)
    }

    function handleClick() {

        if (nome == undefined || message == undefined || nome.includes('a') == false && nome.includes('e') == false && nome.includes('i') == false && nome.includes('o') == false && nome.includes('u') == false && message.includes('a') == false && message.includes('e') == false && message.includes('i') == false && message.includes('o') == false && message.includes('u') == false) {

            if (refPar.current) {
                refPar.current.innerHTML = 'Preencha corretamente!'
                setTimeout(() => {
                    if (refPar.current) {
                        refPar.current.innerHTML = ''
                    }
                }, 2500)
                return
            }
        }

        if (refNome.current && refMessage.current) {
            refNome.current.value = ""
            refMessage.current.value = ""
            setNome(undefined)
            setMessage(undefined)
        }

        if (contexto.userContext) {
            contexto.setUserContext([...contexto.userContext, { nome: nome, message: message }])
        }

    }

    function deletarMessage(nom: string | undefined) {
        if (contexto.userContext) {
            contexto.setUserContext(contexto.userContext.filter((user, index) => {
                return user.nome !== nom
            }))
        }
    }

    return (
        <>
            <Head>
                <title>Fale conosco</title>
            </Head>
            <div className={styles.faleconosco_container}>
                <div className={styles.faleconosco_content}>
                    <h1>Deixe sua mensagem com a gente!</h1>
                    <div>
                        <p>Nome:</p>
                        <input ref={refNome} onChange={handleChangeNome} type="text" />
                        <p>Mensagem:</p>
                        <textarea placeholder="Simule aqui sua mensagem..." ref={refMessage} onChange={handleChangeMsg} name="mensagem" id="msg" cols={30} rows={6}></textarea>
                        <button onClick={handleClick}>Adicionar</button>
                        <p ref={refPar} style={{ color: '#d44f4f' }}></p>
                    </div>
                </div>
                <div className={styles.div_mensagens}>
                    <h1>Mensagens:</h1>
                    {contexto.userContext !== undefined && (
                        contexto.userContext.map((usuario, index) => {
                            return (<div key={index}>
                                <h2>{usuario.nome}</h2>
                                <p>{usuario.message}</p>
                                <button onClick={() => deletarMessage(usuario.nome)}>Deletar</button>
                            </div>)
                        })
                    )}
                    {contexto.userContext?.length == 0 && (
                        <span>Sem mensagens!</span>
                    )}
                </div>
            </div>
        </>
    )
}