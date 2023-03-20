const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = 'It was a snowy winter night when Bob checked the thermostate to see that it was a chilly 0 Fahrenheit outside. "There must be 1000 pounds of snow out there!" they thought to themself as they looked out the window. They were supposed to go with :insertx: to :inserty: tonight, but they were worried that they would :insertz:! ';
let insertX = ['the woodland fairies','their best friend Larry','Santa Claus'];
let insertY = ['the craziest party of the year','the movie theatre','a music concert for their favorite band'];
let insertZ = ['get snowed in and be trapped in the house','freeze to death if they went outside','get lost in the snow storm and not be able to find their way back'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:',xItem).replace(':insertx:',xItem).replace(':inserty:',yItem).replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory =  newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.07).toString() + ' stone';
    let temperature =  Math.round((94-32)/1.8).toString() + ' Centigrade';
    newStory =  newStory.replace('0 Fahrenheit',temperature).replace('1000 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);
