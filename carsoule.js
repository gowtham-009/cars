let setposition=0;
const sliders=document.querySelectorAll('.slider-item');
const total_slider=sliders.length;
const prevbtn=document.querySelector('#prevbtn');
const nextbtn=document.querySelector('#nextbtn');

prevbtn.addEventListener('click',function(){
    prevslide();
})
nextbtn.addEventListener('click',function(){
    nextslide();
})
function updateposition(){
    sliders.forEach(slide=>{
     slide.classList.remove('active')
     slide.classList.add('hidden')
    })
    sliders[setposition].classList.add('active')
    dots.forEach(dotc=>{
        dotc.classList.remove('dot-active')
    })
    dots[setposition].classList.add('dot-active')
    
}
function prevslide(){
   if(setposition===0){
    setposition=total_slider-1
   }
   else{
    setposition--
   }
   updateposition()
}
function nextslide(){
    if(setposition===total_slider-1){
        setposition=0
      }
      else{
        setposition++
      }
      updateposition()
}
const dotcontainers=document.querySelector('.dot-navigate');
sliders.forEach(dot=>{
    const ndot=document.createElement('div');
    ndot.classList.add('dot');
    dotcontainers.appendChild(ndot)
})
const dots=document.querySelectorAll('.dot');
dots[setposition].classList.add('dot-active')

dots.forEach((dot,index)=>{
    dot.addEventListener('click',function(){
        setposition=index
        updateposition()
    })
})
setInterval(()=>{
    if(setposition===total_slider-1){
        setposition=0
    }
    else{
        setposition++
    }
    updateposition()
},5000)