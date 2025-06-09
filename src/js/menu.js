import "../css/menu.css";
import data from "../menu.json";

const hotelMenu = data;

const menuContent = document.createElement("div");
menuContent.id = "hotelMenu";

const heading = document.createElement("h2");
heading.textContent = "My Restaurant Menu";

const breakfast = document.createElement("div");
const lunch = document.createElement("div");
const dinner = document.createElement("div");
const drinks = document.createElement("div");

// console.log(hotelMenu.Breakfast);
breakfast.id = "breakfast";
lunch.id = "lunch";
dinner.id = "dinner";
drinks.id = "drinks";

const breakfastHeading = document.createElement("h3");
breakfastHeading.textContent = "Breakfast";

const lunchHeading = document.createElement("h3");
lunchHeading.textContent = "Lunch";

const dinnerHeading = document.createElement("h3");
dinnerHeading.textContent = "Dinner";

const drinksHeading = document.createElement("h3");
drinksHeading.textContent = "Drinks";

breakfast.appendChild(breakfastHeading);
lunch.appendChild(lunchHeading);
dinner.appendChild(dinnerHeading);
drinks.appendChild(drinksHeading);

const breakfastItems = document.createElement("div");
breakfastItems.classList.add("breakfastItems");

const lunchItems = document.createElement("div");
lunchItems.classList.add("lunchItems");

const dinnerItems = document.createElement("div");
dinnerItems.classList.add("dinnerItems");

const drinksItems = document.createElement("div");
drinksItems.classList.add("drinksItems");

hotelMenu.Breakfast.items.forEach((item) => {
  const container = document.createElement("div");
  container.classList.add("item");

  const name = document.createElement("h3");
  name.textContent = item.name;

  const price = document.createElement("p");
  price.textContent = `Price: ${item.price}$`;
  price.classList.add("price");

  const description = document.createElement("p");
  description.textContent = item.description;

  container.appendChild(name);
  container.appendChild(price);
  container.appendChild(description);
  breakfastItems.appendChild(container);
});

hotelMenu.Lunch.items.forEach((item) => {
  const container = document.createElement("div");
  container.classList.add("item");

  const name = document.createElement("h3");
  name.textContent = item.name;

  const price = document.createElement("p");
  price.textContent = `Price: ${item.price}$`;
  price.classList.add("price");

  const description = document.createElement("p");
  description.textContent = item.description;

  container.appendChild(name);
  container.appendChild(price);
  container.appendChild(description);
  lunchItems.appendChild(container);
});

hotelMenu.Dinner.items.forEach((item) => {
  const container = document.createElement("div");
  container.classList.add("item");

  const name = document.createElement("h3");
  name.textContent = item.name;

  const price = document.createElement("p");
  price.textContent = `Price: ${item.price}$`;
  price.classList.add("price");

  const description = document.createElement("p");
  description.textContent = item.description;

  container.appendChild(name);
  container.appendChild(price);
  container.appendChild(description);
  dinnerItems.appendChild(container);
});

hotelMenu.Drinks.items.forEach((item) => {
  const container = document.createElement("div");
  container.classList.add("item");

  const name = document.createElement("h3");
  name.textContent = item.name;

  const price = document.createElement("p");
  price.textContent = `Price: ${item.price}$`;
  price.classList.add("price");

  container.appendChild(name);
  container.appendChild(price);

  drinksItems.appendChild(container);
});

const breakfastNote = document.createElement("p");
breakfastNote.classList.add("note");
breakfastNote.textContent = hotelMenu.Breakfast.note;

const lunchNote = document.createElement("p");
lunchNote.classList.add("note");
lunchNote.textContent = hotelMenu.Lunch.note;

const dinnerNote = document.createElement("p");
dinnerNote.classList.add("note");
dinnerNote.textContent = hotelMenu.Dinner.note;

breakfast.appendChild(breakfastItems);
lunch.appendChild(lunchItems);
dinner.appendChild(dinnerItems);
drinks.appendChild(drinksItems);

breakfast.appendChild(breakfastNote);
lunch.appendChild(lunchNote);
dinner.appendChild(dinnerNote);

menuContent.appendChild(heading);
menuContent.appendChild(breakfast);
menuContent.appendChild(lunch);
menuContent.appendChild(dinner);
menuContent.appendChild(drinks);

export { menuContent };
