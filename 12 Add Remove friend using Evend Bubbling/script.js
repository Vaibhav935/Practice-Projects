const users = [
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    name: "Aman",
    status: "Stranger",
    button: "Add friends",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    name: "Sakshi",
    status: "friend",
    button: "Remove friends",
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60",
    name: "Meena",
    status: "Stranger",
    button: "Add friends",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60",
    name: "Kabir",
    status: "friend",
    button: "Remove friends",
  },
  {
    img: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?w=600&auto=format&fit=crop&q=60",
    name: "Priya",
    status: "Stranger",
    button: "Add friends",
  },
  {
    img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600&auto=format&fit=crop&q=60",
    name: "Yash",
    status: "friend",
    button: "Remove friends",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    name: "Anjali",
    status: "Stranger",
    button: "Add friends",
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60",
    name: "Deepak",
    status: "Stranger",
    button: "Add friends",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    name: "Neha",
    status: "friend",
    button: "Remove friends",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
    name: "Rohit",
    status: "Stranger",
    button: "Add friends",
  },
];

function makeCards() {
  let main = document.querySelector("#main");

  let sum = "";
  users.forEach(function (users, idx) {
    sum += `<div id="card">
      <img src="${users.img}" alt="">
      <h2 class="name">${users.name}</h2>
      <h5 class="${users.status}" >${users.status}</h5>
      <div id=${idx} class="button">${users.button}</div>
    </div>`;
  });

  main.innerHTML = sum;
}
makeCards();

let button = document.querySelectorAll(".button");
console.log(button);

let h = document.querySelector("h5");

main.addEventListener("click", function (dets) {
  let usr = users[dets.target.id];

  if (dets.target.id != undefined) {
    if (usr.button == "Add friends") {
      usr.status = "Friends";
      usr.button = "Remove friends";
    } else {
      usr.status = "Stranger";
      usr.button = "Add friends";
    }
    makeCards();
  }
});
