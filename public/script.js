let login = document.getElementById("myLogin");
let button = document.getElementById("knopka");
let Password = document.getElementById("myPassword");
let email = document.getElementById("myEmail");
let location1 = document.getElementById("location");


async function aper() {
  await fetch("/addInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: login.value,
      Password: Password.value,
      email: email.value,
      location: location1.value
    }),
  });
}
