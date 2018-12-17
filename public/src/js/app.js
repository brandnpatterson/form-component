import axios from 'axios';
import coriander from 'coriander';

const req = '/api/v1/submissions';

const $form = document.querySelector('.form');
const $buttonRequest = document.querySelector('.button-request');

coriander($form, {
  onChange: true,
  onSubmit(data) {
    const namesObj = {};

    data.inputs.forEach(input => {
      if (input.type === 'radio') {
        namesObj[input.name] = input.nextElementSibling.textContent;
      } else {
        namesObj[input.name] = input.value;
      }
    });

    axios
      .post(req, namesObj)
      .then(() => {
        data.inputs.forEach(input => {
          input.value = '';
          input.checked = false;
        });
      })
      .catch(err => {
        window.scrollTo(0, 0);

        data.inputs.forEach(input => {
          if (input.name === 'email') {
            input.nextElementSibling.textContent = err.response.data.error;
          }
        });
      });
  }
});

$buttonRequest.addEventListener('click', () => {
  axios.get(req).then(req => {
    const $catData = document.querySelector('#cat-data');
    const $dogData = document.querySelector('#dog-data');

    $catData.innerHTML = '';
    $dogData.innerHTML = '';

    req.data.map(person => {
      const catItem = document.createElement('li');
      const dogItem = document.createElement('li');

      catItem.innerHTML = `<li class="item-request">${person.name} said ${
        person.cat
      }!</li>`;
      dogItem.innerHTML = `<li class="item-request">${person.name} said ${
        person.dog
      }!</li>`;

      $catData.appendChild(catItem);
      $dogData.appendChild(dogItem);
    });
  });
});
