const nav =document.querySelector('.nav-links');
const navlinks=document.querySelectorAll('.nav-links li');
const navSlide=() =>{;
    const burger =document.querySelector(".burger");
    
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navlinks.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation=``;
            }else{
    
            link.style.animation =`navLinksFade 0.5s ease forwards ${index / 7 +0.5}s`;
            }
        });
    });   
}
navSlide();
function hide(){
    const aele=document.getElementById('abouttag');
    aele.addEventListener('click',()=>{
        nav.classList.remove('nav-active');  
    });
    navlinks.forEach((link, index)=> {
        if(link.style.animation){
            link.style.animation=``;
        }else{

        link.style.animation =`navLinksFade 0.5s ease forwards ${index / 7 +0.5}s`;
        }
    });
}