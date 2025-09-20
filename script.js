function startSlider(sliderId, interval = 3000) {
  const slider = document.getElementById(sliderId);
  if(!slider) return;
  const slides = slider.querySelectorAll('.slide');
  if(slides.length <= 1) return;
  let index = 0;
  
  slider._intervalId = setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, interval);
}

function changerSlide(sliderId, direction) {
  const slider = document.getElementById(sliderId);
  if(!slider) return;
  const slides = slider.querySelectorAll('.slide');
  if(slides.length <= 1) return;
  
  if(slider._intervalId) {
    clearInterval(slider._intervalId);
    slider._intervalId = null;
  }
  const activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
  slides[activeIndex].classList.remove('active');
  const newIndex = (activeIndex + direction + slides.length) % slides.length;
  slides[newIndex].classList.add('active');

  setTimeout(() => startSlider(sliderId, 3000), 2000);
}

window.addEventListener('load', () => {

  startSlider('slider-entreprise', 4000);
  startSlider('slider-construction', 3000);
  startSlider('slider-renovation', 3500);
  startSlider('slider-ingenierie', 3000);

  startSlider('slider-construction-full', 3500);
  startSlider('slider-renovation-full', 3500);
  startSlider('slider-ingenierie-full', 3500);
}
);
