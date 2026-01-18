const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});


const section = document.querySelector('#projects');

window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionTop < screenPosition) {
        section.classList.add('reveal');
    }
});

document.querySelectorAll(".project-card").forEach(card => {
  let slides = card.querySelectorAll(".slide");
  let index = 0;

  const nextBtn = card.querySelector(".next");
  const prevBtn = card.querySelector(".prev");

  if (!nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  });

  prevBtn.addEventListener("click", () => {
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active");
  });
});
