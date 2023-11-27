const cambiarTitulo = () => {
  const titulo = document.querySelector(`h1`);
  // const titulo = document.querySelector(`#algunId`);
  // const titulo = document.querySelector(`.nuevoTitulo`);
  // const muchosParrafos = document.querySelectorAll(`p`);
  // const muchosParrafos = document.getElementById(`nuevoTitulo`);
  // const muchosParrafos = document.getElementsByClassName(`nuevoTitulo`);
  // const muchosParrafos = document.getElementsByTagName(`p`);
  console.log(titulo);
  // titulo.innerText = `Nuevo titulo de JS`;
  titulo.innerHTML = `Nuevo titulo de <b>JS</b>`;
  titulo.className = `display-3 text-primary`;
};

const verMas = () => {
  console.log(`Desde la funcion ver mas`);
  //crear parrafo nuevo
  const parrafoNuevo = document.createElement(`p`);
  parrafoNuevo.innerText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ratione, amet
  dolores maiores cupiditate optio beatae repudiandae eos numquam. Vel earum,
  expedita sit magnam veniam aperiam deserunt doloribus aliquam quam maiores
  delectus ipsa ex cumque placeat harum reiciendis? Atque vitae saepe voluptatibus
  iusto, illum odio dignissimos, praesentium tempora quod optio nisi. Veritatis
  ipsa voluptatum perspiciatis totam repudiandae a explicabo, tenetur soluta,
  optio sit ad quae expedita aliquam ipsum dolor impedit reprehenderit labore at.
  Reiciendis enim aliquam reprehenderit voluptatibus autem! Consequuntur unde
  cumque sit corporis ullam provident, laudantium est dolorem neque perferendis.
  In laboriosam, fuga qui delectus sed ea sint id asperiores fugiat dicta. Porro
  quos voluptatum libero aut, consectetur excepturi nisi voluptatibus
  reprehenderit deserunt similique, non accusamus quasi voluptates distinctio.
  Autem incidunt cupiditate unde maxime, officia assumenda! Neque aperiam totam
  molestias nobis perferendis ullam maiores laudantium eos a, ducimus
  exercitationem. Eius ea quas accusamus optio voluptas nihil, debitis magnam
  similique praesentium illo minima quasi, expedita harum, ipsum officiis est
  rerum fugiat voluptatem tempore iusto dolores! Doloremque, quo illo itaque
  necessitatibus pariatur illum modi, debitis placeat fugit corrupti, veniam minus
  error sapiente aliquid eveniet fugiat ullam sint adipisci temporibus odio. Est
  error delectus similique optio pariatur debitis nulla minus, dolore assumenda
  quasi aspernatur rem, facere ad iusto nam voluptatem atque, sunt natus! Dolorum
  magni, error hic quisquam, autem quis sit, ab vero quidem dignissimos fugiat
  laboriosam tempore? Eligendi, ex magni vero itaque excepturi fugit dolorum atque
  adipisci voluptate facilis officia, at nulla modi dolor harum sit ratione amet
  eius quas aspernatur?`;
  parrafoNuevo.className = `lead`;

  //traigo mi nodo padre o elemnto padre
  const seccion = document.querySelector(`#contenedorPadre`);
//   console.log(seccion);
  //agregar un nodo hijo
  //seccion.appendChild(parrafoNuevo); //se agrega el parrafo pero como ultimo hijo, al final
  //seccion.prepend(parrafoNuevo); //se agrega al principio, como primer hijo
  seccion.insertBefore(parrafoNuevo, btnVerMas[3]);
};

const btnVerMas = document.getElementsByTagName(`button`);
console.log(btnVerMas[3]);

// btnVerMas[3].addEventListener(`click`, ()=>{ verMas(`dsa`, `asd`, 23)});
btnVerMas[3].addEventListener(`click`, verMas);
