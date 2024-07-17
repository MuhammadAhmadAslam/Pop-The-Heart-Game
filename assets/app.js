AOS.init();
// const btn = document.getElementById('start'),
// contianer = document.querySelectorAll('.contianer'),
// next = document.getElementById('next')

// btn.addEventListener('click' , ()=>{
//    contianer[0].classList.add('contianerkoOff');
//    contianer[0].classList.remove('container');
//    contianer[1].classList.add('containers');
//    contianer[1].classList.remove('secondContainer')
// })

// next.addEventListener('click' , ()=>{
//     contianer[1].classList.add('secondContainer');
//     contianer[1].classList.remove('container')
//     Swal.fire({
//         title: "Your Game Is Now Starting",
//         showClass: {
//           popup: `
//             animate__animated
//             animate__fadeInUp
//             animate__faster
//           `
//         },
//         hideClass: {
//           popup: `
//             animate__animated
//             animate__fadeOutDown
//             animate__faster
//           `
//         }
//       });
// })

var playground = () => {
    let playGroundArea = document.getElementById('playGround');
    let ClientHeight = playGroundArea.clientHeight;
    let ClientWidth = playGroundArea.clientWidth;
    
    let points = 1;


    setInterval(() => {
        let randomX = Math.floor(Math.random()*ClientWidth);
    let randomY = Math.floor(Math.random()*ClientHeight);

        playGroundArea.innerHTML += `<i class="fa-solid fa-heart icon"  style="color: red; font-size: 30px; position: absolute; left: ${randomX}px; top: ${randomY}px;"></i>;`
        let icon = document.getElementsByClassName('icon')
            for (const ic of icon) {
                ic.addEventListener('click' , ()=>{
                    playGroundArea.removeChild(ic)
                    console.log(true);
                    let pointsWrite = document.getElementById('points')
                    pointsWrite.innerHTML = `${points++}`
                })
            }
    }, 1000);



    function startTimer() {
        let duration = 60 * 60; // 3 minutes in seconds
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
                    title: "Times UP",
                    text : `Your Score is ${points}`,
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
                  });
                  window.location.reload()
            }
        }, 1000);
    }

    startTimer()
    
}

playground()
