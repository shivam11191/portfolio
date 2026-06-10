
// PRELOADER

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("preloader-hide");
    }, 1200);

});

// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';
    }

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});

// TYPING EFFECT

const typingElement =
document.getElementById("typing-text");

const words = [
    "Frontend Developer",
    "Data Analyst",
    "Dashboard Creator",
    "MCA Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    }else{

        typingElement.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex === words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// SCROLL REVEAL

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(element=>{
    revealObserver.observe(element);
});

// SKILL BAR ANIMATION

const skillCards =
document.querySelectorAll(".skill-card");

const skillObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bars =
            entry.target.querySelectorAll(".progress-bar");

            bars.forEach(bar=>{

                const finalWidth =
                getComputedStyle(bar).width;

                bar.style.width = "0";

                setTimeout(()=>{
                    bar.style.width = finalWidth;
                },200);

            });

        }

    });

},{
    threshold:0.4
});

skillCards.forEach(card=>{
    skillObserver.observe(card);
});

// ACTIVE NAVBAR LINK

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 200;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop){

            current =
            section.getAttribute("id");
        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active-link");

        if(
            link.getAttribute("href")
            === `#${current}`
        ){
            link.classList.add("active-link");
        }

    });

});

// BACK TO TOP BUTTON

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", ()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// PARTICLE BACKGROUND

const particleContainer =
document.getElementById("particles");

function createParticles(){

    for(let i=0;i<80;i++){

        const particle =
        document.createElement("span");

        const size =
        Math.random() * 4 + 1;

        particle.style.width =
        size + "px";

        particle.style.height =
        size + "px";

        particle.style.left =
        Math.random() * 100 + "%";

        particle.style.top =
        Math.random() * 100 + "%";

        particle.style.position =
        "absolute";

        particle.style.borderRadius =
        "50%";

        particle.style.background =
        "rgba(212,175,55,.8)";

        particle.style.boxShadow =
        "0 0 10px rgba(212,175,55,.8)";

        particle.style.animation =
        `floatParticle ${
            Math.random() * 10 + 8
        }s linear infinite`;

        particle.style.animationDelay =
        `${Math.random() * 10}s`;

        particleContainer.appendChild(
            particle
        );
    }

}

createParticles();

// PARTICLE KEYFRAME

const style =
document.createElement("style");

style.innerHTML = `

@keyframes floatParticle{

    0%{
        transform:
        translateY(0px);
        opacity:0;
    }

    20%{
        opacity:1;
    }

    100%{
        transform:
        translateY(-300px);
        opacity:0;
    }

}

.active-link{
    color:#d4af37 !important;
}

`;

document.head.appendChild(style);

// HERO PARALLAX EFFECT

const heroImage =
document.querySelector(".hero-image");

document.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth / 2 - e.pageX)
    / 40;

    const y =
    (window.innerHeight / 2 - e.pageY)
    / 40;

    heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});

// PROJECT CARD HOVER TILT

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        (x - rect.width/2) / 20;

        const rotateX =
        -(y - rect.height/2) / 20;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

// SMOOTH APPEARANCE

document.body.style.opacity = "0";

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.body.style.transition =
        "opacity 1s ease";

        document.body.style.opacity = "1";

    },300);

});

// CURRENT YEAR FOOTER

const footer =
document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Shivam Prakash | Frontend Developer & Data Analyst`;

}