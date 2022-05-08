const   intro = document.querySelector('.intro'),
        logoSpanLeft = document.querySelector('.logo-left'),
        logoSpanMid = document.querySelector('.logo-mid'),
        logoSpanRight = document.querySelector('.logo-right');


window.addEventListener('DOMContentLoaded', () => {

    intro.style.backgroundColor = '#161616';

    setTimeout(()=>{

        logoSpanLeft.classList.add('active');
        setTimeout(()=>{
            logoSpanMid.classList.add('active');
        }, 400)
        setTimeout(()=>{
            logoSpanRight.classList.add('active');
        }, 400)


        setTimeout(()=>{

            logoSpanRight.classList.remove('active');
            logoSpanRight.classList.add('fade');

            setTimeout(()=>{
                logoSpanMid.classList.remove('active');
                logoSpanMid.classList.add('fade');
            }, 50)

            setTimeout(()=>{
                logoSpanLeft.classList.remove('active');
                logoSpanLeft.classList.add('fade');
            }, 100)
            
        }, 1500)

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2000)
        
    }, 1000)
    
})