let sections = document.querySelectorAll('section[id]')

function scrollActive(){
	let scrollY = window.pageYOffset
	
	sections.forEach(current =>{
		let sectionHeight = current.offsetHeight
		let sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')
		
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
} 
window.addEventListener('scroll',scrollActive )

/*--========================Change background header====================================--*/

function scrollHeader(){
	let nav = document.getElementById('header')
	
	if(this.scrollY >= 80 ) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*--========================Show scroll up====================================--*/
function scrollUp(){
	let scrollUp = document.getElementById('scroll-up');
	
	if(this.scrollY >= 560 ) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)