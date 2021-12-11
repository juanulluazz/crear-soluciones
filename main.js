gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    repeat: 0,
})

// let tween = gsap.from(".scrollPrueba", {x:-50, duration: 1, opacity: 0,}),
//     st = ScrollTrigger.create({
//         trigger: ".quinta-parte",
//         start: "top center",
//         end: "+=50",
//         animation: tween
//       });


gsap.from('.scrollPrueba', {
    scrollTrigger: {
      trigger: '.disparadorFooter',
        start: "center center",
      end: ()=> '+=',
      markers: true,
    },
    x: -50,
    // y: 100,
    opacity: 0,
    duration: 1,
    // stagger: .6,

  });


    


      tl.from('.contenedor-animacion', {
        y: '50%',
        opacity: 0,
        duration: 1,
        ease: Power4.easeOut,
      }
      );
  

    //   let dos = gsap.to(".animacion", {y:-200}),
    //   at = ScrollTrigger.create({
    //       trigger: ".trigger",
    //       start: "top center",
    //       end: "+=50",
    //       animation: tween
    //     });

        tl.from('.animacion1', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
          },'-=1'
          );
      

          tl.from('.animacion2', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
          },'-=0.6' );
          tl.from('.animacion3', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.6' );
          tl.from('.animacion4', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.6' );
          tl.from('.animacion5', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.6' );
          tl.from('.animacion6', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.6' );
          tl.from('.animacion7', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.6' );