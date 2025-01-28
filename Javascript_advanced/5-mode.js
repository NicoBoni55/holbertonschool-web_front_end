function changeMode(size, weight, transform, background, color)
{
        return function () 
        {
            const body = document.querySelector("body");
            body.style.fontSize = size;
            body.style.fontWeight = weight;
            body.style.textTransform = transform; 
            body.style.backgroundColor = background;
            body.style.color = color;
        }
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    
    
    const body = document.querySelector("body");

    const p = document.createElement("p");
    p.innerText = "Welcome Holberton!"
    body.appendChild(p);

    const buttonSpooky = document.createElement("button");
    const buttonDarkmode = document.createElement("button");
    const buttonScreammode = document.createElement("button");

    buttonSpooky.innerText = "Spooky";
    buttonDarkmode.innerText = "Dark";
    buttonScreammode.innerText = "Scream";

    body.appendChild(buttonSpooky);
    body.appendChild(buttonDarkmode);
    body.appendChild(buttonScreammode);

    buttonSpooky.onclick = spooky;
    buttonDarkmode.onclick = darkMode;
    buttonScreammode.onclick = screamMode;
}

main();