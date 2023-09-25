// //Llamado al tema de estudio
// const INPUT = document.getElementById("tema").value;
// const URL = `https://picsum.photos/seed/${INPUT}/200/300`;
// const LIST = document.getElementById("temasLista");

// // Función para traer las imágenes y guardar los datos
// function agregarTarea() {
//     fetch(URL)
//         .then(res => res.json())
//         .then(data => {
//             LIST.innerHTML += `<li>
// <div class="card" style="width: 18rem;">
//   <img src="${data}" class="card-img-top" alt="..">
//   <div class="card-body">
//     <p class="card-text">${INPUT}</p>
//   </div>
// </div>
// </li>`
//         })
// };

// // Evento del botón de agregar

// let btn = document.getElementById("agregarBtn");
// btn.addEventListener("click", () => {
//     agregarTarea();
// })



document.getElementById('agregarBtn').addEventListener('click', agregarTema);

function agregarTema() {
    const temaInput = document.getElementById('temaInput');
    const tema = temaInput.value;
    
    if(tema) {
        fetch(`https://picsum.photos/seed/${tema}/200/300`)  // Obtenemos una imagen de 200x200 px
        .then(response => response.blob())
        .then(imgBlob => {
            const imgUrl = URL.createObjectURL(imgBlob);
            mostrarTemaEnLista(tema, imgUrl);
            temaInput.value = '';  // Limpiamos el input
        })
        .catch(error => console.error('Hubo un error al obtener la imagen:', error));
    }
}

function mostrarTemaEnLista(tema, imgUrl) {
    const lista = document.getElementById('temasLista');
     lista.innerHTML += 
     `<div class="col-3">
        <div class="card" style="width: 18rem;">
            <img src="${imgUrl}" class="card-img-top" alt="Imagen para ${tema}">
            <div class="card-body">
            <p class="card-text">${tema}</p>
            </div>
            <button class="btn btn-secondary" onclick="completarTema(this)">Completar</button>
            <button class="btn btn-danger" onclick="eliminarTema(this)">Eliminar</button>
        </div>
     </div>`
}

function completarTema(btn) {
    const span = btn.previousElementSibling;
    span.style.textDecoration = 'line-through';
}

function eliminarTema(btn) {
    const listItem = btn.parentElement;
    listItem.remove();
}