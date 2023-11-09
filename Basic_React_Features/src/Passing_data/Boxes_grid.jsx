import React from "react"
import Boxes from "./Boxes"
import Box from "./Box";
// import { preview } from "vite";
// has date/day function

export default function BoxesGrid() {

    const [squares, setSquares] = React.useState(Boxes)



        // this the simpler version

    // const darkMode = false;

    // const styles = {
    //     // border: squares.length % 2 === 0 ? "black" : "green",
    //     backgroundColor: darkMode ? "#222222" : "#cccccc",
    //     cursor: "pointer"
    // }





    function toggle(id) {
        console.log(id)

        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })

        // setSquares(prevSquares => {
        //     const newSquares = []
        //     for(let i = 0; i < prevSquares.length; i++) {
        //         const currentSquare = prevSquares[i]
        //         if (currentSquare.id === id) {
        //             const updatedSquare = {
        //                 ...currentSquare,
        //                 on: !currentSquare.on
        //             }
        //             newSquares.push(updatedSquare)
        //         }
        //         else {
        //             newSquares.push(currentSquare)
        //         }
        //     }
        //     return newSquares
        // })
    }
 
    const grid = squares.map(square => (
    
        // <div style={styles} className="box" key={box.id}>{box.on}</div>
        <Box 
            handleClick={toggle}
            id={square.id}
            key={square.id} 
            on={square.on}
        />

    ))
      
    

    return(
        <div className="grid">
            {grid}
        </div>
    )
}



// function getDayOfWeek(dateString) {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const date = new Date(dateString);
//     const dayIndex = date.getDay();
//     return daysOfWeek[dayIndex];
//   }


//   const date = '2001-06-02';
//       const dayOfWeek = getDayOfWeek(date);
//       console.log(dayOfWeek); // This will output "Sunday"