function createClassRoom(numbersOfStudents) {
    if (typeof numbersOfStudents === "number") {
        function studentSeat(seat) {
            if (typeof seat === "number") {
                return function() {
                    return (seat);
                }
            } else {
                console.error("seat must be a number.")
            }
        }
        let students = 0;
          while (students >= numbersOfStudents) {
            students[students += 1];
        }
        return 
    } else {
        console.error("numbersOfStudents must be a number.");
    }
}