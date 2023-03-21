import styles from '../styles/Teoria.module.css';

export default function Teoria() {
    return (
        <section className={styles.teoria_container}>
            <div className={styles.teoria_bg_black}>
                <div className={styles.teoria_content}>
                    <h1>Nossa galáxia!</h1>
                    <hr />
                    <p>A Via Láctea é uma galáxia espiral, da qual o Sistema Solar faz parte. Vista da Terra, aparece como uma faixa brilhante e difusa que circunda toda a esfera celeste, recortada por nuvens moleculares que lhe conferem um intrincado aspecto irregular e recortado.</p>
                    <div className={styles.via_lactea_bio}>
                        <div>
                            <h2>Formação da Via Láctea</h2>
                            <p>O processo de formação da Via Láctea teve início há aproximadamente 14 bilhões de anos. Acredita-se que a origem da nossa galáxia coincide, então, com a origem do Universo, o que é explicado pela teoria da expansão (ou explosão), que ficou conhecida como a teoria do Big Bang. Os elementos que compunham o Universo de então estavam dispostos unicamente na sua forma gasosa.</p>
                        </div>
                        <div>
                            <h2>Origem do nome Via Láctea</h2>
                            <p>A origem exata do nome Via Láctea é de difícil determinação. Isso por que existem registros muito antigos, produzidos por observadores na Grécia Antiga e em outras partes da Europa há milhares de anos, que se referem ao caminho formado pelo aglomerado de poeira, gases e estrelas que eles viam nas noites de céu límpido como Via Láctea. A associação da nossa galáxia com esse nome se deve ao fato de ela apresentar uma coloração esbranquiçada, comparável ao leite ou a um “caminho de leite”.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}