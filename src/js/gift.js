const gift = document.querySelector('.gift');
const lid = document.querySelector('.gift__header');
const content = document.querySelector('.gift__content');

const modal = document.querySelector('.gift-modal');
const modalText = document.querySelector('.gift-modal__text');
const modalImg = document.querySelector('.gift-modal__img-box');

const giftArray = [
  {name:"Річна зарплата.", nameImg:"01.png"},
  {name:"Карманна зброя Алабай Mini v2.0.", nameImg:"02.png"},
  {name:"Одеське повітря в пакеті.", nameImg:"03.png"},
  {name:"??? Вітю?", nameImg:"04.png"},
  {name:"Карманна зброя Алабай v.Pro Max", nameImg:"05.png"},
]

const thisGift = giftArray[randomNum(0, giftArray.length - 1)];
content.style.background = `url(../img/giftPage/gifts/${thisGift.nameImg})`;
content.style.backgroundSize = 'cover';
content.style.backgroundPosition = 'center';

modalText.textContent = thisGift.name;
modalImg.style.background = `url(../img/giftPage/gifts/${thisGift.nameImg})`;
modalImg.style.backgroundSize = 'cover';
modalImg.style.backgroundPosition = 'center';
modalImg.style.backgroundRepeat = 'no-repeat';

let isLidOpen = false;
let timeoutId;

// 

gift.addEventListener('mousedown', () => {
  if(isLidOpen){
    closeLid();
  } else {
    openLid();
    setTimeout(() => {
      showModal();
    }, 1700);
  }
    
});

modal.addEventListener('mousedown', () => {
  modal.style.display = 'none';
});

function showModal() {
  // Код для відображення модального вікна
  modal.style.display = 'flex';
}

function openLid() {
      if (!isLidOpen) {
          lid.style.transform = 'translate(-12px,-230px)';
          content.style.transform = 'translateY(-230px)';
          isLidOpen = true;
      }
  }
  
  function closeLid() {
      lid.style.transform = 'translate(-12px,0)';
      content.style.transform = 'translateY(0)';
      isLidOpen = false;
  }

  function randomNum(min = 0, max = 1000) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }