// 해당 범위 안의 코드는 자바스크립트 문법으로 작성
(function (window, document) {
    'use strict';

    // 요소를 담는 변수는 $해줌
    const $toggles = document.querySelectorAll('.toggle'); // $toggles = NodeList(유사배열)
    const $toggleBtn = document.getElementById('toggle-btn');
    const $inputText = document.getElementById('search');


    // 클릭 이벤트 감지 시 내부 function 실행
    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    // 홈페이지가 resizing 될 때마다 offElements 함수를 호출
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            // off toggle element
            offElements();
        }
    });

    function toggleElements() {
        // 반복
        // 유사 배열인 toggles를 call함수를 통해 연결
        // 찾은 toggle 의 classList(클래스 선택자를 제어)를 통해 'on'이라는 클래스 선택자를 toggle
        // toggle : 존재 시 remove, 없을 시 add 라고 생각하면 됨
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
            // 데이터 입력 후 토글하였을 때 값 초기화
            if ($inputText.value != "") {
                $inputText.value = "";
            }
        });
    }
    
    // 찾은 toggle의 on을 제거 => resizing 될 때 자동으로 toggle이 닫히도록
    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
            // 데이터 입력 후 토글하였을 때 값 초기화
        });
    }

})(window, document)