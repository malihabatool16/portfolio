document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Theme toggle functionality
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "🌙 Toggle Dark Mode";
    themeToggle.style.position = "fixed";
    themeToggle.style.top = "10px";
    themeToggle.style.right = "10px";
    themeToggle.style.padding = "10px";
    themeToggle.style.border = "none";
    themeToggle.style.cursor = "pointer";
    themeToggle.style.background = "#444";
    themeToggle.style.color = "#fff";
    themeToggle.style.borderRadius = "5px";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Apply dark mode styles
    const darkModeStyles = document.createElement("style");
    darkModeStyles.innerHTML = `
        .dark-mode {
            background: #222 !important;
            color: #fff !important;
        }
        .dark-mode div {
            background: rgba(255, 255, 255, 0.2) !important;
            color: #fff !important;
        }
        .dark-mode nav ul li a {
            color: #ffcc00 !important;
        }
        .dark-mode footer {
            background: #111 !important;
        }
    `;
    document.head.appendChild(darkModeStyles);
});
