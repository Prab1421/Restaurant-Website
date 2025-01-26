const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');
const bookingForm = document.querySelector('.booktable'); 

bar.addEventListener('click', function() {
    headerbar.style.right = '0'; 
    bookingForm.style.display = 'none'; 
    setTimeout(() => {
        cross.style.display = 'block'; 
    }, 200);
});

cross.addEventListener('click', function() {
    headerbar.style.right = '-100%'; 
    bookingForm.style.display = 'block';
    cross.style.display = 'none'; 
});

const homeIcon = document.querySelector('.fa-house-chimney');
homeIcon.addEventListener('click', () => {
    window.location.href = 'index.html';
});

const searchicon1 = document.querySelector('#searchicon1');
const search1 = document.querySelector('#searchinput1');
searchicon1.addEventListener('click', function() {
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
});

const searchicon2 = document.querySelector('#searchicon2');
const search2 = document.querySelector('#searchinput2');
searchicon2.addEventListener('click', function() {
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
});

const signupForm = document.getElementById('signup-form');
const signinForm = document.getElementById('signin-form');
const switchToSignin = document.getElementById('switch-to-signin');
const switchToSignup = document.getElementById('switch-to-signup');
const closeSignup = document.getElementById('close-signup');
const closeSignin = document.getElementById('close-signin');

signupForm.classList.add('active');

switchToSignin.addEventListener('click', () => {
    signupForm.classList.remove('active');
    signinForm.classList.add('active');
});

switchToSignup.addEventListener('click', () => {
    signinForm.classList.remove('active');
    signupForm.classList.add('active');
});

closeSignup.addEventListener('click', () => {
    signupForm.classList.remove('active');
});

closeSignin.addEventListener('click', () => {
    signinForm.classList.remove('active');
});

function redirectToIndex() {
    window.location.href = "index.html"; 
}
