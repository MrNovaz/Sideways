// Password Counter
schoolClicks = 0
eventClicks = 0
carClicks = 0

$('#school').on('click', () => {
    schoolClicks += 1
    checkPassword()
})
$('#event').on('click', () => {
    eventClicks += 1
    checkPassword()
})
$('#car').on('click', () => {
    carClicks += 1
    checkPassword()
})

// Set Password Here
function checkPassword() {
    if (schoolClicks == 2 && eventClicks == 3 && carClicks == 1) {
        window.location.href = "underground.html";
    }
}

$('.page-open-btn').on('click', () => {
    schoolClicks = 0
    eventClicks = 0
    carClicks = 0
})

// Handles The Underground Login Page
back = document.getElementById('back')
$(back).on('click', () => {
    window.location.href = "index.html";
})
username = document.getElementById('username')
password = document.getElementById('password')
loginBTN = document.getElementById('login')

$(loginBTN).on('click', () => {
    if (username.value == 'admin' && password.value == 'password') {
        const transition = gsap.timeline({ defaults: { ease: "power1.out" } });
        transition.to(
            "#login-page", { 
            opacity: "0", 
            duration: 0.5
        });
        transition.to(
            "#login-page", { 
            overflow: "hidden", 
            duration: 0.1
        });
        transition.to(
            "#login-page", { 
            zIndex: "-1", 
            duration: 0.1
        });
        transition.to(
            "#main-desktop", { 
            zIndex: "2", 
            duration: 0.1
        });
        transition.to(
            "#main-desktop", { 
            overflow: "visible", 
            duration: 0.1
        });
        transition.to(
            "#main-desktop", { 
            opacity: "1", 
            duration: 0.5
        });
    } else {
        username.value = '';
        password.value = '';
    }
})

$('#password' && '#username').keypress(function (e) {
    if (e.which == 13) {
      $('#login').trigger('click')
      return false;
    }
  });