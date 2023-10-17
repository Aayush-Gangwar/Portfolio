	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    // let darkmode = document.querySelector('#darkmode');
     
    // darkmode.onclick = () => {
    //     if(darkmode.classList.contains('bx-moon')){
    //         darkmode.classList.replace('bx-moon','bx-sun');
    //         document.body.classList.add('active');
    //     }else{
    //         darkmode.classList.replace('bx-sun','bx-moon');
    //         document.body.classList.remove('active');
    //     }
    // }

 const UpdateGames= () => {
    let portfoliosection = document.querySelector('.portfolio-content');
    portfoliosection.innerHTML="";

    // insert each game project in the portfolio section
    //1
    let div_inner = document.createElement('div');
    div_inner.className ="portfolio-img"
    // <a href="https://github.com/Aayush-Gangwar/Living-Dead-Fps_3d_shooting-game" style="padding-right:10%;"  target="_blank"><i class="fab fa-github"></i></a>
    div_inner.innerHTML =`
    <img src="./image/living dead.png" alt="">
    <div class="github-button">
    <a href="https://aayush21.itch.io/living-dead" target="_blank"><i class="fas fa-eye"></i></a>`
     portfoliosection.appendChild(div_inner);
    let p = document.createElement('p');
    p.style.textAlign  = 'center';
    p.innerHTML="<b>Living Dead</b> <br> 3D FPS GAME";
    div_inner.appendChild(p);

    //2
    let div_inner3 = document.createElement('div');
    div_inner3.className ="portfolio-img"
    div_inner3.innerHTML =`
    <img src="./image/beatshift.png" alt="">
    <div class="github-button">
    <a href="https://aayush21.itch.io/beat-shift" target="_blank"><i class="fas fa-eye"></i></a>`
    portfoliosection.appendChild(div_inner3);
    let p3 = document.createElement('p');
    p3.style.textAlign  = 'center';
    p3.innerHTML="<b>Beat Shift</b> <br>2D Ball Shifting Game on Beats";
    div_inner3.appendChild(p3);

    //3
    let div_inner2 = document.createElement('div');
    div_inner2.className ="portfolio-img"
    div_inner2.innerHTML =`
    <img src="./image/citydrive.png" alt="">
    <div class="github-button">
    <a href="https://aayush21.itch.io/city-drive" target="_blank"><i class="fas fa-eye"></i></a>`
    portfoliosection.appendChild(div_inner2);
    let p2 = document.createElement('p');
    p2.style.textAlign  = 'center';
    p2.innerHTML="<b>City Drive</b> <br>3D Driving Game";
    div_inner2.appendChild(p2);

    //4 
    let div_inner4 = document.createElement('div');
    div_inner4.className ="portfolio-img"
    div_inner4.innerHTML =`
    <img src="./image/cube.png" alt="">
    <div class="github-button">
    <a href="https://aayush21.itch.io/cube-runner" target="_blank"><i class="fas fa-eye"></i></a>`
    portfoliosection.appendChild(div_inner4);
    let p4 = document.createElement('p');
    p4.style.textAlign  = 'center';
    p4.innerHTML="<b>Cube Runner</b> <br>3D Game";
    div_inner4.appendChild(p4);
 }


 const UpdateWeb= () => {
    let portfoliosection = document.querySelector('.portfolio-content');
    portfoliosection.innerHTML="";
        // insert each game project in the portfolio section
    //1
    let div_inner = document.createElement('div');
    div_inner.className ="portfolio-img"
    
    div_inner.innerHTML =`
    <img src="./image/VA.png" alt="">
    <div class="github-button">
    <a href="https://github.com/Aayush-Gangwar/Voice_Assistant" target="_blank"><i class="fab fa-github"></i></a>
    `
    portfoliosection.appendChild(div_inner);
    let p = document.createElement('p');
    p.style.textAlign  = 'center';
    p.innerHTML="<b>Voice Assistant</b> <br>Python Based Voice Assistant";
    div_inner.appendChild(p);

    //2
    let div_inner3 = document.createElement('div');
    div_inner3.className ="portfolio-img"
    div_inner3.innerHTML =`
    <img src="./image/plagiarism_checker.png" alt="">
    <div class="github-button">
    <a href="https://github.com/Aayush-Gangwar/Plagiarism-Detector" target="_blank"><i class="fab fa-github"></i></a>`
    portfoliosection.appendChild(div_inner3);
    let p3 = document.createElement('p');
    p3.style.textAlign  = 'center';
    p3.innerHTML="<b>Plagiarism Checker</b> <br>Web App to check Plagiarism";
    div_inner3.appendChild(p3);

    //3
    let div_inner4 = document.createElement('div');
    div_inner4.className ="portfolio-img"
    div_inner4.innerHTML =`
    <img src="./image/circuit-simulator.png" alt="">
    <div class="github-button">
    <a href="https://github.com/Aayush-Gangwar/Combinational-circuit-simulator" style="padding-right:10%;" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://aayush-gangwar-combinational-circuit-simulator-app-bm52bv.streamlit.app/" target="_blank"><i class="fas fa-eye"></i></a>`
    portfoliosection.appendChild(div_inner4);
    let p4 = document.createElement('p');
    p4.style.textAlign  = 'center';
    p4.innerHTML="<b>Combinational Circuit Simulator</b> <br>Web Circuit Simulator";
    div_inner4.appendChild(p4);

    //4 
    let div_inner2 = document.createElement('div');
    div_inner2.className ="portfolio-img"
    div_inner2.innerHTML =`
    <img src="./image/cal.png" alt="">
    <div class="github-button">
    <a href="https://github.com/Aayush-Gangwar/Basic-Calculator" target="_blank"><i class="fab fa-github"></i></a>`
    portfoliosection.appendChild(div_inner2);
    let p2 = document.createElement('p');
    p2.style.textAlign  = 'center';
    p2.innerHTML="<b>Calculator</b> <br>A simple android calculator";
    div_inner2.appendChild(p2);
 }

 const UpdateML= () => {
    let portfoliosection = document.querySelector('.portfolio-content');
    portfoliosection.innerHTML="";
        // insert each game project in the portfolio section
    //1
    let div_inner = document.createElement('div');
    div_inner.className ="portfolio-img"
    
    div_inner.innerHTML =`
    <img src="./image/ser.png" alt="">
    <div class="github-button">
    <a href="https://github.com/Aayush-Gangwar/Speech-Emotion-Recognition" style="padding-right:10%;" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://11happy-prml-course-project-app-87l83l.streamlit.app/" target="_blank"><i class="fas fa-eye"></i></a>
    `
    portfoliosection.appendChild(div_inner);
    let p = document.createElement('p');
    p.style.textAlign  = 'center';
    p.innerHTML="<b>Speech Emotion Recognition</b> <br>Detect emotions from the speech.";
    div_inner.appendChild(p);

    //2
    let div_inner3 = document.createElement('div');
    div_inner3.className ="portfolio-img"
    div_inner3.innerHTML =`
    <img src="./image/personality_prediction.jpg" alt="">
    <div class="github-button">
    <a href="https://github.com/Aayush-Gangwar/Personality-Prediction" target="_blank"><i class="fab fa-github"></i></a>`
    portfoliosection.appendChild(div_inner3);
    let p3 = document.createElement('p');
    p3.style.textAlign  = 'center';
    p3.innerHTML="<b>Personality Prediction</b> <br>Personality descriptors based on social media posts";
    div_inner3.appendChild(p3);

    //3
    let div_inner4 = document.createElement('div');
    div_inner4.className ="portfolio-img"
    div_inner4.innerHTML =`
    <img src="./image/facemaskdetection.jpg" alt="">
    <div class="github-button">
    <a href="https://github.com/Aayush-Gangwar/Face-Mask-Detection"  target="_blank"><i class="fab fa-github"></i></a>`
    portfoliosection.appendChild(div_inner4);
    let p4 = document.createElement('p');
    p4.style.textAlign  = 'center';
    p4.innerHTML="<b>Face Mask Detection</b> <br>Mask Presence Analyzer";
    div_inner4.appendChild(p4);
 }




 function xyz(){
 const buttons = document.querySelectorAll('.button');
 function changeButtonColor(event) {
  buttons.forEach(button => {
              button.style.backgroundColor = '';
              button.disabled = false;
              button.style.color = '#007bff';
          });
          event.target.disabled = true;
          event.target.style.backgroundColor = '#007bff';
          event.target.style.color = "white";
      }
      buttons.forEach(button => {
          button.addEventListener('click', changeButtonColor);
      });
    }

xyz();
document.getElementById("game").click();


const html = `<div class="portfolio-content">
<div class="portfolio-img">
    <img src="blog-2.jpg" alt="">
    <p style="text-align: center;">Project 1</p>
</div>
<div class="portfolio-img">
    <img src="blog-3.jpg" alt="">
    <div class="github-button">
      <a href="https://github.com/your-repo-link" style="padding-right:10%;"  target="_blank"><i class="fab fa-github"></i></a>
  <!-- </div>
  <div class="live-demo-button"> -->
    <a href="https://github.com/your-repo-link" target="_blank"><i class="fas fa-eye"></i></a>
</div>
    <p style="text-align: center;">Project 1</p>
</div>
<div class="portfolio-img">
    <img src="blog-4.jpg" alt="">
</div>
<div class="portfolio-img">
    <img src="blog-5.jpg" alt="">
</div>
<div class="portfolio-img">
    <img src="blog-6.jpg" alt="">
</div>
<div class="portfolio-img">
    <img src="blog-7.jpg" alt="">
</div>

</div>
</section>`