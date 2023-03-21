import styles from '../styles/Biografia.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Biografia() {

    const [table, setTable] = useState<boolean>(false)
    const [nameImg, setNameImg] = useState<string>('')
    const [info1, setInfo1] = useState<string>('')
    const [info2, setInfo2] = useState<string>('')
    const [info3, setInfo3] = useState<string>('')
    const [info4, setInfo4] = useState<string>('')
    const [info5, setInfo5] = useState<string>('')

    function showTable(nome: string, imagem: string) {

        if (nome == 'mercurio') {
            setInfo1('4.880')
            setInfo2('57.910.000')
            setInfo3('88')
            setInfo4('167')
            setInfo5('0')
        }
        if (nome == 'venus') {
            setInfo1('12.104')
            setInfo2('108.200.000')
            setInfo3('225')
            setInfo4('462')
            setInfo5('0')
        }
        if (nome == 'terra') {
            setInfo1('12.742')
            setInfo2('149.600.000')
            setInfo3('365')
            setInfo4('15')
            setInfo5('1')
        }
        if (nome == 'marte') {
            setInfo1('6.779')
            setInfo2('227.940.000')
            setInfo3('687')
            setInfo4('-63')
            setInfo5('2')
        }
        if (nome == 'jupiter') {
            setInfo1('139.822')
            setInfo2('778.330.000')
            setInfo3('4.333')
            setInfo4('-108')
            setInfo5('79')
        }
        if (nome == 'saturno') {
            setInfo1('116.460')
            setInfo2('1.429.400.000')
            setInfo3('10.759')
            setInfo4('-139')
            setInfo5('82')
        }
        if (nome == 'urano') {
            setInfo1('50.724')
            setInfo2('2.870.990.000')
            setInfo3('30.687')
            setInfo4('-197')
            setInfo5('27')
        }
        if (nome == 'netuno') {
            setInfo1('49.244')
            setInfo2('4.498.250.000')
            setInfo3('60.190')
            setInfo4('-201')
            setInfo5('14')
        }


        setNameImg(imagem)
        setTable(true)
    }

    function hideTable() {
        setTable(false)
        setNameImg('')
    }

    return (
        <section className={styles.biografia_container}>
            <div className={styles.planetas}>
                <div className={styles.planeta_esquerdo}>
                    <Image src='/img/mercurio.png' alt="Minha imagem" width={200} height={200} />
                    <div>
                        <h2>Mercúrio</h2>
                        <p>Mercúrio é o menor dos planetas do sistema solar e, também, aquele que está mais perto do Sol. Além disso, a superfície lá é cinza e apresenta crateras que lembram a Lua.</p>
                        <button onClick={() => showTable('mercurio', 'mercurio.png')}>Detalhes</button>
                    </div>
                </div>
                <div className={styles.planeta_direito}>
                    <Image src='/img/venus.gif' alt="Minha imagem" width={200} height={200} />
                    <div>
                        <h2>Venus</h2>
                        <p>Vênus é mais um dos corpos celestes que devemos estudar para ir bem na prova do Enem. Uma das peculiaridades mais marcantes é que ele é o planeta mais quente do sistema solar. Essa alta temperatura tem origem no dióxido de carbono presente em grande quantidade na sua atmosfera.</p>
                        <button onClick={() => showTable('venus', 'venus.gif')}>Detalhes</button>
                    </div>
                </div>
                <div className={styles.planeta_esquerdo}>
                    <abbr title="Você está aqui!">
                        <Image src='/img/planeta.jpg' alt="Minha imagem" width={200} height={200} />
                    </abbr>
                    <div>
                        <h2>Terra</h2>
                        <p>Se tem um planeta que não pode ficar de fora do seu plano de estudos para o vestibular é o nosso, concorda? Bom, a Terra tem uma atmosfera composta por gases expelidos por erupções vulcânicas ao longo dos milhares de anos. Essa condição permitiu a temperatura certa para a concepção da vida no sistema solar.</p>
                        <button onClick={() => showTable('terra', 'planeta.jpg')}>Detalhes</button>
                    </div>
                </div>
                <div className={styles.planeta_direito}>
                    <Image src='/img/marte.png' alt="Minha imagem" width={200} height={200} />
                    <div>
                        <h2>Marte</h2>
                        <p>Quando se fala de Marte, é necessária uma atenção especial. Afinal, ele tem condições de abrigar vida, inclusive sendo um grande candidato à moradia humana no futuro. Isso por dois motivos: sua proximidade com a Terra e as características de sua superfície, bem parecidas com as do nosso planeta. Por isso, ele é alvo de muitas expedições e pesquisas científicas.</p>
                        <button onClick={() => showTable('marte', 'marte.png')}>Detalhes</button>
                    </div>
                </div>
                <div className={styles.planeta_esquerdo}>
                    <Image src='/img/jupiter.webp' alt="Minha imagem" width={200} height={200} />
                    <div>
                        <h2>Júpiter</h2>
                        <p>Júpiter é conhecido como o gigante gasoso, porque é o maior dos planetas do conjunto solar. Além disso, ele não tem uma superfície rígida, e a atmosfera contém amônia e metano.</p>
                        <button onClick={() => showTable('jupiter', 'jupiter.webp')}>Detalhes</button>
                    </div>
                </div>
                <div className={styles.planeta_direito}>
                    <Image src='/img/saturno.webp' alt="Minha imagem" width={200} height={200} />
                    <div>
                        <h2>Saturno</h2>
                        <p>Saturno é o planeta dos anéis, que são formados por rocha, gelo e poeira e contam com 1 km de extensão. Trata-se do sexto planeta do sistema solar, sendo que 62 satélites circulam em sua órbita.</p>
                        <button onClick={() => showTable('saturno', 'saturno.webp')}>Detalhes</button>
                    </div>
                </div>
                <div className={styles.planeta_esquerdo}>
                    <Image src='/img/urano.png' alt="Minha imagem" width={200} height={200} />
                    <div>
                        <h2>Urano</h2>
                        <p>Urano é um planeta composto por hélio, hidrogênio e metano. Como ele está bastante distante do sol, registra clima bem frio, de 185ºC negativos.</p>
                        <button onClick={() => showTable('urano', 'urano.png')}>Detalhes</button>
                    </div>
                </div>
                <div className={styles.planeta_direito}>
                    <Image src='/img/netuno.webp' alt="Minha imagem" width={200} height={200} />
                    <div>
                        <h2>Netuno</h2>
                        <p>Como já dissemos, vira e mexe os planetas do sistema solar caem no Enem. Por isso, estudar um pouco sobre Netuno, o mais distante do nosso astro-rei, também é importante. Por ser o último no sistema solar, ele apresenta temperaturas de 200ºC negativos.</p>
                        <button onClick={() => showTable('netuno', 'netuno.webp')}>Detalhes</button>
                    </div>
                </div>
            </div>
            {table && (
                <div className={styles.tabela_planetas}>
                    <span onClick={hideTable}>X</span>
                    <Image src={`/img/${nameImg}`} alt="Minha imagem" width={200} height={200} className={styles.img} />
                    <div>
                        <h3>Diâmetro Equatorial (km):</h3>
                        <p>{info1}</p>
                    </div>
                    <div>
                        <h3>Distância Média do Sol (km):</h3>
                        <p>{info2}</p>
                    </div>
                    <div>
                        <h3>Período Orbital (dias):</h3>
                        <p>{info3}</p>
                    </div>
                    <div>
                        <h3>Temperatura Média da Superfície (°C):</h3>
                        <p>{info4}</p>
                    </div>
                    <div>
                        <h3>Número de Satélites Naturais:</h3>
                        <p>{info5}</p>
                    </div>
                </div>
            )}

        </section>
    )
}