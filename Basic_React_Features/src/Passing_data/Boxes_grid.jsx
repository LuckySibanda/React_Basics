import React from "react"
import Boxes from "./Boxes"

export default function BoxesGrid() {

    const [array, setArray] = React.useState(Boxes)

    let color = array.on === true ? "blue" : "yellow"
    // console.log(color)

    // my attempt
    // let color = ''
    // if (array.on === false) {
    //     color = "red"
    // }
    // else {
    //     color = "blue"
    // }

    const myStyles = {
        color: color,
        cursor: 'pointer'
    }
 
    const grid = array.map(box => (
        // original challage
        // <div style={myStyles} className="box" key={box.id}>{box.on}</div>

        // my attempt
        <p style={myStyles} className="box" key={box.id}>{box.id} Sup</p>
    ))

    function getDayOfWeek(dateString) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(dateString);
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
      }
      
      const date = '2001-06-02';
      const dayOfWeek = getDayOfWeek(date);
      console.log(dayOfWeek); // This will output "Sunday"
      

    return(
        <div className="grid">
            {grid}
        </div>
    )
}