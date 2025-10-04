let product = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1758726037966-5dbd145f15b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Toy Balloons",
    headline: "Makes childern happy",
    price: "₹999",
  },
  {
    image:
      "https://images.unsplash.com/photo-1755899850036-084006cbc1c2?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Hanging sunflower",
    headline: "Looks beautiful",
    price: "₹1500",
  },
  {
    image:
      "https://images.unsplash.com/photo-1758552322632-ba288778c770?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Glasses for Men",
    headline: "Makes you handsome",
    price: "₹1999",
  },
];

let popular = [
  {
    image: "https://images.unsplash.com/photo-1758720233158-5db6b3b1cb3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Radio",
    headline: "Escape the reality",
    price: "₹19,999",
  },
  {
    image: "https://images.unsplash.com/photo-1758825175271-168064c2004c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D",
    name: "Camera",
    headline: "Capture the moments",
    price: "₹15,000",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1758893734407-4d51f8150a5a?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Wine glass",
    headline: "Enjoy the evening",
    price: "₹699",
  },
];

let cart = []

function addProduct() {
  let clutter = "";
  product.forEach(function (dets, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src="${dets.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${dets.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${dets.headline}</h3>
                            <h4 class="font-semibold mt-2">${dets.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400 bg-black"><i
                                data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
  });

  document.querySelector(".products").innerHTML = clutter;
}

function addPopular(){
    let clutter = ""
    popular.forEach(function(dets){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${dets.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${dets.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${dets.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${dets.price}</h4>
                    </div>
                </div>`
    })

    document.querySelector(".populars").innerHTML = clutter
}

function addToCard(){
    document.querySelector(".products").addEventListener("click",function(dets){
        if(dets.target.classList.contains("add")){
            cart.push(product[dets.target.dataset.index])
        }
        
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click",function(){
    document.querySelector(".cartexpnd").classList.toggle("hidden")

    let clutter = ""
    cart.forEach(function(e){
        clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                        <img class="w-full h-full object-cover" src="${e.image}" />
                    </div>
                    <div>
                        <h3 class="font-semibold">${e.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">${e.price}</h5>
                    </div>
                </div>`
    })
    document.querySelector(".cartexpnd").innerHTML = clutter

    })


}

showCart();
addToCard();
addProduct();
addPopular();
