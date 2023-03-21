import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Header.module.css';
import { useState } from "react";

export default function Header() {

    const [song, setSong] = useState<boolean>(false)

    function toggleSong() {
        setSong(!song)
    }

    return (
        <header className={styles.header_container}>
            <nav>
                <Link href='/'>Página inicial</Link>
                <Link href='/fale_conosco'>Feedback</Link>
                {song ? (
                    <>
                        <div onClick={toggleSong} style={{backgroundColor: 'green'}}>
                            <Image src='/img/som-emoji.png' alt="Emoji de som" width={20} height={20} />
                        </div>
                        <audio autoPlay controls src="audio\Interstellar Main Theme - Hans Zimmer.mp3"></audio>
                    </>
                ) : (
                    <div onClick={toggleSong} style={{backgroundColor: 'red'}}>
                        <Image src='/img/som-emoji.png' alt="Emoji de som" width={20} height={20} />
                    </div>
                )}

            </nav>
        </header>
    )
}