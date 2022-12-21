const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl  = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container")


btnEl.addEventListener("click", () => {
    createPassword()
});


copyIconEl.addEventListener("click", () =>{
    copypassword()
    alertContainerEl.classList.remove("active");
    setTimeout(()=>{
        alertContainerEl.classList.add("active");
    },2000)
})

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}{}ABCDEFGHIJKLMNOPQRSTUVWXVZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const ranadomNum = Math.floor(Math.random()* chars.length)
        password += chars.substring(ranadomNum, ranadomNum  + 1);
    }

inputEl.value = password;
}

function copypassword() {
    inputEl.select();
    navigator.clipboard.writeText(inputEl.value)
}

