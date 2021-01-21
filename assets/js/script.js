function toggle(tab, tabType){
    var allTabs = document.getElementsByClassName("tab");
    var allCards = document.getElementsByClassName("card");
    for (i = 0; i < 6; i++){
        allTabs[i].classList.remove("tab-open");
        allTabs[i].classList.add("tab-close");
        allCards[i].classList.remove("d-block");
        allCards[i].classList.add("d-none");
    }
    tab.classList.remove("tab-close");
    tab.classList.add("tab-open");
    if (tabType == 'present'){
        var card = document.getElementById("present");
    }
    if (tabType == 'grades'){
        var card = document.getElementById("grades");
    }
    if (tabType == 'career'){
        var card = document.getElementById("career");
    }
    if (tabType == 'skills'){
        var card = document.getElementById("skills");
    }
    if (tabType == 'projects'){
        var card = document.getElementById("projects");
    }
    if (tabType == 'about'){
        var card = document.getElementById("about");
    }
    card.classList.remove("d-none");
    card.classList.add("d-block");
}