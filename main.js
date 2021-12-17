gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    repeat: 0,
});
const tl2 = gsap.timeline({
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
      // markers: true,
    },
    x: -50,
    // y: 100,
    opacity: 0,
    duration: 1,
    // stagger: .6,

  });

  gsap.from('.scrollPrueba3', {
    scrollTrigger: {
      trigger: '.detonadorEifs',
        start: "top center",
      end: ()=> '+=',
      // markers: true,
    },
    x: -50,
    // y: 100,
    opacity: 0,
    duration: 1,
    // stagger: .6,

  });
  gsap.from('.scrollPrueba2', {
    scrollTrigger: {
      trigger: '.detonadorEifs2',
        start: "top center",
      end: ()=> '+=',
      // markers: true,
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
            stagger: .6,
    
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
    
        },'-=1' );





        // tl2.from('.segunda-parte', {
        //   scrollTrigger: {
        //     trigger: "#ventajas-parrafo",
        //     start: "top center",
        //     end: ()=> '+=',
        //    markers: true,
        //   },
        //   y: '50%',
        //   opacity: 0,
        //   duration: 2,
        //   ease: Power4.easeOut,
        // }
        // );



//         tl2.from('.fila-animada', {
//           scrollTrigger: {
//             trigger: '#ventajas-parrafo',
//             start: "top center",
//             end: ()=> '+=',
//             // markers: true,
//           },
//           y: 100,
//           opacity: 0,
//           duration: 1,
//           stagger: .6,
  
//       }, '-=1');    
//       tl2.from('.fila-animada2', {
//         scrollTrigger: {
//           trigger: '.fila-animada',
//           start: "top center",
//           end: ()=> '+=',
//           // markers: true,
//         },
//         y: 100,
//         opacity: 0,
//         duration: 1,
//         stagger: .6,

//     },'-=1' );    
//     tl2.from('.fila-animada3', {
//       scrollTrigger: {
//         trigger: '.fila-animada3',
//         start: "top center",
//         end: ()=> '+=',
//         // markers: true,
//       },
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       stagger: .6,

//   },'-=1' );    
//   tl2.from('.fila-animada4', {
//     scrollTrigger: {
//       trigger: '.fila-animada',
//       start: "top center",
//       end: ()=> '+=',
//       // markers: true,
//     },
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     stagger: .6,

// }, '-=1');    