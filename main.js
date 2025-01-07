// Add JavaScript query for modal

const btns = document.querySelectorAll("[data-target]");
const closeModals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay-modal");

// For opening popup
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add("active");
    });
});

// For closing popup using "x" sign
closeModals.forEach((btn) => {
    btn.addEventListener("click", () => { const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
    });
});

// After opening popup, if you click outside the popup, it will close.
window.onclick = (event) => {
    if (event.target === overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};





// Contact form validation
function validate() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("error-message");
    errorMessage.style.padding = "15px";
    // error_message.innerHTML = "";    // Clear previous error message
    var text;
    
    // Asian names can be three-letter names such as lee or mae hence limit >= 3
    if (name.length <= 3){
        text = "Please Enter valid Name (Minimum 3 characters)";
        errorMessage.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter valid Phone Number (10-digit)";
        errorMessage.innerHTML = text;
        return false;
    }
    if (email != "@gmail.com") {
        text = "Please Enter valid Gmail id";
        errorMessage.innerHTML = text;
    }
    if (subject.length < 10) {
        text = "Please Enter Correct Subject (Minimum 10 characters)";
        errorMessage.innerHTML = text;
        return false;
    }
    
    // Message should have more than 140 characters
    if (message.length <= 140) {
        text = "Please Enter more than 140 characters";
        errorMessage.innerHTML = text;
        return false;
    }
    // Message should have less than 500 characters
    if (message.length >= 500) {
        text = "Please enter less than 500 Characters";
        errorMessage.innerHTML = text;
        return false;
    }

    // This alert message will appear if all form fields are filled correctly
    alert("Form submitted successfully! Thank you for contacting us");
    return true;
};





// Search Functionality
function filter() {
    var filterValue, input, productList, productName, h4, i;

    input = document.getElementById("search");
    filterValue = input.value.toUpperCase();
    productList = document.getElementById("product-list");
    productName = productList.getElementsByClassName("col-4");

    for (i = 0; i < productName.length; i++) {
        h4 = productName[i].getElementsByTagName("h4")[0];
        // In search if typed string matches with the element name.
        if (h4.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            productName[i].style.display = "";
        }
        else {
            productName[i].style.display = "none";
        }
    }
}




// Sort Product by price
function sortList() {
    var productList, productName, i, switching, b, c, shouldSwitch;
    productList = document.getElementById("product-list");
    productName = document.getElementsByClassName("col-4");
    switching = true;   // Boolean true

    while (switching) {
        switching = false;
        // Loop is running through each product
        for (i = 0; i < productName.length - 1; i++) {
            shouldSwitch = false;
            b = productName[i].getElementsByTagName("span")[0].innerHTML;
            c = productName[i + 1].getElementsByTagName("span")[0].innerHTML;

            // Condition to check price for each product item
            if (Number(b) > Number(c)) {
                shouldSwitch = true;
                break;
            }
        }

        // Each product element will switch with next product element based on product price sorting
        if (shouldSwitch) {
            productName[i].parentNode.insertBefore(productName[i + 1], productName[i]);
            switching = true;
        }
    }

}




// Login popup open

    // const formBtns = document.querySelectorAll("[data-target]");
    // const closeForm = document.querySelectorAll(".close-form");
    // const formOverlay = document.getElementById("form-overlay");

    // // For opening form popup
    // formBtns.forEach((formBtn) => {
    //     formBtn.addEventListener("click", () => {
    //         document.querySelector(formBtn.dataset.target).classList.add("active");
    //         formOverlay.classList.add("active");
    //     });
    // });

    // // For closing popup using "x" sign
    // closeForm.forEach((formBtn) => {
    //     formBtn.addEventListener("click", () => { const form = formBtn.closest(".login");
    //     form.classList.remove("active");
    //     formOverlay.classList.remove("active");
    //     });
    // });

    // // After opening popup, if you click outside the popup, it will close.
    // window.onclick = (event) => {
    //     if (event.target === overlay) {
    //         const forms = document.querySelectorAll(".login");
    //         forms.forEach((form) => form.classList.remove("active"));
    //         formOverlay.classList.remove("active");
    //     }
    // };



// Register Form with localstorage
// function register(e) {
//     e.preventDefault()
//     var registerEmail, registerPassword, formMessage;
//     registerEmail = document.getElementById("register-email").value;
//     registerPassword = document.getElementById("register-password").value;

//     formMessage = document.getElementById("form-message");
//     formMessage.style.padding = "15px";

//     var text;

//     if (localStorage.getItem(registerEmail)) {
//        text = "You are already registered. Go to Login page.";
//        formMessage.innerHTML = text;
//        return
       
//     }

//     localStorage.setItem(registerEmail, registerPassword);
//     text = "This email already used. Try different email.";
//     formMessage.innerHTML = text;
// }



// Login Form Checkings with local storage
// function loginCheck() {
//     var loginEmail, loginPassword;
//     loginEmail = document.getElementById("login-email").value;
//     loginPassword = document.getElementById("login-password").value;

//     formMessage = document.getElementById("form-message");
//     formMessage.style.padding = "15px";

//     var text;

//     const storedData = localStorage.getItem(loginEmail)

//     if (storedData === null) {
//         text = "User not found, Please register first.";
//         formMessage.innerHTML = text;
//     }
//     else if (storedData !== loginPassword){
//         text = "You entered wrong password.";
//         formMessage.innerHTML = text;
//     }
//     else {
//         text = "You have sucessfully login!!";
//         formMessage.innerHTML = text;
//         window.location.href = "index.html";
//     }
// }

