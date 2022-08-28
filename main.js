const form = document.querySelector('form');
const form2 = document.querySelector('.form2');
const errorMsg = document.querySelector('.form small');
const errorMsg2 = document.querySelector('.form2 small');
const emailInput = document.querySelector('#email');
const emailInput2 = document.querySelector('.form2 #email2');

const curveBackground = document.querySelector('.curve--background img');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
})
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit2();
})

const handleSubmit = () => {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.value == '') {
        form.classList.remove('success');
        form.classList.add('error');
        errorMsg.textContent = "email can't be blank";
        setTimeout(() => {
            form.classList.remove('error')
        }, 5000);
    }
    else if (!emailInput.value.match(mailFormat)) {
        form.classList.remove('success');
        form.classList.add('error');
        errorMsg.textContent = "invalid format";
        setTimeout(() => {
            form.classList.remove('error')
        }, 5000);
    }
    else {
        form.classList.remove('error');
        form.classList.add('success');
        errorMsg.textContent = "Your email has been verified";
        setTimeout(() => {
            form.classList.remove('success')
        }, 5000)
    }
}

const handleSubmit2 = () => {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput2.value == '') {
        form2.classList.remove('success');
        form2.classList.add('error');
        errorMsg2.textContent = "email can't be blank";
        setTimeout(() => {
            form2.classList.remove('error')
        }, 5000)
    }
    else if (!emailInput2.value.match(mailFormat)) {
        form2.classList.remove('success');
        form2.classList.add('error');
        errorMsg2.textContent = "invalid format";
        setTimeout(() => {
            form2.classList.remove('error')
        }, 5000);
    }
    else {
        form2.classList.remove('error');
        form2.classList.add('success');
        errorMsg2.textContent = "Your email has been verified";
        setTimeout(() => {
            form2.classList.remove('success')
        }, 5000)
    }
}

const handleResize = () => {
    if (window.innerWidth >= 1000) {
        curveBackground.src = "./images/bg-curve-desktop.svg";
    }
    else {
        curveBackground.src = "./images/bg-curve-mobile.svg";
    }
}

document.addEventListener('DOMContentLoaded', handleResize);
window.addEventListener('resize', handleResize);