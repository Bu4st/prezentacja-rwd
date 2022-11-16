

// button top



let mybutton = document.getElementById("scrollto-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 965;
  document.documentElement.scrollTop = 965;
}
