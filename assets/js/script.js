function toggle(tab, tabType){
    var allTabs = document.getElementsByClassName('tab');
    var allCards = document.getElementsByClassName('card');
    for (i = 0; i < 5; i++){
        allTabs[i].classList.remove('red-close-color');
        allTabs[i].classList.remove('purple-close-color');
        allTabs[i].classList.remove('green-close-color');
        allTabs[i].classList.remove('blue-close-color');
        allTabs[i].classList.remove('orange-close-color');
        allTabs[i].classList.remove('red-open-color');
        allTabs[i].classList.remove('purple-open-color');
        allTabs[i].classList.remove('green-open-color');
        allTabs[i].classList.remove('blue-open-color');
        allTabs[i].classList.remove('orange-open-color');
        allTabs[i].classList.remove('tab-open');
        allTabs[i].classList.remove('col-3');
        allTabs[i].classList.add('tab-close');
        allTabs[i].classList.add('col-2');
        allCards[i].classList.remove('d-block');
        allCards[i].classList.add('d-none');
    }
    if (tabType == 'present'){
        var card = document.getElementById('present');
        for (i = 0; i < 5; i++){
            allTabs[i].classList.add('red-close-color');
        }
        tab.classList.remove('red-close-color');
        tab.classList.add('red-open-color');
    }
    if (tabType == 'career'){
        var card = document.getElementById('career');
        for (i = 0; i < 5; i++){
            allTabs[i].classList.add('blue-close-color');
        }
        tab.classList.remove('blue-close-color');
        tab.classList.add('blue-open-color');
    }
    if (tabType == 'skills'){
        var card = document.getElementById('skills');
        for (i = 0; i < 5; i++){
            allTabs[i].classList.add('purple-close-color');
        }
        tab.classList.remove('purple-close-color');
        tab.classList.add('purple-open-color');

    }
    if (tabType == 'projects'){
        var card = document.getElementById('projects');
        for (i = 0; i < 5; i++){
            allTabs[i].classList.add('green-close-color');
        }
        tab.classList.remove('green-close-color');
        tab.classList.add('green-open-color');
    }
    if (tabType == 'about'){
        var card = document.getElementById('about');
        for (i = 0; i < 5; i++){
            allTabs[i].classList.add('orange-close-color');
        }
        tab.classList.remove('orange-close-color');
        tab.classList.add('orange-open-color');
    }
    tab.classList.remove('tab-close');
    tab.classList.add('tab-open');
    tab.classList.remove('col-2');
    tab.classList.add('col-3');
    card.classList.remove('d-none');
    card.classList.add('d-block');
}
function theme(){
    var p = document.getElementById('themeIcon');
    var oldIcon = p.childNodes[0];
    var newIcon = document.createElement('i');
    var style = document.getElementById('style');
    console.log(oldIcon);
    if(oldIcon.classList.contains('fa-moon')){
        newIcon.classList.add('fas', 'fa-sun', 'fa-2x');
        style.removeAttribute('href');
        style.setAttribute('href', 'assets/css/styleDay.css');
    }
    else{
        newIcon.classList.add('fas', 'fa-moon', 'fa-2x');
        style.removeAttribute('href');
        style.setAttribute('href', 'assets/css/styleNight.css');
    }
    p.replaceChild(newIcon, oldIcon);
}

// Modales cestion career
var careerModal = document.getElementById('careerModal')
careerModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget
    var modalAttr = button.getAttribute('data-bs-modal-type');
    var modalTitle = document.getElementById('modalTitle');
    var modalTitleIcon = document.getElementById('modalTitleIcon');
    var modalBody = document.getElementById('modalBody');
    var modalCalendar = document.getElementById('modalCalendar');
    var modalLocal = document.getElementById('modalLocal');
    var modalText = document.getElementById('modalText');
    var modalFoot = document.getElementById('modalFoot');
    modalTitleIcon.removeAttribute('class');
    if (modalAttr == 'csharp'){
        // Titre de la modale
        modalTitleIcon.classList.add('fas', 'fa-book');
        modalTitle.insertAdjacentHTML('beforeend', ' Formation C# (.NET)');
        // Durée du parcours
        modalCalendar.insertAdjacentHTML('beforeend', ' Janvier 2021 - Avril 2021 (400 h)');
        // Lieu du parcours
        modalLocal.insertAdjacentHTML('beforeend', ' École Numérique La Manu à Noyon (60)');
        // Description du parcours
        modalText.insertAdjacentHTML('beforeend', 
        'Formation financé par Pôle Emploi et l\'OPCO Atlas dans laquel j\'apprends à développer en C Sharp. J\'ai également reçu des cours et des rappels sur les languages HTML, CSS, JavaScript avec le Framework Bootstrap 4.6 et y est appris un peu de JQuery.');



 
    }
    if (modalAttr == 'dwwm'){
        modalTitle.innerHTML = 'gneugneu';
        modalBody.innerHTML = 'bleubleu';
        modalFoot.innerHTML = 'maaaaaaaaaaah';    
    }
})


document.getElementById('present_anchor').addEventListener('click',() => {
    var allCards = document.getElementsByClassName('card');
    for (i = 0; i < 5; i++){
        allCards[i].classList.remove('d-block');
        allCards[i].classList.add('d-none');
    }
    document.getElementById('present').classList.remove('d-none');
    document.getElementById('present').classList.add('d-block');
    document.getElementById('responsive_navbar').style.borderBottom = '5px #920000 solid';
});

document.getElementById('career_anchor').addEventListener('click',() => {
    var allCards = document.getElementsByClassName('card');
    for (i = 0; i < 5; i++){
        allCards[i].classList.remove('d-block');
        allCards[i].classList.add('d-none');
    }
    document.getElementById('career').classList.remove('d-none');
    document.getElementById('career').classList.add('d-block');
    document.getElementById('responsive_navbar').style.borderBottom = '5px #4400ff solid';
});

document.getElementById('skills_anchor').addEventListener('click',() => {
    var allCards = document.getElementsByClassName('card');
    for (i = 0; i < 5; i++){
        allCards[i].classList.remove('d-block');
        allCards[i].classList.add('d-none');
    }
    document.getElementById('skills').classList.remove('d-none');
    document.getElementById('skills').classList.add('d-block');
    document.getElementById('responsive_navbar').style.borderBottom = '5px #AC0095 solid';
});

document.getElementById('projects_anchor').addEventListener('click',() => {
    var allCards = document.getElementsByClassName('card');
    for (i = 0; i < 5; i++){
        allCards[i].classList.remove('d-block');
        allCards[i].classList.add('d-none');
    }
    document.getElementById('projects').classList.remove('d-none');
    document.getElementById('projects').classList.add('d-block');
    document.getElementById('responsive_navbar').style.borderBottom = '5px #006828 solid';
});

document.getElementById('about_anchor').addEventListener('click',() => {
    var allCards = document.getElementsByClassName('card');
    for (i = 0; i < 5; i++){
        allCards[i].classList.remove('d-block');
        allCards[i].classList.add('d-none');
    }
    document.getElementById('about').classList.remove('d-none');
    document.getElementById('about').classList.add('d-block');
    document.getElementById('responsive_navbar').style.borderBottom = '5px #D45500 solid';
});

document.getElementById('theme_anchor').addEventListener('click',() => {
    theme();
});