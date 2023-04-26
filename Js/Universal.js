document.addEventListener("DOMContentLoaded", () => {
	// VARIABLES
	let BotonMenu = document.querySelector("#BotonMenu")
	let MenuOculto = document.querySelector("#MenuOculto")
	let Top = document.querySelector("#Top")
	let LOGO = document.querySelector("#LOGO")
	// TOP
	window.onscroll = function()
	{
		var scroll = document.documentElement.scrollTop || document.body.scrollTop
		if (scroll > 0)
		{
			LOGO.classList.add('HomePage')
			Top.classList.add('Blanco')
			BotonMenu.classList.add('Negro')
		}
		else
		{
			LOGO.classList.remove('HomePage')
			Top.classList.remove('Blanco')
			BotonMenu.classList.remove('Negro')
		}
	}
	// MENU
	BotonMenu.addEventListener("click", () => {
		MenuOculto.classList.toggle("MenuAparece")
	})
	
})