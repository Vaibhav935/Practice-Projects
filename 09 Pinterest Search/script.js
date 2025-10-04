var items = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Rest at beach", image: "https://plus.unsplash.com/premium_photo-1673893476811-e8d1389870b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYWNofGVufDB8fDB8fHww"},
    {name: "Horse riding", image: "https://plus.unsplash.com/premium_photo-1677575669884-0852a81f1d7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9yc2UlMjByaWRpbmd8ZW58MHx8MHx8fDA%3D" },
    {name: "Jungle Safari", image: "https://plus.unsplash.com/premium_photo-1661290309226-2e5cd5a3915f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anVuZ2xlJTIwc2FmYXJpfGVufDB8fDB8fHww" },
    {name: "A tiger", image: "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1bmdsZSUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D" },
    {name: "Monuments", image: "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1bmdsZSUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D"},
    // {name: "Monuments", image: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udW1lbnRzfGVufDB8fDB8fHww"},
    // {name: "Monuments", image: "https://images.unsplash.com/photo-1506886009355-7f3af05dd5d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9udW1lbnRzfGVufDB8fDB8fHww"},

]

let container = document.querySelector(".container")

function showTheCards(){
    var clutter = ""
    items.forEach(function(obj){
        clutter += `<div class="box">
<img class="cursor-pointer" src="${obj.image}" alt="">
<div class="caption">${obj.name}</div>
</div>`
    })

    container.innerHTML = clutter
    
    
}

function searchFunctionality(){
    let inp = document.querySelector("#searchinput")
    inp.addEventListener("focus",function(){
        document.querySelector(".overlay").style.display = "block"
    })
    inp.addEventListener("blur",function(){
        document.querySelector(".overlay").style.display = "none"
        document.querySelector(".searchdata").style.display = "none"
    })
    inp.addEventListener("input",function(){
        const filteredArr = items.filter(obj => obj.name.toLowerCase().startsWith(inp.value))
        let clutter = ""
        filteredArr.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
                            <i class="ri-search-line font-semibold mr-5"></i>
                            <h3 class="font-semibold">${obj.name}</h3>
                        </div>`
        })
        document.querySelector(".searchdata").style.display = "block"
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}
showTheCards()
searchFunctionality()