const servicesBtns = document.querySelectorAll('.services-item-title__btn');


let count = 0;

servicesBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(count == 0) {
            btn.textContent = '-';
            btn.parentElement.parentElement.classList.add('showServives');
            return count = 1
        } else {
            btn.textContent = '+'
            btn.parentElement.parentElement.classList.remove('showServives');
            return count = 0
        }
    })
})