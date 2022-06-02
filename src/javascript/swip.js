// Подія кліку - прокрутка вгору
const btnToUp = document.querySelector('.to-top');
btnToUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// Подія скролу
const btnScroll = document.querySelector('.to-top');
window.onscroll = () => {
  //Якщо прокручено більше 700, кнопка з'являється
  if(window.scrollY > 700){
    btnScroll.classList.remove('to-top--hide');
    //Якщо прокручено менше 700, кнопка зникає
  } else if(window.scrollY < 700){
    btnScroll.classList.add('to-top--hide');
  }
}

const formList = document.querySelectorAll('.form__contact, .registration-form');
const popUp = document.querySelector('.pop-up');
// Сворюємо подію кліку для кожної форми
formList.forEach(formItem => {
  formItem.addEventListener('submit', (event) => {
    // Відміняємо сабміт форми
    event.preventDefault();

    let text = '';
    // Тут ми визначаємо яка форма була відправлена
    if(formItem.classList[0] === 'form__contact'){
      text = 'Your question has been sent!';
    } else {
      text = 'You are registered!';
    }

    // Показуємо pop-up
    popUp.innerHTML = text;
    popUp.classList.remove('pop-up--hide');
    // Через 2 секунди ховаємо pop-up
    setTimeout(
      () => {
        popUp.classList.add('pop-up--hide')
      }, 2000
    );
  });
});