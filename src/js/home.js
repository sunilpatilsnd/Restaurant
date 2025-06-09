import "../css/home.css";
import homeImage from "../img/restaurant.jpg";

const homeTxtArr = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nunc risus. Cras aliquet et sapien sit amet efficitur. Nunc vel mi sit amet dui convallis blandit et nec leo. Vivamus purus lacus, interdum a sapien at, ullamcorper luctus ipsum. Morbi sapien felis, eleifend a elit id, vehicula scelerisque odio. Nullam magna neque, rhoncus non nunc ut, placerat fermentum erat. ",
  "Cras vestibulum dapibus nisi, nec rhoncus elit mattis tincidunt. Suspendisse et nisi diam. Nulla sollicitudin vel risus et pharetra. Mauris at tempor nisl. Integer pharetra odio sed nisl pellentesque, vel malesuada justo tristique. Nullam consequat dui sit amet porttitor faucibus. Donec tincidunt felis tempor turpis efficitur, sit amet consequat felis aliquam. ",
  "Nullam ac orci ligula. Sed sed hendrerit quam. Curabitur malesuada diam quis quam sollicitudin, in aliquet nulla ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec odio tellus, aliquet vel iaculis quis, scelerisque dapibus metus. Morbi fermentum, sem lacinia tempor efficitur, ipsum risus dictum lacus, in iaculis urna lacus id turpis. Class aptent taciti sociosqu ad litora ",
];

const homeContent = document.createElement("div");
homeContent.id = "home";

const heading = document.createElement("h2");
heading.classList.add("heading");
heading.textContent = "My Restaurant";

homeContent.appendChild(heading);

const txtContainer = document.createElement("div");
txtContainer.classList.add("text-content");

homeTxtArr.forEach((item) => {
  const para = document.createElement("p");
  para.textContent = item;
  txtContainer.appendChild(para);
});

const imgContainer = document.createElement("div");
imgContainer.classList.add("image-sec");
const myImage = new Image(500, 320);
myImage.src = homeImage;
myImage.alt = "Restaurant Image";
imgContainer.appendChild(myImage);

homeContent.appendChild(txtContainer);
homeContent.appendChild(imgContainer);

export { homeContent };
