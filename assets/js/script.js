function toggle(tab, tabType){
    var allTabs = document.getElementsByClassName("tab");
    var allCards = document.getElementsByClassName("card");
    for (i = 0; i < 5; i++){
        allTabs[i].classList.remove("red-close-color");
        allTabs[i].classList.remove("purple-close-color");
        allTabs[i].classList.remove("green-close-color");
        allTabs[i].classList.remove("blue-close-color");
        allTabs[i].classList.remove("orange-close-color");
        allTabs[i].classList.remove("red-open-color");
        allTabs[i].classList.remove("purple-open-color");
        allTabs[i].classList.remove("green-open-color");
        allTabs[i].classList.remove("blue-open-color");
        allTabs[i].classList.remove("orange-open-color");
        allTabs[i].classList.remove("tab-open");
        allTabs[i].classList.remove("col-3");
        allTabs[i].classList.add("tab-close");
        allTabs[i].classList.add("col-2");
        allCards[i].classList.remove("d-block");
        allCards[i].classList.add("d-none");
    }
    if (tabType == 'present'){
        var card = document.getElementById("present");
        for (i = 0; i < 5; i++){
            allTabs[i].classList.add("red-close-color");
        }
        tab.classList.remove("red-close-color");
        tab.classList.add("red-open-color");
    }
    if (tabType == 'career'){
        var card = document.getElementById("career");
        for (i = 0; i < 5; i++){
            allTabs[i].classList.add("blue-close-color");
        }
        tab.classList.remove("blue-close-color");
        tab.classList.add("blue-open-color");
    }
    if (tabType == 'skills'){
        var card = document.getElementById("skills");for (i = 0; i < 5; i++){
            allTabs[i].classList.add("purple-close-color");
        }
        tab.classList.remove("purple-close-color");
        tab.classList.add("purple-open-color");

    }
    if (tabType == 'projects'){
        var card = document.getElementById("projects");
        for (i = 0; i < 5; i++){
            allTabs[i].classList.add("green-close-color");
        }
        tab.classList.remove("green-close-color");
        tab.classList.add("green-open-color");
    }
    if (tabType == 'about'){
        var card = document.getElementById("about");
        for (i = 0; i < 5; i++){
            allTabs[i].classList.add("orange-close-color");
        }
        tab.classList.remove("orange-close-color");
        tab.classList.add("orange-open-color");
    }
    tab.classList.remove("tab-close");
    tab.classList.add("tab-open");
    tab.classList.remove("col-2");
    tab.classList.add("col-3");
    card.classList.remove("d-none");
    card.classList.add("d-block");
}
function theme(){
    var p = document.getElementById("themeIcon");
    var oldIcon = p.childNodes[0];
    var newIcon = document.createElement("i");
    var style = document.getElementById("style");
    console.log(oldIcon);
    if(oldIcon.classList.contains("fa-moon")){
        newIcon.classList.add("fas", "fa-sun", "fa-2x");
        style.removeAttribute("href");
        style.setAttribute("href", "assets/css/styleDay.css");
    }
    else{
        newIcon.classList.add("fas", "fa-moon", "fa-2x");
        style.removeAttribute("href");
        style.setAttribute("href", "assets/css/styleNight.css");
    }
    p.replaceChild(newIcon, oldIcon);
}
