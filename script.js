console.log("Window width:", window.innerWidth);

console.log("Window height:", window.innerHeight);

function openNewWindow() 
{
    window.open("https://www.example.com", "_blank", "width=800,height=600");
}

function closeCurrentWindow() 
{
    window.close();
}

function changeWindowTitle() 
{
    document.title = "Mitt Fönster";
}

function reloadPage() 
{
    location.reload();
}

console.log("Current URL:", window.location.href);

window.onload = function() 
{
    alert("Välkommen till vår webbplats!");
}