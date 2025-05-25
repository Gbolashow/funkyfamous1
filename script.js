
const messages = [
    "Funke, you are a queen in every sense. May your birthday be filled with joy and warmth.",
    "You are a role model to many and a blessing to your family. Stay amazing!",
    "Here's to more grace, beauty, and love. You truly deserve the best in life!"
];

function openMessage(index) {
    document.getElementById("message-content").innerText = messages[index];
    document.getElementById("message-box").classList.remove("hidden");
}

function closeMessage() {
    document.getElementById("message-box").classList.add("hidden");
}
