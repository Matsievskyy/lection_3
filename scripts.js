
const convert = document.getElementById('convert');
const input = document.getElementById('input');
const title = document.getElementById('title');
const error = document.getElementById('error');
const animation = document.getElementsByClassName('animation')[0];
const mainBlock = document.getElementsByClassName('main-block')[0];

convert.addEventListener('click', function(){

  if(isNaN(input.value) || input.value === '') {
    console.log('Not a number');
    error.innerHTML = 'Must be a number!';
    animation.classList.add('show');

  } else {
    const freezingWater = 32;
    const someConst = 1.8;
    mainBlock.classList.add('load');
    setTimeout(function(){
      if (title.innerText.toLocaleLowerCase() === 'fahrenheit') {
        let celsiusDegree = (input.value - freezingWater) / someConst;
        title.innerHTML = 'celsius';
        input.value = celsiusDegree.toFixed();
      } else {
        let fahrenheitDegree = input.value * someConst + freezingWater;
        input.value = fahrenheitDegree.toFixed();
        title.innerHTML = 'fahrenheit';
      }
      mainBlock.classList.remove('load');
    }, 2000);
  }


})


