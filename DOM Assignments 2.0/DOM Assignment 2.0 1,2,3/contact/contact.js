document.addEventListener("DOMContentLoaded", function () {
    const userName = document.querySelector(".userName");
    const userEmail = document.querySelector(".userEmail");
    const userMessage = document.querySelector(".userMessage");
    const targetName = document.querySelector(".enterName");
    const targetEmail = document.querySelector(".enterMail");
    const targetMessage = document.querySelector(".enterMessage");
    const resetButton = document.querySelector('.mainLeftDetails button')
    const submitBtn = document.querySelector("#submit");
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
       
        if (userName.value && userEmail.value && userMessage.value) {
            targetName.value = userName.value;
            targetEmail.value = userEmail.value;
            targetMessage.value = userMessage.value;
            userName.value = "";
            userEmail.value = "";
            userMessage.value = "";
          }
    });

    resetButton.addEventListener('click', function () {
        targetName.value = ''
        targetEmail.value = ''
        targetMessage.value = ''
    })

});
