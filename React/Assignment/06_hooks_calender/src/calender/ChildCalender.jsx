import React from "react"
import "./Calender.css"

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
const dates = []
let i
for (i = 0; i < 31; i++) {
  dates[i] = i + 1
}
const calDays = [{ days: days }, { dates: dates }]

const CalculateList = (list) => {
  return (
    <table>
      <tr>
        {list.list[0].days.map((item) => (
          <th key={item}>{item}</th>
        ))}
        {list.list[1].dates.map((item) => (
          <td key={item}>{item}</td>
        ))}
      </tr>
      <br />
    </table>
  )
}
const ChildCalender = () => {
  return <CalculateList list={calDays} />
}

export default ChildCalender
