// ------------------------chạy slider--------------------------------

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  contain: true,
	cellAlign: 'center',
	imagesLoaded: true,
	lazyLoad: 1,
freeScroll: false,
wrapAround: true,
autoPlay: 6000,
	pauseAutoPlayOnHover : true,
	prevNextButtons: true,
	contain : true,
adaptiveHeight : true,
	dragThreshold : 10,
	percentPosition: true,
	pageDots: false,
	rightToLeft: false,
draggable: true,
	selectedAttraction: 0.1,
	parallax : 0,
	friction: 0.6
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel-sl', {
  // options
  imagesLoaded: true, 
  groupCells: "100%", 
  dragThreshold : 5, 
  cellAlign: "left",
  wrapAround: true,
  prevNextButtons: true,
  percentPosition: true,
  pageDots: false, 
  rightToLeft: false, 
  autoPlay : false
});

// ------------------------danh sách sp-------------------------------

function openCity(namebot, nametop) {
  var i;
  var x = document.getElementsByClassName("iteam-product");
  var y = document.getElementsByClassName("product-button-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.color = "#000";
  }
  document.getElementById(namebot).style.display = "block";
  document.getElementById(nametop).style.color = "#c89979";
}

// -----------------------animate---------------------------

AOS.init();

// -----------------------Menu scroll--------------------------------

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("menuAll").classList.add("navbar");
    // document.getElementById("navbar").style.top = "0";
  } else {
    // document.getElementById("navbar").style.top = "-50px";
    var element = document.getElementById("menuAll");
    element.classList.remove("navbar");
  }
}

//-----------------------menu responsize--------------
var elm1 = document.getElementById("onMenu");
var elm2 = document.getElementById("menuAll");
var elm3 = document.getElementById("closeMenu");

elm1.onclick = function (){
  elm2.style.display = "block";
}

elm3.onclick = function(){
  elm2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == elm2) {
    elm2.style.display = "none";
  }
}