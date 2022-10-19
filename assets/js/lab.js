window.addEventListener('load', revealAnimation)

function revealAnimation(){

    const Timeline = gsap.timeline()

    Timeline
    .from('.nav', {autoAlpha: 0, x: -50, duration: 1.5, ease: Power4})
    .from('.title', {autoAlpha: 0, y: 50}, '-=0.2')
    .from('.tagline', {autoAlpha: 0, y: 50})
    .from('.desc', {autoAlpha: 0, y: 50}, '-=0.1')
    .from('img', {autoAlpha: 0, y: -500, duration: 2})

}
