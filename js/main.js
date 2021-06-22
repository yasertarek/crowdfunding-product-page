// Declare % Assign Global Variables
let menuIcon        = document.querySelector('.menu-icon'),
    navBar          = document.querySelector('.navigation-bar'),
    bookmarkBtn     = document.querySelector('.bookmark'),
    backBtn         = document.querySelector('.back-btn'),
    callPopup       = Array.from(document.querySelectorAll('.call-for-popup')),
    chkBtn          = Array.from(document.querySelectorAll('.chk-btn')),
    selectRewardArr = Array.from(document.querySelectorAll('.select-reward'));
// Show NavLinks When Click On Menu Icon
menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('navigation-bar--active');
});
// Hide NavLinks When Click On Anywhere In Page Except MenuIcon and Its Lines
document.addEventListener('click', (e) =>{
    if(!e.target.matches('.menu-icon') && !e.target.matches('.hamburger')){
        navBar.classList.remove('navigation-bar--active');
    }
});
// Show Backing Form When Click On "Back this project" Button
backBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    backForm('show');
});
// Hide Backing Form when Click on anywhere Except The Form itself
document.querySelector('.back-overlay').addEventListener('click', () =>{
    backForm('hide');
});
// Hide Backing Form when Click on Close Icon
document.querySelector('.back-form-close-icon').addEventListener('click', () =>{
    backForm('hide');
});
// Flag Varibale For Ensuring of Applying Event Only once
let Scroll100Flag = true;
window.addEventListener('scroll', () =>{
    if(Scroll100Flag){
        if(window.scrollY >= 100){
        Scroll100Flag = false;
        AnimateIncreaseNum(document.getElementById('increament1'), 0, 89914);
        AnimateIncreaseNum(document.getElementById('increament2'), 0, 5007, inc=10, dollar=false);
        AnimateIncreaseNum(document.getElementById('increament3'), 0, 56, inc=1, dollar=false);
        document.querySelector('.progress-bar').classList.add('progress-bar--scrolled');
        }
}
});
// Toggle Bookmark
bookmarkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    bookmarkBtn.classList.toggle('bookmark--active');
});
// Show Backing Form With Desired Plan is Marked
selectRewardArr.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        backForm('show');
        // Remove "chk-lbl--active" Class from All Plans To put Green border On Only Selected Plan [Reset]
        chkBtn.forEach(element => {
            element.parentElement.classList.remove('chk-lbl--active');
        });
        // Check On The Related plan -Radio Input- in Form to clicked Button in home 
        document.getElementById(this.dataset.plan).checked = true;
        // Check if Radio input Checked, So put Green border on Only Selected Plan
        if(document.getElementById(this.dataset.plan).checked){
            document.getElementById(this.dataset.plan).parentElement.classList.add('chk-lbl--active');
            window.scrollTo(0, document.getElementById(this.dataset.plan).parentElement.offsetTop);
        }
    });
});
// Select Label Based On Its Checked Radio input
// +GreenBorder Purpose
chkBtn.forEach(element => {
    element.addEventListener('input', function(){
        chkBtn.forEach(element => {
            element.parentElement.classList.remove('chk-lbl--active');
        });
        if(this.checked){
            this.parentElement.classList.add('chk-lbl--active');
        }
    });
});
// Show Popup 
callPopup.forEach((ele)=>{
    ele.addEventListener('click', (e)=> {
        e.preventDefault();
        popup('show');
        backForm('hide');
    });
});
// Hide Popup When Click on Outside
document.querySelector('.popup-overlay').addEventListener('click', () =>{
    popup('hide');
});
// Hide Popup When Click On Got it Button
document.querySelector('.hide-popup-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    popup('hide');
});
// Increasing Numbers Animation Function
function AnimateIncreaseNum(obj, start, end, inc=200, dollar=true){
    let targ = obj;
    let initVal = start;
    let finalVal = end;
    let increament = inc;
    let animationEvent = setInterval(() => {
        initVal+=increament;
        if(initVal >= finalVal){
            clearInterval(animationEvent);
            initVal = finalVal;
        }
        if(dollar){
            targ.innerHTML = `$${initVal}`;
        }else{
            targ.innerHTML = `${initVal}`;
        }
    }, 1)
}
// Function of Show/Hide Back Form
function backForm(action){
    if(action == 'show'){
        document.querySelector('.back-form').classList.add('back-form--active');
        document.querySelector('.back-overlay').classList.add('back-overlay--active');
    }else if(action == 'hide'){
        document.querySelector('.back-form').classList.remove('back-form--active');
        document.querySelector('.back-overlay').classList.remove('back-overlay--active');
    }
}
function popup(action){
    if(action == 'show'){
        document.querySelector('.popup').classList.add('popup--active');
        document.querySelector('.popup-overlay').classList.add('popup-overlay--active');
        window.scrollTo(0, 0);
    }else if(action == 'hide'){
        document.querySelector('.popup').classList.remove('popup--active');
        document.querySelector('.popup-overlay').classList.remove('popup-overlay--active');
    }
}