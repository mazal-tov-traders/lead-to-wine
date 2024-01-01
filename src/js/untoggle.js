const details = document.querySelectorAll('.footer__menu-list--item details');

function updateStatus() {
  let windowWidth = window.innerWidth;
  
  if (windowWidth >= 990) {
    details.forEach(detail => {
      detail.open = true;
    });
  } else {
    details.forEach(detail => {
      detail.open = false;
    });
  }
}

updateStatus();

window.addEventListener("resize", updateStatus);