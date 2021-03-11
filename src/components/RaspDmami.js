import React, {useEffect, useState} from "react"
import Input from "./Input/Input";
import Tables from "./Tables/Tables"
import cls from "./RaspDmami.module.scss"
import "normalize.css"

function RaspDmami() {

  const [data, setData] = useState([])
  const [changeGroup, setChangeGroup] = useState({
    grid: ""
  })
  const [error, setError] = useState(false)

  useEffect(() => {
    getData()
      .then(res => res.json())
      .then((response) => {
        setData(response.contents)
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  const getData = async () => await fetch("https://rasp.dmami.ru/semester.json")

  const handleEnter = (e) => {
    if (!data.length) return
    if (e.key === "Enter")
      findChangeGroup(e.target.value)
  }

  const findChangeGroup = (value) => {
    const group = data.find(d => d.group.title === value) || {grid: ""}
    if (Object.keys(group).length === 1) setError(true)
    else setError(false)
    setChangeGroup(group)
  }

  return (
    <div className={cls.content}>
      <h1>РАСПИСАНИЕ МОСКОВСКОГО ПОЛИТЕХА</h1>
      <Input handleEnter={handleEnter} />
      <Tables timeTable={changeGroup.grid} error={error} />
    </div>
  )
}

export default RaspDmami