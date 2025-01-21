function welcome(firstName, lastName) 
{
    if (typeof firstName === "string" && typeof lastName === "string") {
        
        let fullName = firstName + " " + lastName;
        
        function displayFullName() {
            alert("Welcome " + fullName + "!");
        }
        displayFullName();
    }
    else
    {
        console.error("One or more parameters are not strings.");
    }
}

welcome('Holberton', 'School');