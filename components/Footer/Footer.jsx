import React from "react";
import styles from "./Footer.module.css";
import faq from "./faq.png";
import invite from "./invite.png";
import stats from "./stats.png";
import boost from "./boost.png";
import Link from 'next/link'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bar}>
                <div className={styles.item}>
                    <Link href="/faq">
                        <img src="/faq.png" alt="" />
                        <p className={styles.text}>FAQs</p>
                    </Link>
                </div>
                {/* <div className={styles.item}>
                    <Link href="/boosters">
                    <img src="/boost.png" alt="" />
                    <p className={styles.text}>Boost</p>
                    </Link>
                    
                </div> */}
                <div className={styles.item}>
                    <Link href="/stats">
                    <img src="/stats.png" alt="" />
                    <p className={styles.text}>Stats</p>
                    </Link>
                  
                </div>
                <div className={styles.item}>
                    <Link href="/invite">
                    <img src="/invite.png" alt="" />
                    <p className={styles.text}>Invite</p>
                    </Link>
               
                </div>
            </div>
        </div>
    );
};

export default Footer;
