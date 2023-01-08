import React from "react";
import s from "./Main.module.css"

export const Main = () => {
  return (
      <div className={s.Main}>
          <div className={s.imageParent}><img src="https://cdn.truelancer.com/upload-medium/701651-vector-cartoon-portrait-avatar-illustration-fanart.jpg" alt="ERROR"/></div>
          <div className={s.infoBlock}>
              <span className={s.title}>SAMUIL PRYTCHYN</span>
              <span className={s.status}>WEB DEVELOPER</span>
          </div>
      </div>
  )
}