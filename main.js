document.addEventListener("DOMContentLoaded", () => {
  let btnContact = document.querySelector("#contact_us");
  let modalForm = document.querySelector("#modal-form");
  let btnClose = document.querySelector("#close-button");
  btnContact.addEventListener("click", (e) => {
    modalForm.classList.remove("hidden");
  });

  btnClose.addEventListener("click", (e) => {
    modalForm.classList.add("hidden");
  });
});

// Envoi des données du formulaire
document.querySelector("#form").addEventListener("submit", async (event) => {
  // comportement par défaut sur le formulaire, annulé grâce à la fonction preventDefault
  event.preventDefault();
  console.log("Soumission du formulaire OK");

  const data = {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  //   console.log(data);
  const response = await axios.post(
    "https://tripadvisclone.netlify.app/",
    data
  );
  console.log(response);

  if (response.status === 200) {
    alert("Merci, tout va bien");
  } else {
    alert("Une erreur est survenue");
  }
});
