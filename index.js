let bar = document.querySelector('.bar')
let topBtn = document.querySelector('.topBtn')
let btn = document.querySelector('.topBtn i')
let contactBtn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn a')
let nav = document.querySelector('nav ul')
let readMoreBtn = document.querySelector('.buttons .btn');
let textDiv = document.querySelector('.left .text');
let paragraph = document.querySelector('.left p');

bar.addEventListener('click',()=>{
    bar.classList.toggle('active')
    nav.classList.toggle('active')
})

topBtn.addEventListener('click',()=>{
    btn.click()
})
contactBtn.addEventListener('click',()=>{
    btn2.click()
})

// Logic for "Read more" button
// readMoreBtn.addEventListener('click', () => {
//   paragraph.classList.toggle('expanded');
//   if (paragraph.classList.contains('expanded')) {
//       readMoreBtn.textContent = 'Read less';
//       paragraph.style.maxHeight = 'none'; // Allow full expansion
//   } else {
//       readMoreBtn.textContent = 'Read more';
//       paragraph.style.maxHeight = '100px'; // Adjust to desired collapsed height
//   }
// });

document.querySelector('.read-more').addEventListener('click', function () {
  const moreText = document.querySelector('.more-text');
  const btn = this;

  if (moreText.classList.contains('hidden')) {
      moreText.classList.remove('hidden');
      btn.textContent = 'Read less';
  } else {
      moreText.classList.add('hidden');
      btn.textContent = 'Read more';
  }
});


var options = {
    strings: ['ASP .Net Developer', '.Net MAUI Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  };
  
  var typed = new Typed('.typing1', options);
  var typed = new Typed('.typing2', options);

  ScrollOut({
    targets: '.img, .aboutText , .box, div.left, div.right'
  })
  ScrollOut({
    targets: '.header',
    offset: 50
  })


