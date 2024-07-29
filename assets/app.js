AOS.init();
const btn = document.getElementById('start'),
contianer = document.querySelectorAll('.contianer'),
next = document.getElementById('next')

btn.addEventListener('click' , ()=>{
   contianer[0].classList.add('contianerkoOff');
   contianer[0].classList.remove('container');
   contianer[1].classList.add('containers');
   contianer[1].classList.remove('secondContainer')
})

next.addEventListener('click' , ()=>{
    contianer[1].classList.add('secondContainer');
    contianer[1].classList.remove('container')
    Swal.fire({
        title: "Your Game Is Now Starting",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      })
      playground()
      window.location.reload()
})








  
    function startTimer() {
        let duration = 3 * 60; 
        let timerDisplay = document.getElementById('time');
        let minutes, seconds;
    
        let interval = setInterval(() => {
            minutes = Math.floor(duration / 60);
            seconds = duration % 60;
    
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
    
            timerDisplay.textContent = minutes + ':' + seconds;
    
            if (--duration < 0) {
                clearInterval(interval);
                Swal.fire({
                  title: "Times Up",
                  text: `The Game is over your total points are ${points}`,
                  icon: "warning",
                  showCancelButton: false,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                  }
                });
            }
        }, 1000);
    }

    startTimer()
    

    function playground() {
      let playGroundArea = document.getElementById('playGround');
      let ClientHeight = playGroundArea.clientHeight;
      let ClientWidth = playGroundArea.clientWidth;
  
      let points = 1;
  
      // Function to create a heart icon
      function createHeart() {
          let randomX = Math.floor(Math.random() * ClientWidth);
          let randomY = Math.floor(Math.random() * ClientHeight);
  
          let heartIcon = document.createElement('i');
          heartIcon.className = 'fa-solid fa-heart icon';
          heartIcon.classList.add('icon')
          heartIcon.style = `color: red; font-size: 30px; position: absolute; left: ${randomX}px; top: ${randomY}px;`;
  
          playGroundArea.appendChild(heartIcon);
  
          heartIcon.addEventListener('click', () => {
              let crackedHeartIcon = document.createElement('i');
              crackedHeartIcon.className = 'fa-solid fa-heart-crack';
              crackedHeartIcon.style = `color: red; font-size: 30px; position: absolute; left: ${randomX}px; top: ${randomY}px; opacity: 0.5;`;
  
              playGroundArea.replaceChild(crackedHeartIcon, heartIcon);
  
              setTimeout(() => {
                  playGroundArea.removeChild(crackedHeartIcon);
              }, 1000);
  
              let pointsWrite = document.getElementById('points');
              pointsWrite.innerHTML = `${points++}`;
          });
      }
  
      // Function to create a bomb icon
      function createBomb() {
          let randomX = Math.floor(Math.random() * ClientWidth);
          let randomY = Math.floor(Math.random() * ClientHeight);
  
          let bombIcon = document.createElement('i');
          bombIcon.className = 'fa-solid fa-bomb icon';
          bombIcon.style = `color: red; font-size: 30px; position: absolute; left: ${randomX}px; top: ${randomY}px;`;
  
          playGroundArea.appendChild(bombIcon);
  
          bombIcon.addEventListener('click', () => {
            Swal.fire({
                          title: "Oops!",
                          text: "You Lost ! You Clicked The Bomb",
                          icon: "error",
                          showCancelButton: false,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Restart Game"
                        }).then((result) => {
                            if (result.isConfirmed) {
                            window.location.href = 'index.html'
                          }
                        });
          });
      }
  
      setInterval(createHeart, 1000);

      setInterval(createBomb, 6000);
  }
  


playground()
