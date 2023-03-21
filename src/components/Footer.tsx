import styles from '../styles/Footer.module.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer_container}>
            <div>
                <a href='https://www.instagram.com/lucksilva01/' target='_blank'><FaInstagram />
                    <p>Instagram</p></a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/lucas-da-silva-12154a240/' target='_blank'><FaLinkedin />
                    <p>Linkedin</p></a>
            </div>
        </footer>
    )
}