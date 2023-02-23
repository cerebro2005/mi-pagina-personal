/* ****** Menu ****** */
((d)=>{
  const $btnMenu = d.querySelector('.menu-btn'),
        $menu = d.querySelector('.menu');

  $btnMenu.addEventListener('click', (e) =>{
    $btnMenu.firstElementChild.classList.toggle('none');/* entra a la lista de clases de boton e intercambiar la clase "none" */
    $btnMenu.lastElementChild.classList.toggle('none');
    $menu.classList.toggle('is-active');
  });

  d.addEventListener('click', (e)=>{
    if(!e.target.matches('.menu a')) return false

    $btnMenu.firstElementChild.classList.remove('none');/* entra a la lista de clases de boton borra la clase "none" al primer hijo y agrega al segundo hijo dicha clase */
    $btnMenu.lastElementChild.classList.add('none');
    /* Elimina la clase "is-active" para que desaparesca el menu */
    $menu.classList.remove('is-active');

  });
})(document);

/* ****** Contact Form ****** */
((d)=>{
  const $form = d.querySelector(".contact-form"),
        $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e)=>{
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/almeidamartinariel@gmail.com",{
      method:"POST",
      body: new FormData(e.target),
    })
    .then((res) => (res.ok ? res.json : Promise.reject(res)))
    .then(json=>{
      //console.log(json);      
      location.hash = "#gracias";
      $form.reset();
    })
    .catch(err =>{
      //console.log(err);
      let message = err.statusText || "Ocurrio un err al enviar, intenta nuevamente"
      $response.querySelector("h3").innerHTML = `Error ${err.staus}: ${message}`;
    }).finally(()=>{
      $loader.classList.add("none");
      setTimeout(() => {
        location.hash = "#close"
      }, 3000);
    });
  });
})(document);


/* https://cerebro2005.github.io/mi-pagina-personal*/