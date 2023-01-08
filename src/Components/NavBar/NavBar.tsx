import React from "react";
import s from "./NavBar.module.css"



export const NavBar = () => {
    return (
        <div className={s.NavBar}>
                <a href="">Header</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
        </div>
    )
}