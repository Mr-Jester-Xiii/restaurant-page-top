import chickenImg from "./images/chicken.jpeg";
import chilliImg from "./images/chilli.jpeg";
import classicImg from "./images/classic.jpeg";
import dirtyImg from "./images/dirty.jpeg";
import doubleImg from "./images/double.jpeg";
import veggieImg from "./images/veggie.jpeg";

const menuData = [
  {
    name: "Classic",
    description:
      "A classic burger, single patty, fried onions, american cheese.",
    image: classicImg,
    price: "£12.99",
  },
  {
    name: "Double",
    description:
      "Our classic burger with a double patty, fried onions, american cheese.",
    image: doubleImg,
    price: "£15.99",
  },
  {
    name: "Dirty Double",
    description:
      "Two patties, one beef, one fried chicken, pickles, onions and melted cheese sauce",
    image: dirtyImg,
    price: "£17.99",
  },
  {
    name: "Chicken",
    description:
      "A single fried chicken breast, fresh lettuce, tomatoes and zesty mayo.",
    image: chickenImg,
    price: "£12.99",
  },
  {
    name: "Chilli",
    description:
      "A single beef burger, with crispy fried onions, cheese, lettuce and spicy tomato sauce",
    image: chilliImg,
    price: "£15.99",
  },
  {
    name: "Veggie",
    description: "One veggie patty, lettuce, tomato, red onions and cress",
    image: veggieImg,
    price: "£12.99",
  },
];

function renderMenu() {
  const container = document.getElementById("content");
  const gridWidth = 3;
  const gridRows = [];
  for (let i = 0; i < menuData.length; i += gridWidth) {
    gridRows.push(menuData.slice(i, i + gridWidth));
  }

    const row = Object.assign(document.createElement("div"), {
      className: "row",
    });

    menuData.forEach((item) => {
      const col = Object.assign(document.createElement("div"), {
        className: "col",
      });
      const card = Object.assign(document.createElement("div"), {
        className: "card mb-5",
      });
      Object.assign(card.style, {
        width: '350px'
      });
      const img = Object.assign(document.createElement("img"), {
        classList: "card-img-top",
        src: item.image,
        alt: `${item.name} image`
      });
      Object.assign(img.style, {
        width: '350px',
        height: '250px',
        objectFit: 'cover'
      });
      card.appendChild(img);

      const cardBody = Object.assign(document.createElement("div"), {
        className: 'card-body'
      });
      const title = Object.assign(document.createElement("h5"), {
        className: 'card-title',
        innerText: item.name
      });
      cardBody.appendChild(title);

      const description = Object.assign(document.createElement("p"), {
        className: 'card-text',
        innerText: item.description
      });
      cardBody.appendChild(description);

      const price = Object.assign(document.createElement("h5"), {
        classname: 'border-top',
        innerText: `${item.price}`
      });
      cardBody.appendChild(price);

      card.appendChild(cardBody);
      col.appendChild(card);
      row.appendChild(col);
    container.appendChild(row);
  });
}

export { renderMenu };
