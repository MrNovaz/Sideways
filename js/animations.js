//Page Transitions
const pageList = {home:"#home", pricing:"#pricing", host_an_event:"#hosting", gallery:"#gallery"};
const pages = Object.values(pageList)
function closePages(){
for (var num = 0; num <= 5; num++){
    if ($(pages[num]).hasClass("open")) {
        const pageClose = gsap.timeline({ defaults: { ease: "power1.out" } });
        pageClose.to(
            ".open", { 
            opacity: "0", 
            duration: 0.5
        });
        pageClose.to(
            ".open", { 
            overflow: "hidden", 
            duration: 0.1
        });
        pageClose.to(
            ".open", { 
            zIndex: "-1", 
            duration: 0.1
        });
        $(".open").removeClass("open");
    }}
}

$(".page-open-btn").on("click",function(){
    const toActive = $(this).attr("data-active"); 
    if ($(toActive).attr("class") != "open") {
        closePages()
        $(toActive).addClass("open");
        const pageOpen = gsap.timeline({ defaults: {ease: "expo.inOut"} });
        pageOpen.to(
            ".open", { 
            zIndex: "2", 
            duration: 0.1
        });
        pageOpen.to(
            ".open", { 
            overflow: "visible", 
            duration: 0.1
        });
        pageOpen.to(
            ".open", { 
            opacity: "1", 
            duration: 0.5
        });
    }
});

// Handles Host An Event Form
$("#host-an-event-btn").on("click",function(){
    const toActive = $(this).attr("data-active"); 
    if ($(toActive).attr("class") != "form-open") {
        $(toActive).addClass("form-open");
        const formOpen = gsap.timeline({ defaults: {ease: "expo.inOut"} });
        formOpen.to(
            ".form-open", { 
            height: "60%",
            opacity: "1",
            duration: 1
        });
        formOpen.fromTo(".host-an-event-form h1", {opacity: "0"}, {opacity: "1", duration: 1}, "-=1");
        formOpen.fromTo(".host-an-event-form input", {opacity: "0"}, {opacity: "1", duration: 1}, "-=1");
        formOpen.fromTo(".host-an-event-form select", {opacity: "0"}, {opacity: "1", duration: 1}, "-=1");
    }
});
$(".close-btn").on("click",function(){
    const form = $(this).attr("data-active"); 
    if ($(form).attr("class") == "form-open") {
        const formClose = gsap.timeline({ defaults: {ease: "expo.inOut"} });
        formClose.to(
            ".form-open", { 
            height: "0", 
            opacity: "0",
            duration: 1
        });
        $(form).removeClass("form-open");
    }
});

$('#host-an-event-form').submit(function(e){
    e.preventDefault();

    // do ajax now
    const formSubmitted = gsap.timeline({ defaults: {ease: "expo.inOut"} });

    formSubmitted.fromTo("#form h1", {opacity: "1"}, {opacity: "0", duration: 1});
    formSubmitted.fromTo("#form input", {opacity: "1"}, {opacity: "0", duration: 1}, "-=1");
    formSubmitted.fromTo("#form select", {opacity: "1"}, {opacity: "0", duration: 1}, "-=1");
    formSubmitted.to(".checkmark", {width: "80%", duration: 1}, "-=1");
    formSubmitted.to(".checkmark__circle", {strokeDashoffset: "0", duration: 2}, "-=1");
    formSubmitted.to(".checkmark__check", {strokeDashoffset: "0", duration: 1}, "-=1");
    
    formSubmitted.to(".checkmark__check", {strokeDashoffset: "48", duration: 1});
    formSubmitted.to(".checkmark__circle", {strokeDashoffset: "166", duration: 2}, "-=1");
    formSubmitted.to(".checkmark", {width: "0", duration: 1}, "-=1");

    formSubmitted.to("#form", {height: "0",opacity: "0", duration: 1}, "-=1");
    $("#form").removeClass("form-open");

    console.log("submitted"); 
    document.getElementById("host-an-event-form").submit();
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("date").value = "";
    document.getElementById("package-select").value = "";
});

// Handles Start Menu
$("#start-menu-btn").on("click",function(){
    startMenu = document.getElementById('start-menu')
    startMenu.classList.toggle('start-inactive')
});

// Goes Back To Home Page
$('#back-to-safety').on('click', () => {
    window.location.href = "index.html";
})

// Dark Mode
let body = document.body
let contactUsTitle = document.getElementById('contact-us-title')
let title = document.querySelectorAll('#title')
let nav = document.getElementById('navbar')
let logo = document.getElementById('logo')
let inactiveElements = document.querySelectorAll('#no-dark-mode')

$(document).ready(function() {
    if (window.localStorage.getItem("DarkMode") == null) {
      localStorage.setItem("DarkMode", false);
    } else if (localStorage.getItem("DarkMode") == "false") {
        ActivateLightMode()
    } else {
        ActivateDarkMode()
    }
})

$('#dark-mode').on('click', () => {
    let DarkMode = localStorage.getItem("DarkMode")
      if (DarkMode == "false") {
        localStorage.setItem("DarkMode", true)
        ActivateDarkMode()
      } else {
        localStorage.setItem("DarkMode", false)
        ActivateLightMode()
      }
})

function ActivateDarkMode() {
    $(body).css({'background-color': '#232323', 'color': '#ECECEC'})
    $(contactUsTitle).css('border-bottom', '1px solid #ECECEC')
    $(title).css('border-bottom', '1px solid #ECECEC')
    $(nav).css('border-bottom', '1px solid #ECECEC')
    $(logo).attr('src', 'https://cdn.discordapp.com/attachments/903341036573708311/913164498850967622/SidewaysUniversityLogoWhite.png')
    $(inactiveElements).css('color', 'black')
}

function ActivateLightMode() {
    $(body).css({'background-color': 'white', 'color': 'black'})
    $(contactUsTitle).css('border-bottom', '1px solid black')
    $(title).css('border-bottom', '1px solid black')
    $(logo).attr('src', 'https://cdn.discordapp.com/attachments/903341036573708311/913164498670587904/SidewaysUniversityLogo.png')
    $(nav).css('border-bottom', '1px solid black')
}