const btn = document.getElementById('start'),
contianer = document.querySelectorAll('.contianer'),
next = document.getElementById('next')

btn.addEventListener('click' , ()=>{
   contianer[0].classList.add('contianerkoOff');
   contianer[0].classList.remove('container');
})

next.addEventListener('click' , ()=>{
    console.log('click howa');
})