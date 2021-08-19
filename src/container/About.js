import React from "react";
import styles from "./about.module.css";
import withStyle from "../withStyle";

function About() {
    return <div className={styles.font}>About</div>
}

export default withStyle(About, styles)