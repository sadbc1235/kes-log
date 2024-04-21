"use client"

import { useState } from "react";
import styles from "../styles/menu.module.css";
import Link from "next/link";

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
                        <div className={styles.profileImg}>
                            <img src="/mod.jpg" />
                        </div>
                        <p>Hi! I'm <span>KES</span>.</p>
                    </div>
                    <ul>
                        <Link href="/aboutMe">
                            <li>
                                <div className={styles.menuBg} ></div>
                                <span className={styles.menuTitle}>About me</span>
                                <div className={styles.arrow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>
                                </div>
                            </li>
                        </Link>
                        <Link href="/project">
                            <li>
                                <div className={styles.menuBg} ></div>
                                <span className={styles.menuTitle}>Projects</span>
                                <div className={styles.arrow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                                    </svg>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </nav>
                <div className={styles.void}  onClick={activeNav}></div>
            </div>
        </>
    )
}