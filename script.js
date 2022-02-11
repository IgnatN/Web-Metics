///////////////////////  MODAL MENU

let modalMenu = document.querySelector('.modal-menu');
let buttonModal = document.querySelector('.btn-menu');
buttonModal.addEventListener('click', () => {
  modalMenu.style.display = 'block';
  document.querySelector('.lang').style.display = 'none';
  document.querySelector('.socials').style.display = 'none'
});
document.addEventListener('mousedown', function (e) {

  if (e.target.closest('.modal-menu') === null) {
    modalMenu.style.display = 'none';
    document.querySelector('.lang').style.display = 'flex';
    document.querySelector('.socials').style.display = 'flex'
  }
});

/////////////////////// CAROUSEL
let wrapper = document.querySelector('.carousel-content');

class Block {
  constructor(img1, img2) {
    this.img1 = img1;
    this.img2 = img2
  }
  showSlides() {
    wrapper.innerHTML += ` <div class= "card"> 
                                <div class="title"> <img src="${this.img1}" alt=""></div>
                                     <div class="bigImg"><img src="${this.img2}" alt=""></div>
                              </div>`
  }
};
let slider1 = new Block('./images/imgTitle1.svg', './images/img1.png');
slider1.showSlides();
let slider2 = new Block('./images/imgTitle2.svg', './images/img2.png');
slider2.showSlides();
let slider3 = new Block('./images/imgTitle3.svg', './images/img3.png');
slider3.showSlides();
let slider4 = new Block('./images/imgTitle4.svg', './images/img4.png');
slider4.showSlides();
let slider5 = new Block('./images/imgTitle5.svg', './images/img4.png');
slider5.showSlides();
let slider6 = new Block('./images/imgTitle6.svg', './images/img4.png');
slider6.showSlides();

let slides = document.querySelectorAll('.card');
let dotsContainer = document.querySelector('.dots-wrapper');
let dots = document.querySelectorAll('.dot');
let scrollLeft = document.getElementById('scroll-left');

let offset = 0;

scrollLeft.addEventListener('click', () => {
  offset = offset + 383;
  if (offset > 1130) {
    offset = 0;
  }
  wrapper.style.left = -offset + 'px';
});

dotsContainer.addEventListener("click", e => {
  if (e.target.nodeName === "SPAN") {
    Array.from(dotsContainer.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      wrapper.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      wrapper.style.transform = "translateX(-17%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')) {
      wrapper.style.transform = 'translatex(-30%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('fourth')) {
      wrapper.style.transform = 'translatex(-45%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('fifth')) {
      wrapper.style.transform = 'translatex(-60%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('sixth')) {
      wrapper.style.transform = 'translatex(-60%)';
      e.target.classList.add('active');
    }
  }
});
let body = document.querySelector('body')
let modalCarousel = document.querySelector('.modal-carousel');
let modalInfo = document.querySelector('.modal-info');
let square = document.querySelector('.square1')
slides.forEach(card => {
  card.addEventListener('click', () => {
    modalCarousel.style.opacity = '1';
    body.style.overflow = 'hidden';
    wrapper.style.display = 'none';
    wrapper.style.transition= '0s'
    modalInfo.classList.add('modal-info-animation');
    square.classList.add('square1-animation');
    document.querySelector('.designDigital-lang').style.display='none';
    document.querySelector('.scroll-departament-socials').style.visibility ='collapse'
  })
});

slides[0].addEventListener('click', () => {
  modalCarousel.classList.add('modalBack1');
});
slides[1].addEventListener('click', () => {
  modalCarousel.classList.add('modalBack2');
});
slides[2].addEventListener('click', () => {
  modalCarousel.classList.add('modalBack3');
});
slides[3].addEventListener('click', () => {
  modalCarousel.classList.add('modalBack4');
});
slides[4].addEventListener('click', () => {
  modalCarousel.classList.add('modalBack5');
});
slides[5].addEventListener('click', () => {
  modalCarousel.classList.add('modalBack6');
});
////////////////////// REQUEST A CALL

let reqCall = document.querySelectorAll('.requestCall');
reqCall.forEach(request => {
  request.style.cursor = 'pointer';
  request.onclick = function () {
    showPrompt("We'l callback you")
  }
})
function showCover() {
  let coverDiv = document.createElement('div');
  coverDiv.id = 'cover-div';
  document.body.style.overflowY = 'hidden';
  document.body.append(coverDiv);
}

function hideCover() {
  document.getElementById('cover-div').remove();
  document.body.style.overflowY = '';
}

function showPrompt(text, callback) {
  showCover();
  let form = document.getElementById('prompt-form');
  let container = document.getElementById('prompt-form-container');
  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function () {
    let value = form.text.value;
    if (value == '') return false;
    complete(value);
    return false;
  };

  // form.cancel.onclick = function () {
  //   complete(null);
  // };

  document.onkeydown = function (e) {
    if (e.key == 'Escape') {
      complete(null);
    }
  };
  container.style.display = 'block';
}