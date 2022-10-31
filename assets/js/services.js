const services = document.querySelector('.services'),
      servicesBtn = document.querySelector('.services__btn'),
      servicesClose = document.querySelector('.services__close');



servicesBtn.addEventListener('click', () => {
    services.classList.add('servicesShow');
});

servicesClose.addEventListener('click', () => {
    services.classList.remove('servicesShow');
});