window.addEventListener('load', revealAnimation)

function revealAnimation(){

    const Timeline = gsap.timeline({
        defaults: {
            duration: 1,
            autoAlpha: 0,
            ease: "power4.out"
        }
    });

    Timeline
    // My answer
    // .from('.nav', {autoAlpha: 0, x: -50, duration: 1.5, ease: Power4})
    // .from('.title', {autoAlpha: 0, y: 50}, '-=0.2')
    // .from('.tagline', {autoAlpha: 0, y: 50})
    // .from('.desc', {autoAlpha: 0, y: 50}, '-=0.1')
    // .from('img', {autoAlpha: 0, y: -500, duration: 2})

    .from('.logo', {x: -20})
    .from('.menu-links ul li', {x: -20, stagger: 0.08})
    .from('.title', {y: 20}, '-=0.4')
    .from('.tagline', {y: 20}, '-=0.7')
    .from('.desc', {y: -20}, '<')
    .from('.beer', {y: -800})

}
