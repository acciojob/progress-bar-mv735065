//your JS code here. If required.
const circles=document.querySelectorAll('.circle')
const lines=document.querySelectorAll('.line')
const prevbutton=document.querySelector('#prev')
const nextbutton=document.querySelector('#next')


  let curr=1
nextbutton.addEventListener('click',()=>{
    curr++
        if(curr>=circles.length){
            curr=circles.length
        }

        ui_update()
  console.log(curr)

})

prevbutton.addEventListener('click', (event) => {
    curr--;
    if (curr <= 1) {
        curr = 1;
    }
   ui_update()

    console.log(curr);
});

function ui_update(){
     circles.forEach((circle,index) => {
        if(index<curr){
            circle.classList.add('active');
        }
        else {
          circle.classList.remove('active');
        }
        
    });

    lines.forEach((line,index) => {
        if(index<curr-1){
            line.classList.add('active');
        }
        else {
        
             line.classList.remove('active');
        }
        
    });

if(curr>1){
    prevbutton.disabled=false;
}

}

