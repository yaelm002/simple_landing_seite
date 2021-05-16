

document.querySelector('.item1').addEventListener('click', slider);
document.querySelector('.item2').addEventListener('click', slider);
document.querySelector('.item3').addEventListener('click', slider);


function slider(e){
  document.querySelector('.schuhe').src = e.target.src;
  e.preventDefault();

}