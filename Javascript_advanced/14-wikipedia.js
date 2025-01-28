function createElement(data) {
    const p = document.createElement("p");
    p.innerText = `${data}`;

    const body = document.querySelector('body');

    body.appendChild(p);
}


function queryWikipedia(callback) {
    const request = new XMLHttpRequest();
    request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true)
    request.onload = () => {
        console.log(request.responseURL);
    };

    request.send(null)
}

queryWikipedia(createElement)