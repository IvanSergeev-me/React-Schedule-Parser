import React from "react"
import classes from "./Tables.module.scss"
import Table from "./Table/Table";
import NotFoundGroup from "../NotFoundGroup/NotFoundGroup";

function Tables({timeTable, error}) {
  return (
    <div className={classes.container}>
      {Object.keys(timeTable).map(el => (<Table days={timeTable[el]} key={el} day={el}/>))}
      {error ? <NotFoundGroup /> : null}
    </div>
  )
}

export default Tables