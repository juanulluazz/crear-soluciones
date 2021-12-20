
const img = document.querySelectorAll(".imagenPrueba");



for(var i=0; i < img.length; i++) {

    img[i].addEventListener("click", ()=>{
        console.log("mediste click");
       img[i].classList.toggle('imagenPruebaAlterada');
      
      } ); 
}



{/* <div class=" container">
    <div class="row"  id="contenedor-imagenes">
        <div class="col ">
            <img class="img-fluid  imagenPrueba "  src="img/deckpvc-inferior-uno.jpeg" alt="">
        </div>
        <div class="col ">
            <img class="img-fluid imagenPrueba" src="img/deckpvc-inferior-uno.jpeg" alt="">

        </div>
        <div class="col ">
            <img class="img-fluid imagenPrueba" src="img/deckpvc-inferior-uno.jpeg" alt="">

        </div>
    </div>

        <p class="text-center">
            Ampliaciones Domiciliarias
        </p>

</div> */}
