var lastInfo;

function getResponseHeaderMap(xhr) {
    const headers = {};
    xhr.getAllResponseHeaders()
        .trim()
        .split(/[\r\n]+/)
        .map(value => value.split(/: /))
        .forEach(keyValue => {
            headers[keyValue[0].trim()] = keyValue[1].trim();
        });
    return headers;
}

$(document).ready(function () {
    setInterval(() => {
        const d = new Date();
        $("#info").html(formatWithZero(d.getHours()) + ":" + formatWithZero(d.getMinutes()) + " " + formatWithZero(d.getDate()) + "/" + formatWithZero(d.getMonth()+1) + "          ");
    }, 1*1000); 

    function formatWithZero(n){
        return (n < 10 ? "0" + n : n);
    }
});

window.addEventListener('message', function(event) {
    if (event.data.action === "toggle") {
        if (event.data.show) {
            $("body").show();  
        } else {
            $("body").hide();  
        }
    }
});
