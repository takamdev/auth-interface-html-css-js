let section = document.querySelector('section')
let up = document.querySelector('.up')
let In = document.querySelector('.in')
let p = document.querySelector('section p')
let h1 = document.querySelector('section h1')
let positionSection =-400;
In.addEventListener('click',()=>{
   if(positionSection===(-400)){
    section.style.transform='translateX(400px)'
    positionSection=400;
    up.style.zIndex = '100';
    section.classList.add('borduVd')
    section.classList.remove('borduVg')
   
    h1.textContent='Hello , Freind'
    p.innerHTML ='<span>register with your personnal tetaills to use oll sites <br/> of the  feauture</span>'


   }
    

})




up.addEventListener('click',()=>{

    if(positionSection===(400)){
        section.style.transform='translateX(0)'
        positionSection=-400;
        up.style.zIndex = '-100';
        section.classList.remove('borduVd')
        section.classList.add('borduVg')
        h1.textContent='Welcome Back!'
        p.innerHTML ='<span>enter your personnal details to use oll  of site <br/>  feautures</span>'
    
    
    
    
       }

})