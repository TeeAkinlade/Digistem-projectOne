const menu = document.querySelector('ul');
const openIcon = document.querySelector('.openIcon');
const closeIcon = document.querySelector('.closeIcon');


openIcon.addEventListener('click', () =>{
    menu.style.display ='block';
    closeIcon.style.display = "block";
})
closeIcon.addEventListener('click', () =>{
  menu.style.display ='none';
});