const mode = document.getElementById("mode");
const click = document.getElementById("heading");

mode.addEventListener("click", () => {
    if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    click.textContent = "Light Mode";
    click.style.color = "black";
    document.title = "Light Mode";
    mode.textContent = "☀️";

    }else{
        document.body.style.backgroundColor = "black";
        click.textContent = "Dark Mode";
        click.style.color = "white";
        document.title = "Dark Mode";
    mode.textContent = "🌙";

    }
});