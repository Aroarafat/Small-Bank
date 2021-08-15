document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('button-clicked');
    // GET-USER-EMAIL 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // GET-USER-PASSWORD
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // CHECK-EMAIL-AND-PASSWORD
    if (userEmail == 'arafat@gmail.com' && userPassword == 'arafat') {
        console.log("valid user");
        window.location.href = 'banking.html'
    }
    else {
        console.log("invalid-user");
    }
});
