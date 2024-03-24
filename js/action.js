window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    // 滾輪滑動後，添加或刪除透明 Navbar 的樣式
    if (scrollPosition > 0) {
        navbar.classList.add('opaque-navbar');
        navbar.classList.add('navbar-light');
        navbar.classList.remove('transparent-navbar');
        navbar.classList.remove('navbar-dark');
    } else {
        navbar.classList.remove('opaque-navbar');
        navbar.classList.remove('navbar-light');
        navbar.classList.add('transparent-navbar');
        navbar.classList.add('navbar-dark');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const fadeInText = document.querySelector('.fadeInText');
    if (fadeInText) {
        const fadeInTrigger = -(fadeInText.parentElement.offsetTop - window.innerHeight * 0.75);
        document.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            if (scrollPosition > fadeInTrigger - 5) {  // && scrollPosition < (fadeInTrigger + fadeInText.parentElement.offsetHeight) #超出也會淡出
                fadeInText.classList.add('fade-in');
                fadeInText.classList.remove('fade-out');
            } else {
                fadeInText.classList.remove('fade-in');
                fadeInText.classList.add('fade-out');
            }

        });
    } else {
        console.log('No element with class "fadeInText pre" found');
    }
});

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target element based on the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});


