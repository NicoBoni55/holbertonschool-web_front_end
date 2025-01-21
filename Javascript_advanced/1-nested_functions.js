function globalVariable()
{
    let a = "Welcome";
    function outer() 
    {
        alert(a);
        let course = "Holberton";
        function inner()
        {
            alert(a + " " + course);
            let exclamation = "!";
            function inception()
            {
                alert(a + " " + course + " " + exclamation);
            }
            inception();
        }
        inner();
    }
    outer();
}

globalVariable();