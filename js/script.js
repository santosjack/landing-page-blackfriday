const form = document.getElementById('form-promo');

form.addEventListener('submit', e => {

  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  if (name != null && email != null){
    let userData = {
      name,
      email
    };

    userData = JSON.stringify(userData);

    localStorage.setItem('lead-data', userData);

    alert(name+ ', você irá receber as melhores ofertas da Black Friday');

    document.location.reload(true);
  }


});