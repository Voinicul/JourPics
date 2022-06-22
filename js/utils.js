class Utils {
    static redirect(path) {
        window.location.href = path;
    }

    static showError(message) {
        const $alertDanger = $('.alert-danger');
        $alertDanger.show();
        $alertDanger.html(message);
       
    }

    static localStorageSet(key, value) {
        window.localStorage.setItem(key, value);
    }

    static localStorageGet(key) {
        return window.localStorage.getItem(key);
    }

    static localStorageRemove(key) {
        window.localStorage.removeItem(key);
    }

}


















