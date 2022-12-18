const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // myGoals();
        removeClass();
        button.classList.add('btn_active');
       })
})

function removeClass(){
    buttons.forEach(button => {
        button.classList.remove('btn_active')
    })
}

