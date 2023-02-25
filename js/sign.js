const showRegistration = () => {
    document.querySelector("#registration-page").classList.remove("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#homepage").classList.add("hide");
};

const showLogin = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.remove("hide");
    document.querySelector("#homepage").classList.add("hide");
};

const verifyPassword = (email) => {
    const signIn = () => window.location.replace("signup.html");
    auth
        .sendPasswordResetEmail(email)
        .then(function () {
            alert.warning(`Password Reset Email Has Been Sent To ${email} Please Check Your Email, please click close to redirect.`);
            alert.onClose(signIn);
        })
        .catch(function (error) {
            alert.warning("invalid email or bad network connection");
            alert.onClose(signIn);
        });
};  


const register = () => {
    const email = document.querySelector("#r-email").value;
    const password = document.querySelector("#r-password").value;
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(function () {
            alert.success("User Created Successfully");
            alert.onClose(showLogin);
        })
        .catch(function (error) {
            alert.warning(error.message);
            alert.onClose(showLogin);
        });

        alert.warning("Now Sign In To Continue");
    const signIn = () => window.location.replace("signup.html");
};



const login = () => {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value.trim();

    if (email.trim() == "") {
        alert.warning("Enter an email");
    } else if (password == "" || password.length < 7) {
        // alert("Enter Password");
        alert.warning("Enter a password");
    } else {
        authenticate(email, password);
    }
        
};


const forgotPassword = (email) => {
    auth
        .sendPasswordResetEmail(email)
        .then(function () {
            alert.warning("Email sent");
        })
        .catch(function (error) {
            alert.warning("invalid email or bad network connection");
        });
};

const showHomepage = () => {
    document.querySelector("#registration-page").classList.add("hide");
    document.querySelector("#login-page").classList.add("hide");
    document.querySelector("#homepage").classList.remove("hide");
};

document.querySelector("#register").addEventListener("click", () => {
    register();
});

document.querySelector("#show-login").addEventListener("click", () => {
    showLogin();
});


document.querySelector("#login").addEventListener("click", () => {
    login();
});

document.querySelector("#show-register").addEventListener("click", () => {
    showRegistration();
});

document.querySelector("#login-password").addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        login();
    }
});

document.querySelector("#forgot-password").addEventListener("click", () => {
    const email = document.querySelector("#login-email").value;
    if (email.trim() == "") {
        alert.warning("Enter The Email You Used To Register With");
    } else {
        forgotPassword(email);
    }
});

window.addEventListener('load', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let action = urlParams.get('action')
    if(action) {
        action = action.toLowerCase();    
        if(action === 'signup') {
            showRegistration();
        }
    }
})

/* show password function */
function myFunction() {
    var x = document.getElementById("login-password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

