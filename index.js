
// Open modal when click on login btn
function signupLoginPage() {
    var logInBtn = document.querySelector('.login-btn');
    var dialogLogin = document.querySelector('.logIn');
    var registerHere = document.querySelector('#register-page');
    var logInHere = document.querySelector('#logIn-page');
    var dialogSignup = document.querySelector('.register');


    // When click on the login btn in nav bar login modal will appear
    logInBtn.addEventListener('click', function () {
        dialogLogin.showModal();
    })


    // Register form when click on register here on login page the register dialog would be appear
    registerHere.addEventListener('click', function () {
        dialogSignup.showModal();
        dialogLogin.close();
    })


    // Login form will appear when click on login here in register page
    logInHere.addEventListener('click', function () {
        dialogLogin.showModal();
        dialogSignup.close();
    })

}


// submit register form and store data in local storage 
function registerForm() {
    var form = document.querySelector('.register form');
    form.addEventListener('submit', function (e) {

        e.preventDefault();


        // Login form will appear
        var dialogLogin = document.querySelector('.logIn');
        // register form will appear
        var dialogSignup = document.querySelector('.register');
        // getting all the input fields from register form
        var registerName = document.querySelector('#register-name').value;
        var registerEmail = document.querySelector('#register-email').value
        var registerPassword = document.querySelector('#register-password').value

        if (registerName === '' || registerEmail === '' || registerPassword === '') {
            alert('please write something');
        }
        else {

            if (registerName == localStorage.getItem('userName') || registerEmail == localStorage.getItem('userEmail') || registerPassword == localStorage.getItem('userPassword')) {
                alert('You are already registered, Please enter your email and password');
                dialogLogin.showModal();
            }
            else {
                localStorage.setItem('userName', registerName);
                localStorage.setItem('userEmail', registerEmail);
                localStorage.setItem('userPassword', registerPassword);

                dialogSignup.close()
                window.location.href = './index.html'
                alert('Welcome ' + localStorage.getItem('userName'));
            }

            // console.log(registerName)
            // console.log(registerEmail)
            // console.log(registerPassword)
        }

    })
}


// Login if you have registered already
function loginForm() {

    var form = document.querySelector('.logIn form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();


        // Login form will appear
        var dialogLogin = document.querySelector('.logIn');
        // register form will appear
        var dialogSignup = document.querySelector('.register');
        // getting all the inputFields by its id
        var loginEmail = document.querySelector('#login-email').value;
        var loginPassword = document.querySelector('#login-password').value;

        if (loginEmail === '' || loginPassword === '') {
            alert('Please fill the form');
        }
        else {
            if (loginEmail == localStorage.getItem('userEmail') || loginPassword == localStorage.getItem('userPassword')) {
                dialogLogin.close();
                window.location.href = './index.html';
                loginEmail.innerHTML = ''
                loginPassword.innerHTML = ''
                alert('Welcome back' + localStorage.getItem('userName'));
            }
            else {
                alert('you are not registered, please register')
                dialogSignup.showModal();
            }
        }

    })


}





loginForm();
registerForm();
signupLoginPage();

// dialogLogin.showModal();
// dialogSignup.showModal();