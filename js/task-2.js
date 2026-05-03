const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const css = document.createElement("style");
css.innerHTML = `
  .gallery {
    display: flex;
    gap: 16px;
  }
  .gallery__item {
    flex: 1;
  }
  .gallery__item img {
    width: 100%;
    display: block;
  }
`;
document.head.appendChild(css);

const html = images
  .map(({ url, alt }) => `<li class="gallery__item"><img src="${url}" alt="${alt}"></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", html);