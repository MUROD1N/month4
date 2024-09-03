import React from 'react';
import Title from "../Title/Title";
import classes from "./Footer.module.css";
const Footer = () => {
    return (
        <>
            <div className={classes.btn}></div>
            <Title title={"Footer"}/>
        </>
    );
};

export default Footer;