window.addEventListener('DOMContentLoaded', () => {
	// //==========================================================================================================================================
	// function get(selector) {
	// 	return document.querySelector(selector)
	// }
	// function getAll(selector) {
	// 	return document.querySelectorAll(selector)
	// }
	// //==========================================================================================================================================
	// //==========================================================================================================================================
	// let ibg = document.querySelectorAll('.ibg')
	// ibg.forEach(el => {
	// 	let srcAttr = el.firstElementChild.getAttribute('src');
	// 	el.style.backgroundImage = `url('./${srcAttr}')`
	// })
	// //==========================================================================================================================================
	const rows = document.querySelectorAll('.program__row');
	const lines = document.querySelectorAll('.program__line');
	const linesSecond = document.querySelectorAll('.list__line');
	lines.forEach(el => {
		el.addEventListener('click', () => {
			if (el.closest('.program__row').classList.contains('clicked')) {
				el.closest('.program__row').classList.remove('clicked')
			}
			else {
				rows.forEach(el => {
					el.classList.remove('clicked')
				})
				el.closest('.program__row').classList.toggle('clicked')
			}
			document.querySelectorAll('.list > li').forEach(el => {
				el.classList.remove('clicked')
			})
		})
	})

	linesSecond.forEach(el => {
		el.addEventListener('click', () => {
			el.closest('li').classList.toggle('clicked')
		})
	})
})