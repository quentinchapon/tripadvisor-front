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

  // Envoi des données du formulaire
  let form = document.querySelector("#contact-form");
  console.log(form);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#mail").value,
      message: document.querySelector("#msg").value,
    };
    console.log(data);
    const response = await axios.get(
      "https://tripadvisor-clone.herokuapp.com/",
      data
    );

    console.log(`Réponse Axios : ${response}`);

    if (response.status === 200) {
      alert("OKKKKKKK");
    } else {
      alert("KOOOOOOO");
    }
  });
});
