import React, {useEffect} from "react"
import cls from "./Table.module.scss"
import {times} from "./times"
import {dayJson} from "./day"

function checkDayIsEmpty(days) {
  let count = -1
  Object.keys(days).map(el => {
    if (!days[el].length) {
      count++
    }
  })
  return count !== 6;
}

function Table({days, day}) {

  const returnDate = () => {
    if (checkDayIsEmpty(days)) {
      return <>
        {Object.keys(days).map(el => days[el].length ?
          (<div key={el}>
            <hr/>
            <p className={cls.time}>{times[el]}</p>
            {days[el].map(item => (
              <>
                <div className={cls.subject}>
                  <p>{item.sbj}</p>
                  <div className={cls.teacher}>
                    <span>{item.teacher}</span>
                  </div>
                </div>
                <div className={cls.dts}>
                  <span>{item.dts}</span>
                </div>
              </>
            ))}
          </div>)
          : null)}
      </>
    } else {
      return <span className={cls.spanChill}>Сегодня тусим ребята</span>
    }
  }

  return (
    <div className={cls.days}>
      <div className={cls.day}>{dayJson[day]}</div>
      <div className={cls.timetable}>
        {returnDate()}
      </div>
    </div>
  )
}

export default Table