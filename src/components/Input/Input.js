import React from "react";
import cls from "./Input.module.scss"

function Input({handleEnter}) {

  return (
    <div className={cls.input}>
      <label htmlFor={"group"}>Введите группу</label>
      <input type="text" name={"group"} onKeyPress={(e) => handleEnter(e)}/>
    </div>
  )
}

export default Input