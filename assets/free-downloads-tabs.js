const tabSections = document.querySelectorAll('.section-tab');

if ( tabSections.length ) {
	const createLayout = () => {
		const main = document.querySelector( 'main' );
		const tabsSectionEl = document.createElement( 'section' );
		const tabsWrapperEl = document.createElement( 'div' );
		const tabsButtonsEl = document.createElement( 'div' );
		const tabsContentEl = document.createElement( 'div' );

		tabsSectionEl.classList.add('free-downloads-tabs');
		tabsWrapperEl.classList.add('free-downloads-tabs__wrapper');
		tabsButtonsEl.classList.add('free-downloads-tabs__buttons');
		tabsContentEl.classList.add('free-downloads-tabs__content');

		main.append( tabsSectionEl );
		tabsSectionEl.append( tabsWrapperEl );
		tabsWrapperEl.append( tabsButtonsEl, tabsContentEl );

		tabSections.forEach(( tab, index ) => {
			const trigger = tab.querySelector('.tab-trigger' );
			const tabContent = tab.querySelector('.section-tab__wrapper' );
			trigger.dataset.tabIndex = `${index}`;
			tabContent.dataset.tabIndex = `${index}`;

			tabsContentEl.append( tab.closest('.shopify-section' ) );
			tabsButtonsEl.append( trigger.cloneNode( true ) );

			createAccordions( tabContent );
		})
	}

	const toggleTab = () => {
		const tabButtonsOnDesktop = document.querySelectorAll( '.free-downloads-tabs__buttons .tab-trigger' );
		const tabButtonsOnMobile = document.querySelectorAll( '.section-tab .tab-trigger' );
		const tabContentList = document.querySelectorAll( '.section-tab__wrapper' );

		tabButtonsOnMobile.forEach(( btn ) => {
			btn.addEventListener('click', () => {
				btn.classList.toggle( 'active' );

				tabContentList.forEach(( tabContent ) => {
					if ( tabContent.dataset.tabIndex === btn.dataset.tabIndex ) {
						tabContent.classList.toggle( 'hidden' );
					}
				})

				scrollToElement( btn );
			})
		})

		tabButtonsOnDesktop.forEach(( btn ) => {
			btn.addEventListener('click', () => {
				const tabIndex = btn.dataset.tabIndex;

				tabContentList.forEach(( tabContent ) => {
					if ( tabContent.dataset.tabIndex !== tabIndex ) {
						tabContent.classList.add( 'hidden' );
					} else {
						tabContent.classList.remove('hidden' );
					}
				})

				tabButtonsOnDesktop.forEach(( button ) => {
					button.classList.remove( 'active' );
				})
				btn.classList.add('active');

				scrollToElement( btn.closest( '.free-downloads-tabs' ) );
			})
		})
	}

	const scrollToElement = ( element ) => {
		const header = document.querySelector( '.section-header' );
		const headerHeight = header.getBoundingClientRect().height + 10;

		const top = element.getBoundingClientRect().top;
		const y = top + window.pageYOffset - headerHeight;

		window.scrollTo( { top: y, behavior: 'smooth' } );
	}

	const createAccordions = ( tabContent ) => {
		const ol = tabContent.querySelectorAll( 'ol' );
		if ( ol.length ) {
			ol.forEach(( list ) => {
				list.classList.add( 'faq-accordion' );
				const firstLi = list.querySelector('li:first-child')
				const secondLi = list.querySelector('li:nth-child(2)')
				firstLi.innerHTML = `<details><summary>${firstLi.textContent}</summary><div class="faq-accordion__content">${secondLi.textContent}</div></details>`;
				secondLi.remove();
			})
		}
	}

	const init = () => {
		const tabButtons = document.querySelectorAll( '.tab-trigger' );
		const tabContentList = document.querySelectorAll( '.section-tab__wrapper' );
		const firstTabIndex = tabContentList[0].dataset.tabIndex;

		tabContentList.forEach(( tabContent, index ) => {
			if ( index !== 0 ) {
				tabContent.classList.add( 'hidden' );
			}
		} )

		tabButtons.forEach((btn)=> {
			if ( btn.dataset.tabIndex === firstTabIndex ) {
				btn.classList.add('active');
			}
		})

		toggleTab();
	}

	createLayout();
	init();
}