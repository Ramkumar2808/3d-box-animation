const box = document.querySelector('.box');
const radioGroup = document.querySelector('.radio-group');
let currentClass = '';

radioGroup.addEventListener('change', () => {
  const checkedRadio = document.querySelector(':checked');
  const showClass = 'show-' + checkedRadio.value;
  if (currentClass) {
    box.classList.remove(currentClass);
  }
  box.classList.add(showClass);
  currentClass = showClass;
});
