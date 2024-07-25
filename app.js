function setMouseMoveListener(color1, color2) {
    function mouseMoveHandler(event) {
        var body = document.body;
        var navbar = document.getElementById("navbar");
        var x = event.clientX + scrollX;
        var y = event.clientY + scrollY;
        body.style.background = `radial-gradient(circle at ${x}px ${y}px, ${color1}, ${color2} 12%)`;
    }

    document.removeEventListener('mousemove', document.mouseMoveHandler);
    document.mouseMoveHandler = mouseMoveHandler;
    document.addEventListener('mousemove', mouseMoveHandler);
}

function dark_mode() {
    var html = document.getElementById("HTML");
    html.setAttribute("data-bs-theme", "dark");
    var container = document.getElementById("container");
    container.style.backgroundImage = `url(https://icons.hackclub.com/api/icons/0x212529/glyph:rep.svg)`;

    setMouseMoveListener('#343a40', '#212529');
}

function light_mode() {
    //flashbang; will remove in future update cuz it is really annoying goddamn
    var html = document.getElementById("HTML");
    html.setAttribute("data-bs-theme", "light");
    var container = document.getElementById("container");
    container.style.backgroundImage = `url(https://icons.hackclub.com/api/icons/0xffffff/glyph:rep.svg)`;

    setMouseMoveListener('#ced4da', '#ffffff');
}