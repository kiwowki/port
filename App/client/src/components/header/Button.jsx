import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

// PerspectiveText 컴포넌트
const PerspectiveText = ({ label }) => {
    return (
        <div className={styles.perspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    );
};

// Button 컴포넌트
const Button = ({ isActive, toggleMenu }) => {
    return (
        <div className={styles.button}>
            <motion.div
                className={styles.slider}
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{
                    duration: 0.5,
                    type: "tween",
                    ease: [0.76, 0, 0.24, 1],
                }}
            >
                {/* PerspectiveText 컴포넌트 */}
                <PerspectiveText label="Menu" />
                <PerspectiveText label="Close" />
            </motion.div>
        </div>
    );
};

export default Button;
