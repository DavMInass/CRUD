let login = document.getElementById("myLogin");
let button = document.getElementById("knopka");
let parol = document.getElementById("myParol");
let email = document.getElementById("myEmail");

async function aper() {
  await fetch("http://localhost:3000/addInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: login.value,
      parol: parol.value,
      email: email.value,
    }),
  });
}
