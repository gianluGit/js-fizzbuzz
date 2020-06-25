var btn = document.getElementById('button');

btn.addEventListener("click", function(){
  var numeri = document.getElementById('title');


  for (var i = 1; i <= 100; i++) {
    if ((i%3 == 0) && (i%5 == 0)) {
      numeri.innerHTML += "<br>" + "FizzBuzz";

    } else if (i%3 == 0) {
      numeri.innerHTML += "<br>" + "Fizz";

    } else if (i%5 == 0) {
      numeri.innerHTML += "<br>" + "Buzz";

    } else {
      numeri.innerHTML += "<br>" + i;
    }
  }
});
