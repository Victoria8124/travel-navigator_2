let selectCity = function () {

let selectHeader = document.querySelectorAll('.select_header');
let selectItem = document.querySelectorAll('.select_item');
let selectIcon = document.querySelectorAll('.select_icon-arrow');

selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
   
});



selectItem.forEach(item => {
    item.addEventListener('click', selectCity);
    
});

selectIcon.forEach(item => {
    item.addEventListener('click', arrowToggle);
    
});

function selectToggle () {
    this.parentElement.classList.toggle('is-active');
    
}

function arrowToggle () {
    this.classList.toggle('is-turn');
}

function selectCity () {
    let text = this.textContent;
    let select = this.closest('.select_city');
    let currentText = select.querySelector('.current_city');
    currentText.textContent = text;
    select.classList.remove('is-active');
}
}

selectCity();


