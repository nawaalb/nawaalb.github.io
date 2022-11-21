let line1 = document.querySelector('.line-1');

window.onscroll = () => {
    let pos = window.scrollY - 800;
    line1.style.left = `${pos}px`
}