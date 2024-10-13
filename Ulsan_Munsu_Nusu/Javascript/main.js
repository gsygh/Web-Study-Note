// page 이동 버튼 array
const $pageButtons = document.querySelectorAll('.page-button');
const $pages = document.querySelectorAll('section')


// Anchor 이용한 페이지 내 이동(스크롤 효과 추가)
$pageButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        // console.log(location.hash);
        const page_id = button.hash.substr(1);

        // 동일 id로 이동 > 동일 id 요소 찾기
        const $page = document.getElementById(page_id);


        $page.scrollIntoView({ behavior: "smooth" });

    });
})


// Scroll Event (Header, Footer)
const $header = document.getElementsByTagName('header');
const $header__title = document.getElementsByClassName('title');
const $header__page_button = document.getElementsByClassName('page-button');
const $header__blog_button = document.getElementsByClassName('blog-button');
const $toggle_btn = document.getElementById('toggle-btn');
const $toggles = document.getElementsByClassName('toggle');




window.addEventListener('scroll', function () {
    if (this.window.scrollY > 100) {
        $header[0].style.backgroundColor = 'white';
        $header[0].style.border = '1px solid #e2e2e2';
        $header[0].style.opacity = '1';
        // 헤더 radius 형태로 변환
        // $scroll[0].style.position = 'fixed';
        $header[0].style.borderRadius = '50px';
        $header[0].style.maxWidth = '1200px';
        $header[0].style.left = '50%';
        $header[0].style.transform = 'translate(-50%, 0)';
        $header[0].style.top = '3%';
        $header[0].style.height = '70px';
        $header__blog_button[0].style.marginRight = '100px';
        $toggle_btn.style.top = '22px';
        [].forEach.call($toggles, function (toggle) {
            if(!(toggle.classList.contains('scroll--on'))) {
                toggle.classList.toggle('scroll--on');
            }
        })
        
    }
    else {
        $header[0].style.backgroundColor = '#eee';
        $header[0].style.border = '1px solid #e2e2e2';
        $header[0].style.opacity = '.7';
        // 헤더 형태 원복
        $header[0].style.borderRadius = '0';
        $header[0].style.maxWidth = '';
        $header[0].style.left = '0';
        $header[0].style.transform = '';
        $header[0].style.top = '0%';
        $header[0].style.height = '100px';
        $header__blog_button[0].style.marginRight = '200px';
        $toggle_btn.style.top = '37px';
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('scroll--on');
        });


    }
})


// 메뉴 버튼 클릭 이벤트

// const $toggle_btn = document.getElementById('toggle-btn');       // 해당 변수는 이미 읽어옴

$toggle_btn.addEventListener('click', function () {
    toggleElements();
})
function toggleElements() {
    // 유사 배열인 toggles를 call함수를 통해 연결
    // 찾은 toggle 의 classList(클래스 선택자를 제어)를 통해 'on'이라는 클래스 선택자를 toggle
    [].forEach.call($toggles, function (toggle) {
        toggle.classList.toggle('menu--on');
    });
}