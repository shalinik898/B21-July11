let tabLinks = document.getElementById('tab-links')
let tabContents = document.getElementById("tab-contents")

function openTab(tabName){
    for (let i = 0; index < tabLinks; i++) {

        tabLinks[i].classlist.remove('active-link')
        
    }

    for(let tabContent of tabContents){
        tabContent.classlist.remove('active-tab')
    }

    event.currentTarget.classlist.add('active-link');
    document.getElementById(tabName).classList.add('active-tab')
}

// open and close menu

let sideMenu =document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right = "0"
}

function closeMenu(){
    sideMenu.style.right="0"
}

