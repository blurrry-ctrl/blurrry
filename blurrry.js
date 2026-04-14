
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
})

document.querySelectorAll("fade").forEach(el => observer.observe(el));

window.addEventListener("scroll"() => {
    document.querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
})



window.addEventListener("loader", () => {
    document.getElementById("loader").style.display = "none"
})


function calcPrice() {
    let videos = document.getElementById("videos").value;
    let price = document.getElementById("type").value;

    document.getElementById("total").innerText = videos * price;
}

document.getElementById("videos").addEventListener("input", calcPrice);
document.getElementById("type").addEventListener("change", calcPrice);


const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() - 0.5,
        vy: Math.random() - 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();