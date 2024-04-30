import React from "react";
import styles from "./Navbar.module.css";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ type }) => {
    const connected = true;
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                {type === "HOMEPAGE" ? (
                    connected ? (
                        <>0xr..23</>
                    ) : (
                        <>Connect wallet</>
                    )
                ) : (
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                )}
            </div>
            <div className={styles.right}>{connected && <>0xr..23</>}</div>
        </div>
    );
};

export default Navbar;
