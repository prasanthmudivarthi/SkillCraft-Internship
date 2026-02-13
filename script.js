const toggleBtn = document.getElementById("themeToggle");

toggleBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerText = "☀️";
    } else {
        toggleBtn.innerText = "🌙";
    }
};
