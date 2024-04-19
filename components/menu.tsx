"use client"

import { useState } from "react";
import styles from "../styles/menu.module.css";

export default function Menu() {
    const [isActive, setIsActive] = useState(false);

    const activeNav = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className={styles.menuWrap}>
                <div className={styles.menu} onClick={activeNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </div>
            </div>
            

            <div className={isActive ? `${styles.navBox} ${styles.active}` : styles.navBox}>
                <nav>
                    <div className={styles.profile}>

                    </div>
                    <ul>

                    </ul>
                </nav>
                <div className={styles.void}  onClick={activeNav}></div>
            </div>
        </>
    )
}