import React from "react";
import s from "./Main.module.css"
import photo from "../../assets/images/Photo.jpg"

export const Main = () => {
  return (
      <div className={s.Main}>
          <div className={s.imageParent}><img src={photo} alt="ERROR"/></div>
          <div className={s.infoBlock}>
              <span className={s.title}>SAMUIL PRYTCHYN</span>
              <span className={s.status}>WEB DEVELOPER</span>
          </div>
      </div>
  )
}