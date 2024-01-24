window.addEventListener('load', () => {
    const preload = document.querySelector('#preloader');
    setTimeout( function() {
        preload.classList.add('preload-finish');
    }, 1000 );
});
