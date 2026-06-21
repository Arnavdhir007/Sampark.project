const facts = [
    "🩷 Every child deserves love, care, and a safe place to live.",
    "📚 Education can break the cycle of poverty.",
    "🌱 Small acts of kindness can change lives.",
    "🤝 Volunteers make communities stronger.",
    "🌍 Together we can make a difference.",
    "🏠 Thousands of children find safe homes through support programs every year.",
    "🎒 Millions of children still lack access to basic school supplies.",
    "🍎 A healthy meal helps children learn and grow better."
];

document.getElementById("fact").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    this.textContent = facts[randomIndex];
});

setInterval(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").textContent = facts[randomIndex];
}, 2000);

window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
        }, 1000);
    }, 8000);
});

function openpapaPopup() {
    document.getElementById("papaPopup").style.display = "flex";
}

function closepapaPopup() {
    document.getElementById("papaPopup").style.display = "none";
}
