function createClassRoom(numbersOfStudents) {
    if (typeof numbersOfStudents === "number") {
        function studentSeat(seat) {
            if (typeof seat === "number") {
                return (seat);
            } else {
                console.error("seat must be a number.")
            }
        }    
    } else {
        console.error("numbersOfStudents must be a number.");
    }
}