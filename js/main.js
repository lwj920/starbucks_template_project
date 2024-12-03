
// badges
const badgeEl = document.querySelector('header .badges');
// topBtn
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(() => {
  // console.log(window.scrollY);
  // 배지를 보이거나 안 보이게 처리
  // 스크롤 값이 500이상이면 안 보이고, 이하이면 보이게
  if( window.scrollY > 500) {
    // badgeEl.style.display = 'none';
    // gsap은 lib, 동작(애니메이션)
    // gsap.to(요소, 지속시간, {옵션})
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
    gsap.to(toTopEl, .7, {
      x : 0,
      opacity : 1
    });
  } else {
    // badgeEl.style.display = 'block'; 
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    gsap.to(toTopEl, .7, {
      x : 100
    });
  };
}, 300));

/* to-top 버튼 클릭 이벤트*/
toTopEl.addEventListener('click',()=>{
  gsap.to(window,.7,{
    scrollTo : 0
  });
});

// 순차적 visual 안의 요소를 보여줌
// 이미지 부분 그룹처리(fade--in)
const fadeEls = document.querySelectorAll('.visual .fade--in');
fadeEls.forEach(function(fadeEl, idx){
  // console.log(fadeEl, idx)
  // gsap.to(요소, 지속시간, {옵션})
  gsap.to(fadeEl, 1, {
    // idx 범위 0,1,2,3
    // 0.7, 1.4, 2.1, 2.8
    delay : (idx + 1) * .7,
    opacity : 1
  });
});

// notice swiper
const swiper = new Swiper('.notice-line .swiper', {
  direction : "vertical",
  autoplay : true,
  loop : true
});

const swiper2 = new Swiper('.promotion .swiper' ,{
  // direction: 'horizontal',
  slidesPerView: 3, // 보여줄 요소 3개
  spaceBetween: 10, // 슬라이드 사이의 여백
  centeredSlides: true, // 1번 슬라이드 가운데
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});

const swiper3 = new Swiper('.awards .swiper',{
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-button-prev',
    nextEl : '.awards .swiper-button-next'
  }
});

// 토글버튼 클릭 시 promotion 닫힘 & 열림
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.notice .toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',()=>{
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.classList.add('hide')
  } else{
    promotionEl.classList.remove('hide')
  }
});



// youtube 영역 내의 이미지 처리
// 범위 내의 숫자를 랜덤 함수(숫자 2자리까지)
function random(min, max){
  // .toFixed()를 통해 반환된 문자 데이터를 parseFloat()을 통해 소수점을 가져오는 숫자 데이터로 반환
  return parseFloat((Math.random() * (max-min) + min).toFixed(2));
}

// 유튜브 위에 이미지 추가 애니매이션 효과
// gsap 애니메이션
// gsap.to(요소, 시간, {옵션})
function floatingObjecr(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y : size,
    repeat : -1,    // 무한 반복
    yoyo : true,    // 1번 재생한 애니메이션을 다시 실행
    ease : Power1.easeInOut,    // gsap의 easing 효과
    delay : random(0, delay)
  });
};
floatingObjecr('.floating1',1, 15);
floatingObjecr('.floating2',0.5, 15);
floatingObjecr('.floating3',1.5, 20);

// scrollMagic cdn
const spyEls=document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  // Scene() 메서드를 통해서 객체들의 변화에 대한 검사
  // addTo() 메서드를 사용하기 위한 옵션 정의
  new ScrollMagic
  .Scene({
    // 보여질 여부를 검사하는 요소 지정
    triggerElement:spyEl,
    // 화면의 높이를 0에서 1이라 보고 0.8위치에 적용
    // 기능이 걸려 있는 부분(실행위치)
    triggerHook : 0.8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});
