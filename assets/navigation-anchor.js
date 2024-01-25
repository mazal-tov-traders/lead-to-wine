document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("#navigation-anchor__link[href^='#']");
  
    links.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        var targetId = this.getAttribute("href").substring(1);
  
        var targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          var targetOffset = targetElement.offsetTop;
  
          window.scrollTo({
            top: targetOffset,
            behavior: "smooth",
          });
        }
      });
    });
  });