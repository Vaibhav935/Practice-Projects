let button = document.querySelector("button");
let form = document.querySelector("form");
let nam = document.querySelector("#name");
let email = document.querySelector("#email");
users = [
  {
    userName: "Vaibhav",
    email: "vaibhav@gmail.com",
  },
];

form.addEventListener("submit", function (d) {
  d.preventDefault();

  let newUsers = {
    userName: nam.value,
    email: email.value,
  };

  users.push(newUsers);
  nam.value = "";
  email.value = "";
  usersNames();
});

function usersNames() {
  sum = "";

  users.forEach(function (val) {
    sum += `<li>${val.userName} <span>${val.email}</span> </li>`;
  });

  document.querySelector("ul").innerHTML = sum;
}

usersNames();
