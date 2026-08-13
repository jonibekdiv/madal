function send() {
        let text = document.getElementById("inputtext").value;
  
    // 🔑 BOT TOKEN
    let TOKEN = "8628807064:AAH6SXYouihXiAujY-SE9UaMxyRUI-gsgK4";

    // 🆔 TELEGRAM ID
    let CHAT_ID = "-1004300839212";

    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text
        })
    });
}

