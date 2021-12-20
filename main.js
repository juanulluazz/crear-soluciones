
//ScrollTrigger

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    repeat: 0,
});
const pl = gsap.timeline({
  repeat: 0,
});

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
        start: "top center",
      end: ()=> '+=',
    },
    x: -50,
    opacity: 0,
    duration: 1,

  });

  gsap.from('.scrollPrueba3', {
    scrollTrigger: {
      trigger: '.detonadorEifs',
        start: "top center",
      end: ()=> '+=',
      // markers: true,
    },
    x: -50,
    opacity: 0,
    duration: 1,

  });
  gsap.from('.scrollPrueba2', {
    scrollTrigger: {
      trigger: '.detonadorEifs2',
        start: "top center",
      end: ()=> '+=',
      // markers: true,
    },
    x: -50,
    opacity: 0,
    duration: 1,
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
            stagger: .5,
    
          },'-=0.8'
          );
      

          tl.from('.animacion2', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .5,
    
          },'-=0.8' 
          );



          tl.from('.animacion3', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.8' );
          tl.from('.animacion4', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.8' );
          tl.from('.animacion5', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.8' );
          tl.from('.animacion6', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.8' );
          tl.from('.animacion7', {
            scrollTrigger: {
              trigger: '.animacion',
              start: 'top center',
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.2' );




        // pl.from('.segunda-parte', {
        //   y: '50%',
        //   opacity: 0,
        //   duration: 1,
        //   ease: Power4.easeOut,
        // }
        // );
        // );



        pl.from('.fila-animada', {
          scrollTrigger: {
            trigger: '#ventajas-parrafo',
            start: "top center",
            
            // markers: true,
          },
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: .6,
  
      }, '');    
      pl.from('.fila-animada2', {
        scrollTrigger: {
          trigger: '#ventajas-parrafo',
          start: "top center",
        
          // markers: true,
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: .6,

    },'-=0.5' );    
    pl.from('.fila-animada3', {
      scrollTrigger: {
        trigger: '#ventajas-parrafo',
        start: "top center",
     
        // markers: true,
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: .6,

  },'-=0.5' );    



  pl.from('.fila-animada4', {
    scrollTrigger: {
      trigger: '#ventajas-parrafo',
      start: "top center",
  
      // markers: true,
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: .6,

}, '-=0.5');    