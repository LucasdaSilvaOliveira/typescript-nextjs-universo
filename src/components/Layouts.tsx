import { ReactNode, FC } from "react";
import styles from '../styles/Layouts.module.css';
import Header from "./Header";
import Footer from "./Footer";

interface Ichildren {
    children: ReactNode
}

const Layout: FC<Ichildren> = ({ children }) => {
    return (
        <div className={styles.layout_container}>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;