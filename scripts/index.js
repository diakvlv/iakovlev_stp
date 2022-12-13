const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const menuClose2 = doc.querySelector(".close2");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuClose2.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);
