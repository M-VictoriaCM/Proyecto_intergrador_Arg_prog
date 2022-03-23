let themeButton = document.getElementById('theme-button')
let darkTheme = 'dark-theme'
let iconTheme = 'uil-sun'

//Previusly selected topic(if user selected)
let selectedTheme = localStorage.getItem('selected-theme')
let selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current that interface has by validating the dark-theme class

let getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//We validate if the user previously chose a topic

if(selectedTheme){
    //If validation is fulfilled, we ask what thw issue was to know if activated or desactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate/desactivate the theme manually witch the button

themeButton.addEventListener('click', () =>{
    //add or remove the dark/ icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})