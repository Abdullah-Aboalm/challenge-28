const myEmail = document.querySelector('#email');
const myBtn = document.querySelector('#btn');
const myErr = document.querySelector('#Err');

myBtn.addEventListener('click', () => {
  let Text = myEmail.value.split('');
  if (Text.length === 0) {
    myErr.style.cssText = 'display: block';
    myEmail.style.cssText = 'border-color: #f56273; outline: none';
  } else if (Text.indexOf('@') === -1 || Text.indexOf('.') === -1 || Text[Text.indexOf('@') - 1] === '.' || Text[Text.indexOf('@') + 1] === '.' || Text[Text.indexOf('@') - 1] === undefined || Text[Text.indexOf('.') + 1] === undefined) {
    myErr.style.cssText = 'display: block';
    myEmail.style.cssText = 'border-color: #f56273; outline: none';
  } else {
    myErr.style.cssText = 'display: block; color: rgb(0, 132, 255);';
    myErr.textContent = 'Thanks !';
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
})

myEmail.addEventListener('input', () => {
  myErr.style.cssText = 'display: none';
  myEmail.style.cssText = 'border-color: #cfcfcf';
})