function setMouseMoveListener(color1, color2) {
    function mouseMoveHandler(event) {
        var body = document.body;
        var navbar = document.getElementById("navbar");
        var x = event.clientX + scrollX;
        var y = event.clientY + scrollY;
        body.style.background = `radial-gradient(circle at ${x}px ${y}px, ${color1} 20px, ${color2} 120px)`;
    }
    document.removeEventListener('scroll', document.mouseMoveHandler);
    document.removeEventListener('mousemove', document.mouseMoveHandler);
    document.mouseMoveHandler = mouseMoveHandler;
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('scroll', mouseMoveHandler);
}

function dark_mode() {
    var html = document.getElementById("HTML");
    html.setAttribute("data-bs-theme", "dark");
    var container = document.getElementById("container");
    container.style.backgroundImage = `url(https://icons.hackclub.com/api/icons/0x212529/glyph:rep.svg)`;
    setMouseMoveListener('#343a40', '#212529');
}

function arcade_mode() {
    var html = document.getElementById("HTML");
    html.setAttribute("data-bs-theme", "arcade");
    var container = document.getElementById("container");
    container.style.backgroundImage = `url(https://icons.hackclub.com/api/icons/0xD8A52D/glyph:rep.svg)`;
    setMouseMoveListener('rgba(132, 146, 166, 0)', 'rgba(250, 239, 214, 0.9)');
}