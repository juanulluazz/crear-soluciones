gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    repeat: 0,
})

let tween = gsap.from(".scrollPrueba", {x:-50, duration: 1.5, opacity: 0,}),
    st = ScrollTrigger.create({
        trigger: ".scrollPrueba",
        start: "top center",
        end: "+=50",
        animation: tween
      });


      tl.from('.contenedor-animacion', {
        y: '50%',
        opacity: 0,
        duration: 1.7,
        ease: Power4.easeOut,
      })
  

    //   let dos = gsap.to(".animacion", {y:-200}),
    //   at = ScrollTrigger.create({
    //       trigger: ".trigger",
    //       start: "top center",
    //       end: "+=50",
    //       animation: tween
    //     });

        gsap.from('.animacion1', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 150,
            opacity: 0,
            duration: 1,
            stagger: .6,
    
          }),
    

          gsap.from('.animacion2', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 150,
            opacity: 0,
            duration: 1,
            stagger: .6,
    
          }),
          gsap.from('.animacion3', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 150,
            opacity: 0,
            duration: 1,
            stagger: .6,
    
          }),
          gsap.from('.animacion4', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 150,
            opacity: 0,
            duration: 1,
            stagger: .6,
    
          }),
          gsap.from('.animacion5', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 150,
            opacity: 0,
            duration: 1,
            stagger: .6,
    
          }),
          gsap.from('.animacion6', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 150,
            opacity: 0,
            duration: 1,
            stagger: .6,
    
          }),
          gsap.from('.animacion7', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 150,
            opacity: 0,
            duration: 1,
            stagger: .6,
    
          })