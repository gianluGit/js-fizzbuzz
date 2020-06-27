var btn = document.getElementById('button');

btn.addEventListener("click", function(){
  var numeri = document.getElementById('title');


  for (var i = 1; i <= 100; i++) {
    if ((i%3 == 0) && (i%5 == 0)) {
      numeri.innerHTML += "<li class=\"fizzbuzz\">FizzBuzz</li>";

    } else if (i%3 == 0) {
      numeri.innerHTML += "<li class=\"fizz\">Fizz</li>";

    } else if (i%5 == 0) {
      numeri.innerHTML += "<li class=\"buzz\">Buzz</li>";

    } else {
      numeri.innerHTML += "<li>" + i + "</li>";
    }
  }
});
