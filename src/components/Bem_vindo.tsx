import styles from '../styles/Bem_vindo.module.css';

export default function BemVindo() {
    return (
        <div className={styles.inicial_container}>
        <div>
          <div className={styles.content_text}>
            <h1>Bem-vindo ao <span>universo</span>!</h1>
            <p>Na astronomia, o Universo corresponde ao conjunto de toda a matéria, energia, espaço e tempo existente. Ele reúne os astros: planetas, cometas, estrelas, galáxias, nebulosas, satélites, dentre outros. O universo é, portanto, mais que um local imenso, ele é tudo, e engloba tudo o que existe. Para muitos, infinito. Note que do latim, a palavra universum significa “todo inteiro” ou “tudo em um só”.</p>
          </div>
        </div>
      </div>
    )
}