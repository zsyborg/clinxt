import React from "react";
import styles from "./InviteModal.module.css";
import handshake from "./handshake.png";
import smallcoin from "./smallcoin.png";
const InviteModal = ({ isOpen, setIsOpen, data }) => {
    const handleClose = () => {
        setIsOpen(false);
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.container} onClick={handleBackdropClick}>
            <div className={styles.box} onClick={(e) => e.stopPropagation()}>
                <div
                    className={styles.top}
                    onClick={handleClose}
                    style={{ cursor: "pointer" }}
                >
                    X
                </div>
                <div className={styles.imageContainer}>
                    <img src={handshake} alt="" />
                </div>
                <div className={styles.bottom}>
                    <h3 className={styles.title}>Invite a friend and get</h3>
                    <div className={styles.textContainer}>
                        <img src={smallcoin} alt="" />
                        <p className={styles.progress}>{data.amount} </p>
                    </div>
                </div>

                <div className={styles.button}>
                    <p>Invite Link</p>
                    <p>Solclicker.com/InviteLink</p>
                </div>
            </div>
        </div>
    );
};

export default InviteModal;
