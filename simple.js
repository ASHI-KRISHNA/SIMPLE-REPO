function greet() {
  const name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    document.getElementById("output").innerText = "Bro… at least type your name 😑";
  } else {
    document.getElementById("output").innerText = "Hello " + name + "! Welcome to GitHub world 🚀";
  }
}
