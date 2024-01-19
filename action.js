window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    // 滾輪滑動後，添加或刪除透明 Navbar 的樣式
    if (scrollPosition > 0) {
        navbar.classList.add('opaque-navbar');
        navbar.classList.remove('transparent-navbar');
    } else {
        navbar.classList.remove('opaque-navbar');
        navbar.classList.add('transparent-navbar');
    }
});