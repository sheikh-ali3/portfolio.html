// Initialize variables
let tablinks = document.getElementsByClassName("tab-liks");
let tabcontents = document.getElementsByClassName("tab-contents");
let sidemeu = null;

// Initialize menu when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    sidemeu = document.getElementById("sidemenu");
    
    // Add click handlers to menu items
    const menuLinks = document.querySelectorAll('#sidemenu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closemenu();
        });
    });
});

// Menu functions
window.openmenu = function() {
    if (sidemeu) {
        sidemeu.style.right = "0";
        document.body.style.overflow = 'hidden';
        document.addEventListener('click', closeMenuOnClickOutside);
    }
}

window.closemenu = function() {
    if (sidemeu) {
        sidemeu.style.right = "-300px";
        document.body.style.overflow = 'auto';
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

function closeMenuOnClickOutside(event) {
    if (sidemeu && !sidemeu.contains(event.target) && 
        !event.target.closest('.fa-bars') && 
        !event.target.closest('.fa-regular')) {
        closemenu();
    }
}

// Tab functions
window.openTab = function(tabName) {
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(let tabcontent of tabcontents){ 
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

window.toggleTabs = function(index) {
    let tabs = document.querySelectorAll('.tab-contents');
    tabs.forEach(tab => {
       if (tab.id === 'tab-' + ['skill', 'experience', 'education'][index]) {
         tab.classList.add('active-tab');
       } else {
         tab.classList.remove('active-tab');
       }
    });
   
    let links = document.querySelectorAll('.tab-links');
    links.forEach(link => {
       if (link.getAttribute('onclick').includes(index)) {
         link.classList.add('active-link');
       } else {
         link.classList.remove('active-link');
       }
    });
}

window.toggle1 = function() {
    var x = document.getElementById("tab-skill");
    if(x.style.display==='none'){
        x.style.display='block';
    }
    else{
        x.style.display='none';
    }
}

window.toggle2 = function() {
    var x = document.getElementById("tab-experience");
    if(x.style.display==='none'){
        x.style.display='block';
    }
    else{
        x.style.display='none';
    }
}

window.toggle3 = function() {
    var x = document.getElementById("tab-education");
    if(x.style.display==='none'){
        x.style.display='block';
    }
    else{
        x.style.display='none';
    }
}
   