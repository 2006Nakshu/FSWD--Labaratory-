
function showMessage() {
    alert("Welcome to Poovisha's Portfolio! 😊");
}
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    let button = document.getElementById("themeButton");
    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}
let text = "Student | Web Developer | Programmer";
let index = 0;
function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML +=
            text.charAt(index);
        index++;
        setTimeout(typingEffect, 80);
    }
}
typingEffect();
function showDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    document.getElementById("dateTime").innerHTML =
     "Date: " + date + " | Time: " + time;
}
showDateTime();
setInterval(showDateTime, 1000);
window.onscroll = function () {
    let topButton =
        document.getElementById("topButton");
    if (document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
function validateForm() {
    let name =
        document.getElementById("name").value.trim();
    let email =
        document.getElementById("email").value.trim();
    let message =
        document.getElementById("message").value.trim();
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }
    alert(
        "Thank you, " + name +
        "! Your message has been sent successfully."
    );
    return false;
}
let projects =
    document.querySelectorAll(".project");
document.getElementById("projectCount").innerHTML =
    "Total Projects: " + projects.length;
let links =
    document.querySelectorAll("nav a");
links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        let section =
            document.querySelector(
                this.getAttribute("href")
            );
        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});
