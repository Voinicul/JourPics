//let httpApi = new HttpApi();


//am creat clasa User
class User {
  constructor(name, email,password) {
      this.name = name;
      this.email = email;
      this.password = password;
  }
} 


//am creat functia de inregistrare pe site
function register(event) {

  const name = $('#name').val();
  const email = $('#email').val();
  const password = $('#password').val();

  let user = new User(name, email, password);
  httpApi.register(user);

  event.preventDefault();
}

//am creat functia de logare pe site
function login(event) {

  const email = $('#email').val();
  const password = $('#password').val();

  let user = new User('', email, password);
  httpApi.login(user);

  event.preventDefault();
}

//