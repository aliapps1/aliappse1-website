const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

document.querySelectorAll("#navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});

document.querySelectorAll('a[aria-disabled="true"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
