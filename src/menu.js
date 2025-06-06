import "./menu.css";

const hotelMenu = {
  Breakfast: {
    items: [
      {
        name: "Pancakes",
        price: 8,
        description: "Fluffy pancakes served with maple syrup.",
      },
      {
        name: "Omelette",
        price: 10,
        description: "Three-egg omelette with your choice of fillings.",
      },
      {
        name: "Toast",
        price: 5,
        description: "Two slices of toast with butter and jam.",
      },
    ],
    note: "Breakfast is served from 7:00 AM to 10:00 AM",
  },
  Lunch: {
    items: [
      {
        name: "Sandwich",
        price: 12,
        description: "Your choice of meat or vegetarian sandwich.",
      },
      {
        name: "Salad",
        price: 14,
        description:
          "Fresh salad with mixed greens and your choice of dressing.",
      },
      { name: "Soup", price: 9, description: "Homemade soup of the day." },
    ],
    note: "Lunch is served from 12:00 PM to 3:00 PM",
  },
  Dinner: {
    items: [
      {
        name: "Steak",
        price: 25,
        description:
          "Grilled steak served with mashed potatoes and vegetables.",
      },
      {
        name: "Pasta",
        price: 20,
        description: "Pasta with your choice of sauce.",
      },
      {
        name: "Fish",
        price: 22,
        description: "Pan-seared fish served with rice and vegetables.",
      },
    ],
    note: "Dinner is served from 6:00 PM to 10:00 PM",
  },
  Drinks: {
    items: [
      { name: "Coffee", price: 3 },
      { name: "Tea", price: 3 },
      { name: "Juice", price: 4 },
      { name: "Soda", price: 4 },
    ],
  },
};

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
