// //your JS code here. If required.

let circle=document.querySelectorAll(".circle");
let line=document.querySelectorAll(".line");

let next=document.querySelector("#next");
let prev=document.querySelector("#prev");

let value=1;

next.addEventListener("click",()=>{
	value++;
	
	if(value>circle.length) value=circle.length;

	
	
	if(value==circle.length){
		next.disabled=true;
	}
	if(value!=1) prev.disabled=false;

	ui_update();
});

prev.addEventListener("click",()=>{
	value--;
	if(value<=0) value=1;

	
	
	if(value==1){
		prev.disabled=true;
	}
	else next.disabled=false;

	ui_update();
});

 
function ui_update() {

	for(let i=1;i<=circle.length;i++){
		if(i<=value)
		circle[i-1].classList.add("active");
		else circle[i-1].classList.remove("active");
	}
	
		
	// }
	for(let i=1;i<=line.length;i++){
		if(i<=value-1)
		line[i-1].classList.add("active");
		else line[i-1].classList.remove("active");
	}
	
	
}

// function ui_update() {

// 	for(let i=1;i<=value;i++){
// 		circle[i-1].classList.add("active");
// 	}
// 	for(let i=1;i<value;i++){
// 		line[i-1].classList.add("active");
// 	}
	
// }









// const circles=document.querySelectorAll('.circle')
// const lines=document.querySelectorAll('.line')
// const prevbutton=document.querySelector('#prev')
// const nextbutton=document.querySelector('#next')


//   let curr=1
// nextbutton.addEventListener('click',()=>{
//     curr++
//         if(curr>=circles.length){
//             curr=circles.length
//         }

//         ui_update()
//   console.log(curr)

// })

// prevbutton.addEventListener('click', (event) => {
//     curr--;
//     if (curr <= 1) {
//         curr = 1;
//     }
//    ui_update()

//     console.log(curr);
// });

// function ui_update(){
//      circles.forEach((circle,index) => {
//         if(index<curr){
//             circle.classList.add('active');
//         }
//         else {
//           circle.classList.remove('active');
//         }
        
//     });

//     lines.forEach((line,index) => {
//         if(index<curr-1){
//             line.classList.add('active');
//         }
//         else {
        
//              line.classList.remove('active');
//         }
        
//     });

// if(curr>1){
//     prevbutton.disabled=false;
// }

// }

