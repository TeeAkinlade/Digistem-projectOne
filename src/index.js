const menu = document.querySelector('ul')
const openIcon = document.querySelector('.openIcon')
const closeIcon = document.querySelector('.closeIcon')
const enrolBtn = document.querySelector('.btn1')


openIcon.addEventListener('click', () =>{
    menu.style.display ='block';
    closeIcon.style.display = "block";
    enrolBtn.style.display = "block";
})
closeIcon.addEventListener('click', () =>{
  menu.style.display ='none';
});