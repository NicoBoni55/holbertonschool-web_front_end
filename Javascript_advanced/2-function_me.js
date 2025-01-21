function welcomeMessage(fullName)
{
    if (typeof fullName === "string") 
    {
        alert("Welcome" + " " + fullName);
    }
    else 
    {
        console.error("fullName must be a string.")
    }
}
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");

guillaume();
alex();
fred();