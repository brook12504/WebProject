function updateTime() {
    var timeElement = document.getElementById('timeDisplay');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // 0을 붙여 2자리 숫자로 표시
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    var currentTimeString = hours + '시' + minutes + '분' + seconds + '초';
    timeElement.textContent = currentTimeString;
}

// 1초마다 시간 업데이트
setInterval(updateTime, 1000);

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    function drawImageOnCanvas(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        image.onload = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, 400, 500);
        };
    }

    const sticky1 = document.getElementById('stickies01');
    const sticky2 = document.getElementById('stickies02');
    const sticky3 = document.getElementById('stickies03');

    sticky1.addEventListener('click', function () {
        const imageSrc = 'https://cdn.inflearn.com/public/courses/327598/cover/feec6bfd-abaa-4972-9c88-7dd13ed57c32/327598-eng.png'; // sticky1을 클릭하면 출력될 이미지의 경로
        drawImageOnCanvas(imageSrc);
    });

    sticky2.addEventListener('click', function () {
        const imageSrc = 'https://storage.googleapis.com/static.fastcampus.co.kr/prod/uploads/202208/054742-804/%E1%84%8C%E1%85%A6%E1%84%85%E1%85%A9%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3-%E1%84%86%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A5-%E1%84%87%E1%85%A2%E1%84%82%E1%85%A51-1-2.jpg'; // sticky2를 클릭하면 출력될 이미지의 경로
        drawImageOnCanvas(imageSrc);
    });

    sticky3.addEventListener('click', function () {
        const imageSrc = 'https://images.velog.io/images/jen_jyseo/post/761e0dc2-1d9e-403d-9471-422bb0e564d5/%E1%84%83%E1%85%A1%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3.png'; // sticky3를 클릭하면 출력될 이미지의 경로
        drawImageOnCanvas(imageSrc);
    });

});

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas2');
    const ctx = canvas.getContext('2d');

    function drawImageOnCanvas(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        image.onload = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, 400, 500);
        };
    }


    const sticky4 = document.getElementById('stickies04');
    const sticky5 = document.getElementById('stickies05');
    const sticky6 = document.getElementById('stickies06');


    sticky4.addEventListener('click', function () {
        const imageSrc = 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5rH/image/vz3Lkxpq0OwBzIrUKlbvsd1WY-w'; // sticky3를 클릭하면 출력될 이미지의 경로
        drawImageOnCanvas(imageSrc);
    });
    sticky5.addEventListener('click', function () {
        const imageSrc = 'https://t1.daumcdn.net/cfile/tistory/24566D4E526E21083E'; // sticky3를 클릭하면 출력될 이미지의 경로
        drawImageOnCanvas(imageSrc);
    });
    sticky6.addEventListener('click', function () {
        const imageSrc = 'https://www.sisaweekly.com/news/photo/202303/38518_59675_5723.jpg'; // sticky3를 클릭하면 출력될 이미지의 경로
        drawImageOnCanvas(imageSrc);
    });
});


function stickyContent(contentId) {
    var content = document.getElementById('stickiesAnswer' + contentId);
    var content1 = document.getElementById('stickiesAnswer1');
    var content2 = document.getElementById('stickiesAnswer2');
    var content3 = document.getElementById('stickiesAnswer3');
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content.style.display = 'block';
}

function stickyContent2(contentId) {
    var content = document.getElementById('stickiesAnswer' + contentId);
    var content1 = document.getElementById('stickiesAnswer4');
    var content3 = document.getElementById('stickiesAnswer6');
    content1.style.display = 'none';
    content3.style.display = 'none';
    content.style.display = 'block';
}



window.addEventListener('load', function () {
    const form = document.querySelector('form');
    const colorInput = document.querySelector('#color');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // 폼 제출 기본 동작 방지

        const selectedColor = colorInput.value;
        document.body.style.backgroundColor = selectedColor;
        document.body.style.color = getContrastingColor(selectedColor);
    });
    function getContrastingColor(color) {
        // RGB 값을 추출하여 반전된 색상을 계산하는 로직 작성
        // 예: 배경색이 어두운 경우 밝은 색상, 밝은 경우 어두운 색상 반환
        // 적절한 로직을 구현하여 반전된 색상을 반환하도록 하세요.
        // 예시로는 간단한 계산으로 색상을 반전시키는 invertColor 함수를 사용합니다.
        return invertColor(color);
      }
    
      function invertColor(color) {
        // 색상을 반전시키는 로직 작성
        // 예시로는 #RRGGBB 형식의 16진수 색상에서 R, G, B 값을 반전시킵니다.
        // 적절한 로직을 구현하여 색상을 반전시키도록 하세요.
        // 예시로는 각 색상 값을 255에서 빼는 방식을 사용합니다.
        const hex = color.slice(1);
        const invertedHex = (0xFFFFFF ^ parseInt(hex, 16)).toString(16);
        return '#' + invertedHex.padStart(6, '0');
      }
});