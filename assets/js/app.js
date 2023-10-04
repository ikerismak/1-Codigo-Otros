const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name");
const $b = document.querySelector(".blog");
const $l = document.querySelector(".location");

//necesitas async para usar await
async function displayUser(username) {
  $n.textContent = "cargando...";

  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    let data = await response.json();

    // console.log(data)

    $n.textContent = data.name;

    console.log($n);

    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (error) {
    console.log("Error trying to get data");
  }

  //Recibir la informacion en formato json
  // console.log(data);
  // console.log(data.name);
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski").catch(handleError);
