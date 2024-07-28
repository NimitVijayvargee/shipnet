function setMouseMoveListener(color1, color2) {
    function mouseMoveHandler(event) {
        var container = document.getElementById("container");
        var rect = container.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        container.style.background = `radial-gradient(circle at ${x}px ${y}px, ${color1} 20px, ${color2} 120px)`;
    }
    document.removeEventListener('mousemove', document.mouseMoveHandler);
    document.removeEventListener('scroll', document.mouseMoveHandler);
    document.mouseMoveHandler = mouseMoveHandler;
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('scroll', mouseMoveHandler);
}

function dark_mode() {
    var html = document.documentElement;
    html.setAttribute("data-bs-theme", "dark");
    var container = document.getElementById("container");
    container.style.backgroundImage = `url(https://icons.hackclub.com/api/icons/0x212529/glyph:rep.svg)`;
    setMouseMoveListener('#343a40', '#212529');
    document.cookie = "theme=dark";
    console.log("Dark mode set");
}

function arcade_mode() {
    var html = document.documentElement;
    html.setAttribute("data-bs-theme", "arcade");
    var body = document.body;
    body.style.backgroundImage = `linear-gradient(rgba(250, 239, 214, 0.7), rgba(250, 239, 214, 0.7)), url(https://icons.hackclub.com/api/icons/0xD8A52D/glyph:rep.svg)`;
    setMouseMoveListener('rgba(132, 146, 166, 0)', 'rgba(250, 239, 214, 0.9)');
    document.cookie = "theme=arcade";
    console.log("Arcade mode set");

    var posts = document.getElementsByClassName("post");
    for (let i = 0; i < posts.length; i++) {
        posts[i].style.transform = `rotate(${Math.random() * 8 - 4}deg)`;
      }
}

function last_theme() {
    var theme = getCookie("theme");
    console.log("Retrieved theme from cookie: " + theme);
    if (theme === "dark") {
        dark_mode();
    } else if (theme === "arcade") {
        arcade_mode();
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}