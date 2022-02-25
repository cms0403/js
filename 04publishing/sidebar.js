//사이드 js
//선택지 2개 -window.onload(페이지에서 1개만 사용가능)
//          -js코드를 아래쪽에 삽입

window.onload = function() {

    var menuBtn = document.querySelector(".menuBtn");
    menuBtn.addEventListener("click", onSidenav);

    
}

function onSidenav() {
    var sideWidth = document.querySelector(".side");

    if(sideWidth.style.width == '200px' || sideWidth =='') {
        sideWidth.style.width = '0px';
    } else {
        sideWidth.style.width = '200px';
    }
}