var menuButton = $('.menu')
var navbar = $('.navbar')
var card = $('.card')

menuButton.click(()=> {
    navbar.toggleClass('mobile', 1000)
})