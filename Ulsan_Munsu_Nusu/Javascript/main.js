// page 이동 버튼 array
const $pageButtons = document.querySelectorAll('.page-button');
const $pages = document.querySelectorAll('section')


// Anchor 이용한 페이지 내 이동(스크롤 효과 추가)
$pageButtons.forEach(function(button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        // console.log(location.hash);
        const page_id = button.hash.substr(1);
        
        // 동일 id로 이동 > 동일 id 요소 찾기
        const $page = document.getElementById(page_id);
        console.log($page);
        
        
        $page.scrollIntoView({behavior: "smooth"});
        
    });
})


// Scroll Event (Header, Footer)
const $header = document.getElementsByTagName('header');
const $header__title = document.getElementsByClassName('title');
const $header__page_button = document.getElementsByClassName('page-button');
const $header__blog_button = document.getElementsByClassName('blog-button');

window.addEventListener('scroll', function() {
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
        $header__title[0].style.marginLeft = '100px';
        $header__blog_button[0].style.marginRight = '100px';
        
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
        $header__title[0].style.marginLeft = '200px';
        $header__blog_button[0].style.marginRight = '200px';
    }
})


// // Image 삽입

// let container = document.getElementsByClassName('tiles'); // tiles container 호출
// let new_ul = document.createElement('ul'); // 감싸줄 ul 태그 생성
// new_ul.className = 'capture__group clearfix'; // ul 태그의 class name 생성

// container[0].appendChild(new_ul); // ul 태그 div 내 삽입

// // 폴더 내 사진 갯수 파악 후 *3/4 (pc 기준 한 줄)
// let selected_directory_all = [];
