class HttpApi {

    USER_API = "https://615f299cf7254d0017067fe5.mockapi.io/user";


    //am creat metoda de inregistrare pe site
    register(user) {
        $.ajax({
            url: this.USER_API,
            type: 'POST',
            dataType: 'json',
            data: user
        }).done(function (response) {
            if (response.id) {
                $('.user-success').show();
            }
        })
    }

    //am creat metoda de logare pe site

    login(user) {
        $.ajax({
            url: `${this.USER_API}?email=${user.email}`,
            type: 'GET',
            dataType: 'json'
        }).done(function (response) {

            if (response.length === 0) {
                Utils.showError('These credentials are wrong');
                return;
            }

            console.log(response);
            let userFromApi = response[0];
            if (user.password === userFromApi.password) {
                Utils.redirect('home.html');
                Utils.localStorageSet("loggedIn", 1);
                Utils.redirect('home.html');

            } else {
                Utils.showError('These credentials are wrong');
            }
        })
    }

//






}














