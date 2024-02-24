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
            if (scrollPosition > fadeInTrigger - 20 && scrollPosition < (fadeInTrigger + fadeInText.parentElement.offsetHeight)) {
                fadeInText.classList.add('fade-in');
                fadeInText.classList.remove('fade-out');
            } else {
                fadeInText.classList.remove('fade-in');
                fadeInText.classList.add('fade-out');
            }

        });
    } else {
        console.error('No element with class "fadeInText pre" found');
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     const fadeInText = document.querySelector('.fadeInText pre');
//     if (fadeInText) {
//         document.addEventListener('scroll', (e) => {
//             let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//             fadeInText.style.setProperty('--percentage', `${scrolled * 100}%`);
//             console.log(scrolled)
//         });
//     } else {
//         console.error('No element with class "fadeInText pre" found');
//     }
// });




















// document.addEventListener('DOMContentLoaded', () => {
//     document.addEventListener('mousemove', (e) => {
//         //傳入滑鼠位置
//         document.querySelectorAll('.pos-3d').forEach((element) => {
//             add3d(element, e);
//         });
//     });
// });

// function add3d(element, e) {
//     // 滑鼠位置
//     const m_x = e.pageX;
//     const m_y = e.pageY;

//     const w_w = window.innerWidth,
//         w_h = window.innerHeight,
//         o_w = element.offsetWidth,
//         distance = (element.offsetWidth - w_w) / 2,
//         layer = Number(element.getAttribute('data-layer')),
//         invert = Number(element.getAttribute('data-invert'));

//     // 物件在頁面上的位置
//     const o_x = w_w / 2;
//     const o_y = w_h / 2;

//     // 計算滑鼠位置和元素位置之間的距離差
//     let w_x = m_x - o_x;
//     let w_y = m_y - o_y;

//     // 距離相乘後開平方
//     const w_wSqrt = Math.sqrt(w_w / 2);
//     const d = distance / w_wSqrt / layer;

//     // 距離計算
//     let s_x = Math.sqrt(Math.abs(w_x));
//     if (w_x < 0) {
//         s_x = -s_x;
//     }

//     let d_x = s_x * d;
//     // 加入樣式
//     element.style.transform = `translateX(${invert ? d_x : -d_x}px)`;   //使用 translateX 樣式屬性將元素水平平移，根據 data-invert 屬性的值，可以設置方向
// }



