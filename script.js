let circles
const button = document.querySelector('#submit');


function createCircles () {
  let numbersDiv = document.getElementById('numbers');
  
  for(let i = 1; i <= 5; i++) {
    let tempDiv = document.createElement('div')
    tempDiv.classList.add('circle')
    tempDiv.addEventListener('click', function() {
      changeColor(tempDiv)
    })
    
    tempDiv.innerHTML = i;
    numbersDiv.appendChild(tempDiv);
    
    
  }
   circles = document.querySelectorAll('.circle');
//console.log(circles)
}
//console.log(circles)
// function grabButton(n) {
//   //console.log(n)
// }


//why wasn't changeColor function working?

//circles.forEach(circle => //
 // console.log(circle)
  //circle.addEventListener('click', () => {
  //  console.log(circle)
  //circle.classList.add('clickCircle');
//});

//);

//adds a class to change background color of selected number
function changeColor(el) {

    checkFunc()
 // console.log(el)
  el.classList.add('clickCircle');
  
 
  

}

//checks to see if an element already has the clickCircle background color and then removes the previous click
// let number = 
function checkFunc() {
 // console.log(circles)
 //could I use forEach here instead? 
 
   for(let i = 0; i < circles.length; i++) {
    circles[i].classList.remove('clickCircle');
 // }
}
//return counter
}
//i thought this would return the value of counter
 //console.log(counter) 




button.addEventListener('click', function () {
 let answer = document.querySelector('.clickCircle').innerHTML

  document.getElementById('number').innerHTML = answer;
  document.getElementById('card').style.display = 'none';
  document.getElementById('card2').style.display = 'flex';
});

document.onload = createCircles()