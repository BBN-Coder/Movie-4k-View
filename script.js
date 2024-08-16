// text animation -----------//
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".text-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex); // Show the first slide initially

  setInterval(nextSlide, 2000); // Change text every 2 seconds
});
// text animation end -------//


// search ----------//
const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const closeBtn = document.querySelector('.close-btn');

searchBtn.addEventListener('click', function(){
  console.log(search.classList.contains('active'));
  if(search.classList.contains('active')){
    searchBox.value = ''
  }
  else {
    search.classList.add('active');
    searchBox.focus();
  }
})

closeBtn.addEventListener('click', function(){
  search.classList.remove('active');
  searchBox.value = '';
})
// search end ---------//

// SLIDER ------------------//
var swiper = new Swiper(".card_slider", {
	loop: true,
	speed: 1000,
	autoplay:{
	  delay: 2000,
	},
	spaceBetween: 40,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
	  640: {
		slidesPerView: 2,
	  },
	  768: {
		slidesPerView: 2,
		spaceBetween: 20,
	  },
	  1000: {
		slidesPerView: 3,
		spaceBetween: 10,
	  },
	  1200: {
		slidesPerView: 5,
		spaceBetween: 30,
	  },
	  1024: {
		slidesPerView: 3,
		spaceBetween: 30,
	  },
	  1400: {
		slidesPerView: 4,
		spaceBetween: 30,
	  },
	},
  });
  // SLIDER END //

	// Movie Category slider //
	var swiper = new Swiper(".movie_slider", {
		loop: true,
		speed: 100,
		slidesPerView: 5,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			640:{
			slidesPerView: 5,
			spaceBetween: 5,
			},
		},
		});
		// Movie Category slider End //
		 
		// faceebook Social Plugins //
		
