onload = () =>{
    document.body.classList.remove("container");
};

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('playAudio') === 'true') {
    const audio = new Audio('Goo Goo Doll - Iris.mp3');
    audio.play();
    localStorage.removeItem('playAudio');
    }
});