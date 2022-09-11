function percent(this_num, of_the) { return Math.round( (100 * this_num) / of_the ) }
function pattern(CSSVar, val) { document.documentElement.style.setProperty('--'+CSSVar, val) }

function vport(func_desktop, func_mobile) {
	let h = window.innerHeight
	let w = window.innerWidth
	if ( percent(h, w) > 100 ) { func_mobile() }
	else { func_desktop() }
}

function init() {
	vport(
		function(){ //desktop
			pattern('fontMain', "500 2.5vmin 'Montserrat'")
			pattern('fontSub', "200 3.8vmin 'Montserrat'")
			pattern('fontTitle', "500 5.4vmin 'Montserrat'")
			pattern('fontCap', "700 6vmin 'Montserrat'")
			pattern('tileW', '50%')
			pattern('orderA', '1')
			pattern('orderB', '2')
			pattern('logoHeight', '40%')
			pattern('introH', '100%')
			pattern('introM', '15vmin 0 0 15vmin')
			pattern('cellH', '60vmin')
		},
		function(){ // mobile
			pattern('fontMain', "300 4vmin 'Montserrat'")
			pattern('fontSub', "200 4.8vmin 'Montserrat'")
			pattern('fontTitle', "500 6.4vmin 'Montserrat'")
			pattern('fontCap', "700 7vmin 'Montserrat'")
			pattern('tileW', '100%')
			pattern('orderA', '1')
			pattern('orderB', '1')
			pattern('logoHeight', '80%')
			pattern('introH', '60%')
			pattern('introM', '40vmin 0 0 15vmin')
			pattern('cellH', '100vmin')
		}
	)
}

window.addEventListener('resize', function(){ init() }, false)