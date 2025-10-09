let users = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1742275430206-6fcf772c6634?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Aria",
    status:
      "https://images.unsplash.com/photo-1625088236899-2fb75333b0d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Liam",
    status:
      "https://plus.unsplash.com/premium_photo-1677094766041-1ff6e99c4c4d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Noah",
    status:
      "https://images.unsplash.com/photo-1757374798425-0febce2709b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Ethan",
    status:
      "https://plus.unsplash.com/premium_photo-1679840374351-760c47378ac3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1578254090783-31fa81462b73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Mason",
    status:
      "https://images.unsplash.com/photo-1475333017476-3482638e685b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1658196253174-154270bcffa1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Emma",
    status:
      "https://plus.unsplash.com/premium_photo-1686341708147-9dc46201359a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1632254386266-ea937af80f2b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Ava",
    status:
      "https://plus.unsplash.com/premium_photo-1677146015088-71992ac139af?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let allstatus = document.querySelector(".allStatus");
let fullStatus = document.querySelector(".fullStatus");
let img = document.querySelector("#img");
let time = document.querySelector(".time");
let timeBar = document.querySelector(".timeBar");
let statusInfo = document.querySelector(".statusInfo h3");
let statusImg = document.querySelector("#statusImg");
let progress = 0;
let prog;
let timeOut;

function addStatus() {
  let sum = "";
  users.forEach(function (user, idx) {
    sum += `<div id="${idx}" class="status">
            <img id="img" src="${user.dp} " alt="">
            <h3>${user.userName}</h3>
          </div>`;
  });
  allstatus.innerHTML = sum;
}
addStatus();

function nextStatus(idx) {
  clearInterval(prog);
  let progress = 0;
  fullStatus.style.backgroundImage = `url(${users[idx].status})`;
  fullStatus.style.display = "block";
  statusInfo.innerHTML = `${users[idx].userName}`;
  statusImg.setAttribute("src", `${users[idx].dp}`);

  prog = setInterval(function () {
    progress++;
    timeBar.style.width = `${progress}%`;
  }, 30);

  timeOut = setTimeout(function () {
    clearInterval(prog);
    fullStatus.style.display = "none";
    if (idx + 1 < users.length) {
      nextStatus(idx + 1);
    }
    // img.style.borderColor = "grey"
  }, 3000);
}

allstatus.addEventListener("click", function (dets) {
  let id = Number(dets.target.id);
  nextStatus(id);
});
fullStatus.addEventListener("click", function () {
  fullStatus.style.display = "none";
  clearInterval(prog);
  clearTimeout(timeOut);
});
