const header = document.querySelector( '.header-wrapper' );
const main = document.querySelector( 'main' );

if ( header ) {
	const headerHeight = header.getBoundingClientRect().height;
	const banner = document.querySelector( '.home-page-banner' );
	const subMenuLevel1 = header.querySelectorAll('.mega-menu__content >ul');

	function sticky() {
		if ( main.getBoundingClientRect().top < 0 ) {
			header.classList.add( 'header-wrapper_sticky' );
		} else {
			header.classList.remove( 'header-wrapper_sticky' );
		}
	}

	if( banner ) {
		banner.style.setProperty( '--headerHeight', `-${ headerHeight }px` );
	}

	if (subMenuLevel1.length) {
		subMenuLevel1.forEach((menu)=> {
			const submenu = menu.querySelector('ul');

			if (submenu) {
				menu.classList.add('has-submenu');
				submenu.closest('.mega-menu').classList.add('mega-menu_wide')

				const items = menu.querySelectorAll('li');
				items.forEach((item)=>{
					if( item.querySelector('ul') ) {
						item.classList.add('has-submenu');
					}
				})
			}
		})
	}

	window.addEventListener( 'scroll', sticky);
	sticky();
}
