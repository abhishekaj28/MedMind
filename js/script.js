document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-image').style.display = 'block';
        document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
}

gsap.timeline()

.to('.splash1', {
    height: 0,
    duration: 1,
    delay: 2,
},'splash')

.to('.splash1 h1', {
    opacity: 0,
    y: -50,
    duration: 0.5,
    delay: 1.5,
},'splash')

.to('.fixed-top', {
    opacity: 1,
    display: 'block',
    y: 0,
    duration: 0.5,
    delay: 2.8,
},'splash')