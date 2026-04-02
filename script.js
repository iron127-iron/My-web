// 年份
document.getElementById('year').textContent = new Date().getFullYear();

// 滾動出現動畫
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if(top < windowHeight - 50){
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();