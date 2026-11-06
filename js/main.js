/*** Code JS pour le catalogue (les pages de produits) ************************/

// Gestion du formulaire de tri et de filtre
document.querySelectorAll("form.controle select").forEach(
  eltSelect => eltSelect.addEventListener("change",
    evt => evt.target.form.submit()
  )
);


// document.querySelectorAll("form.controle select").forEach(
//   eltSelect => eltSelect.addEventListener("change",
//     evt => { 
//       evt.preventDefault();
//       gererProduitsAsyncrone(evt.target.form);
//     }
//   )
// );

// function gererProduitsAsyncrone(frm) {
//   let paramUrl = new URLSearchParams(new FormData(frm).toString());
//   console.log(paramUrl);
//   let response = fetch("async/teeshirts.async.php?" + paramUrl);
// }