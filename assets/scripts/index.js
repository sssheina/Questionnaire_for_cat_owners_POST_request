class Cat {
  constructor(catName, sex, breed, feed) {
    this.catName = catName;
    this.sex = sex;
    this.breed = breed;
    this.feed = feed;
  }
}

function checkForm() {
  document.querySelector(".errorMax").innerHTML = "";
  let nameCat = document.getElementById("catName").value;

  if (nameCat.length > 10) {
    document.querySelector(
      ".errorMax"
    ).innerHTML = `Maxlength of "Cat's name" field should be not more than 10`;
  } else sendForm(nameCat);
}

function sendForm(nameCat) {
  let sexCat = document.querySelectorAll('input[type="radio"]:checked');
  let breedCat = document.querySelector("#breed").value;
  let feedCat = document.querySelectorAll('input[type="checkbox"]:checked');
  let feedChecked = "";
  let form = document.querySelector("form");

  for (let i = 0; i < sexCat.length; i++) {
    if (sexCat[i].value == "female") {
      sexCat = "Female";
    }
    if (sexCat[i].value == "male") sexCat = "Male";
  }
  for (let x = 0; x < feedCat.length; x++) {
    feedChecked += feedCat[x].value;
    if (x != feedCat.length - 1) feedChecked += ", ";
  }
  let cat = new Cat(nameCat, sexCat, breedCat, feedChecked);

  console.log(cat);

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
    })
    .catch((error) => console.log(error));
  console.log(form);
}