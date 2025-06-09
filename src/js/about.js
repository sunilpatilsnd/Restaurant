import "../css/about.css";

const textContent = [
  "Praesent commodo venenatis urna vitae sagittis. Vestibulum enim est, convallis vitae eros eget, molestie euismod ante. Vestibulum non luctus elit. Integer eu risus ac justo accumsan scelerisque non sit amet est. Maecenas quis elementum ante, vel feugiat dui. Suspendisse congue odio quis nulla consequat porta. Curabitur porttitor, leo sit amet pulvinar dignissim, diam mi semper risus, eget iaculis lorem nisl et dui. Maecenas mattis, risus eget ullamcorper aliquet, eros mi fringilla justo, quis condimentum felis neque ut nisl. Donec finibus dui vitae lorem ornare sollicitudin. Pellentesque aliquet leo at aliquet consequat.",
  "Proin sed eros erat. Nulla et dignissim dui. Integer dapibus ex sit amet luctus pellentesque. Nunc egestas justo eu metus lobortis, ac tincidunt orci tempor. Nam vulputate velit id nisl euismod pulvinar. Aenean ac purus eget purus fermentum mollis eget et nunc. Maecenas sit amet tincidunt dui. Curabitur fringilla elementum orci, ut tempor dolor aliquet sit amet. Quisque lorem dui, blandit sed turpis vel, porttitor hendrerit nunc. In porta dolor id arcu porttitor, eu consequat quam vehicula. Pellentesque ac ipsum risus.",
  "Curabitur scelerisque dapibus ligula, sed condimentum est cursus eget. Maecenas fermentum lorem id porttitor efficitur. Pellentesque posuere dapibus pretium. In diam turpis, fringilla quis leo ac, maximus maximus diam. Suspendisse ac massa eu dolor lobortis molestie. Ut quis ultrices felis. Donec venenatis, nisl eget rhoncus volutpat, leo quam porttitor nisl, id lacinia ligula urna a purus. Integer lacinia vitae lacus a placerat. Aenean hendrerit facilisis sapien, eget ullamcorper mauris ornare at. Etiam quis sem est. Aliquam lacus quam, consectetur a leo vitae, laoreet scelerisque metus. Morbi turpis justo, imperdiet vitae dui at, euismod fringilla odio. Vivamus vulputate finibus tincidunt. Duis rutrum nulla diam, auctor aliquam mi tristique id. Nunc elementum, lorem vel pretium luctus, arcu arcu iaculis ex, eget gravida odio mauris nec tortor. Aenean sodales pellentesque elit, at euismod tellus maximus et.",
  "Donec tincidunt congue nisl, nec cursus diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque libero risus, vulputate eget eleifend ac, consectetur a odio. Cras nisi odio, ornare vel volutpat ac, consectetur sed libero. Curabitur et quam sapien. Integer ut dui vehicula, facilisis erat eu, sagittis tortor. Curabitur ac metus ac ipsum fermentum semper eu vitae magna.",
  "Mauris ultricies, orci sit amet aliquam luctus, nisi turpis volutpat est, interdum luctus augue tortor eget magna. Donec lectus ex, rutrum eu ornare eget, facilisis sit amet elit. Maecenas dictum ultrices purus sed venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eget est quis lacus bibendum condimentum. Etiam blandit pretium turpis, non tristique lacus vehicula quis. Ut iaculis turpis ac velit pretium sagittis. Morbi fermentum convallis sapien nec efficitur. Phasellus blandit aliquet viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];

const aboutContent = document.createElement("div");
aboutContent.classList.add("about");

const heading = document.createElement("h2");
heading.textContent = "About My Restaurant";

aboutContent.appendChild(heading);

textContent.forEach((item) => {
  const txt = document.createElement("p");
  txt.textContent = item;
  aboutContent.appendChild(txt);
});

export { aboutContent };
