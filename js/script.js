document.addEventListener('DOMContentLoaded', function () {

  // inputmask - Телефон
  const form = document.querySelector('.form');
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);

  new window.JustValidate('.form', {
    rules: {
      tel: {
        required: true,
        function: () => {
          const phone = telSelector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      }
    },
    colorWrong: '#ff0f0f',
    messages: {
      name: {
        required: 'Введите имя',
        minLength: 'Введите 3 и более символов',
        maxLength: 'Запрещено вводить более 15 символов'
      },
      tel: {
        required: 'Введите телефон',
        function: 'Здесь должно 10 симв.. без +7'
      },
      email: {
        email: 'Введите корректный email',
        required: 'Введите email'
      },      
      message: {
        required: 'Введите сообщение',
        minLength: 'Введите 5 и более символов',
        maxLength: 'Запрещено вводить более 1005 символов'
      }
    },

    submitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }


          
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      thisForm.reset();
    }
  })

});
