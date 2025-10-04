let output = document.querySelector("#output");
let keys = document.querySelectorAll(".keys");

keys.forEach((element) => {
  element.addEventListener("click", function () {
    if ("C" == element.innerHTML) {
      output.innerHTML = "";
    } else if ("+/-" == element.innerHTML) {
      if(element.innerHTML > 0){
        output.innerHTML = "-"+output.innerHTML 
      }else{
        output.innerHTML = "+"+output.innerHTML
      }
    } else if ("%" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "%";
    } else if ("/" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "/";
    }else if ("7" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "7";
    }else if ("8" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "8";
    }else if ("9" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "9";
    }else if ("*" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "*";
    }else if ("4" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "4";
    }else if ("5" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "5";
    }else if ("6" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "6";
    }else if ("-" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "-";
    }else if ("1" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "1";
    }else if ("2" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "2";
    }else if ("3" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "3";
    }else if ("+" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "+";
    }else if ("0" == element.innerHTML) {
      output.innerHTML = output.innerHTML + "0";
    }else if ("." == element.innerHTML) {
      output.innerHTML = output.innerHTML + ".";
    }else if ("←" == element.innerHTML) {
    //   output.innerHTML = output.innerHTML - output.innerHTML[output.innerHTML.length - 1];
    // output.innerHTML[output.innerHTML.length - 1] = " "
    output.innerHTML = output.innerHTML.slice(0, -1);
    }else{
        output.innerHTML = eval(output.innerHTML)
    }

  });
});
