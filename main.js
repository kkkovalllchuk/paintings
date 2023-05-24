// отримуємо доступ до полів вводу за їх id
const nameInput = document.getElementById('name-input');
const phoneNumberInput = document.getElementById('phone-number-input');

// отримуємо доступ до кнопки для відправки форми
const submitButton = document.getElementById('submit-button');

// додаємо обробник події на кнопку
submitButton?.addEventListener('click', function(event) {
  event.preventDefault(); // перешкоджаємо дефолтному поведінці кнопки
  
  // отримуємо значення полів вводу
  const nameValue = nameInput.value;
  const phoneNumberValue = phoneNumberInput.value;
  
  // визначаємо патерни для імені та номеру телефону
  const namePattern = /^[a-zA-Zа-яА-Я ]+$/; // дозволено тільки літери кирилиці та латини
  const phoneNumberPattern = /^\+?[0-9]{7,14}$/; // дозволено тільки цифри, можливий плюс на початку

  // перевіряємо, чи відповідає ім'я та номер телефону заданим патернам
  if (namePattern?.test(nameValue) && phoneNumberPattern?.test(phoneNumberValue)) {
    alert('Дані введено правильно!');
  } else {
    alert('Неправильно введені дані.');
  }
});




const thirtyPage__social = document.querySelector('.thirtyPage__social');
thirtyPage__social?.addEventListener("mousemove", function() {
  document.querySelector('.tooltip_telegram').style.display = "block"
});

thirtyPage__social?.addEventListener("mouseout", function() {
  document.querySelector('.tooltip_telegram').style.display = "none"
  document.querySelector('.tooltip_linkedin').style.display = "none"
});

