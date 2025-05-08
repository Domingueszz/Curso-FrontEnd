document.getElementById("sign-up-btn").addEventListener("click", function (){
    document.body.classList.add(".fade-out");

    
    setTimeout(() => {
        window.location.href = "signUp.html";
    }, 100);
});

