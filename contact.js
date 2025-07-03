function showPopup(message) {
    const popup = document.getElementById("popup");
    popup.textContent = message;
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}

emailjs.init("o588PfIATGoo_N7QV");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_jsw4tmc", "template_w0fmz3b", this)
        .then(function () {
            showPopup("Message sent ✅");
            document.getElementById("contact-form").reset();
        }, function (error) {
            showPopup("Failed to send ❌");
        });
});
