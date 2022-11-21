let line1 = document.querySelector('.line-1');

window.onscroll = () => {
    let pos = window.scrollY - 800;
    line1.style.left = `${pos}px`
}




<script>
          function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 12;

              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }

          window.addEventListener("scroll", reveal);
        </script>