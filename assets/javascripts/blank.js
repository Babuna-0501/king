document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

if (document.documentElement.style.setProperty) {
    document.documentElement.style.setProperty('--viewport-height', window.innerHeight + 'px');
    document.documentElement.style.setProperty('--viewport-height-actual', window.innerHeight + 'px');
}