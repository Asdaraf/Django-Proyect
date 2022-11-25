const MyApp = {
  initialize: () => {
    const pubDateInput = document.getElementById("id_pub_date");
    pubDateInput.addEventListener('input', (event) => {
        console.log("Cambio el valor del input");
        const albumDate = new Date(event.target.value);
        const now = new Date();
        if (albumDate <= now) {
            console.log("Fecha correcta");
            event.target.setCustomValidity("");
        } else {
            console.log("Fecha incorrecta");
            event.target.setCustomValidity("Solo se aceptan fechas que no esten en el futuro");
        }
    })
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'interactive') {
      MyApp.initialize();
    }
  });
} else {
  MyApp.initialize();
}