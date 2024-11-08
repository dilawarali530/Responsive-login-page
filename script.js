const pageBox = document.querySelector (".page-box");
const btnNext = document.querySelector (".btn-next");
const btnBack = document.querySelector (".btn-back");
const checkboxpass = document.querySelector (".checkbox-pass");
const passwrodInput = document.querySelector (".password");
const loginTitle = document.querySelector (".logintitle-text");
const userEmail = document.querySelector (".user-email");
const emailInput = document.querySelector (".email");
btnNext.onclick = (e) => {
  e.preventDefault ();
  pageBox.classList.add("active-pass");
  setTimeout( () => passwrodInput.focus(), 500);
  loginTitle.innerHTML = "welcome";
  userEmail .innerHTML =emailInput.value;
}
btnBack.onclick = (e) => {
  e.preventDefault ();
  pageBox.classList.remove ("active-pass");
  loginTitle.innerHTML = "Login";
  userEmail.innerHTML = "please login to use the platform"
  emailInput.focus();
}
 checkboxpass.onclick = () => {
  if (checkboxpass.checked){
    passwrodInput.type = "text"
  }
   else{
    passwrodInput .type = "password"
  }
};
  