//clickme dom element
var clickMeDiv = document.querySelector('.click-me');

clickMeDiv.textContent = 'Click me now!';

function toggleClass() {

  var containsClass = clickMeDiv.classList.contains('toggled');
  console.log(containsClass);

  if (containsClass === false) {
    clickMeDiv.classList.add('toggled');
  }
  else {
    clickMeDiv.classList.remove('toggled');
  }

    //clickMeDiv.classList.add('toggled');

}


clickMeDiv.addEventListener('click', toggleClass);

//toggleClass();

//console.log(clickMeDiv);
