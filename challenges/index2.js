const allItems = 'https://fakestoreapi.com/products';
const cart = [];

// DOM elements
const itemDisplay = document.getElementById('sale-items');
const jewelery = document.getElementById('jewelery');
const electronics = document.getElementById('electronics');
const mensWear = document.getElementById('men\'s clothing');
const womensWear = document.getElementById('women\'s clothing');
const theStore = document.getElementById('theStore');

// Functions
const removeElements = (dickfer) => {
  while (dickfer.firstChild) {
    dickfer.removeChild(dickfer.firstChild);
  }
};

const displayCards = (storeItems) => {
  removeElements(itemDisplay);

  storeItems.map((obj) => {
    const div = document.createElement('div');
    const card = document.createElement('div');
    const img = document.createElement('img');
    const accordion = document.createElement('div');
    const descriptionAccordion = document.createElement('div');
    const descriptionAccordionHeader = document.createElement('h5');
    const descriptionAccordionBody = document.createElement('div');
    const priceAccordion = document.createElement('div');
    const priceAccordionHeader = document.createElement('h5');
    const priceAccordionBody = document.createElement('div');
    const toggleButton = document.createElement('button');
    const body = document.createElement('div');
    const title = document.createElement('h5');
    const p = document.createElement('p');
    const btn1 = document.createElement('a');

    // Set classes and IDs for accordion elements
    accordion.setAttribute('id', 'accordionExample');
    descriptionAccordion.setAttribute('class', 'accordion-item');
    descriptionAccordionHeader.setAttribute('class', 'accordion-header');
    descriptionAccordionHeader.setAttribute('id', `descriptionHeading` + obj.id);
    descriptionAccordionBody.setAttribute('id', `descriptionCollapse` + obj.id);
    descriptionAccordionBody.style.display = 'none'; // Initially hide the accordion body
    priceAccordion.setAttribute('class', 'accordion-item');
    priceAccordionHeader.setAttribute('class', 'accordion-header');
    priceAccordionHeader.setAttribute('id', `priceHeading` + obj.id);
    priceAccordionBody.setAttribute('id', `priceCollapse` + obj.id);
    priceAccordionBody.style.display = 'none'; // Initially hide the accordion body
    toggleButton.setAttribute('class', 'btn btn-outline-primary float-right');
    toggleButton.textContent = '+';

    // Create accordion content
    descriptionAccordionHeader.textContent = 'Description';
    descriptionAccordionBody.textContent = obj.description;
    priceAccordionHeader.textContent = 'Price';
    priceAccordionBody.textContent = `$${obj.price}`;

    // Append accordion elements to accordion
    descriptionAccordion.appendChild(descriptionAccordionHeader);
    descriptionAccordion.appendChild(descriptionAccordionBody);
    priceAccordion.appendChild(priceAccordionHeader);
    priceAccordion.appendChild(priceAccordionBody);
    accordion.appendChild(descriptionAccordion);
    accordion.appendChild(priceAccordion);

    // Append accordion to card
    card.appendChild(img);
    card.appendChild(accordion);
    card.appendChild(toggleButton); // Add toggle button to card
    card.appendChild(body);

    // Set remaining card elements
    div.className = 'col';
    card.className = 'card';
    img.src = obj.image;
    img.alt = obj.title;
    body.className = 'card-body';
    title.className = 'card-title';
    title.textContent = obj.title;
    p.className = 'card-text';
    btn1.className = 'btn btn-outline-primary';
    btn1.textContent = "Add to Cart";
    btn1.onclick = () => {
      console.log(cart);
      let item = {
        id: obj.id,
        title: obj.title,
        price: obj.price,
        quantity: 1,
      };
      submitToCart(item);
    };

    // Append remaining card elements
    p.appendChild(btn1);
    body.appendChild(title);
    body.appendChild(p);
    card.appendChild(body);
    itemDisplay.appendChild(card);
  });
};

const submitToCart = (item) => {
  const itemExists = cart.find((cartItem) => cartItem.id === item.id);
  if (itemExists) {
    itemExists.quantity++;
  } else {
    cart.push(item);
  }
  console.log('Cart updated:', cart);
};


const fakeStore = async(endPoint) => {
    try {
        if (endPoint) {
        let res = await fetch(`${allItems}${endPoint}`);
        let results = await res.json()
        displayCards(results);
        console.log(results);
    } else {
        let res = await fetch(allItems);
        let results = await res.json();
        displayCards(results);
    }
        } catch (err) {
        console.error(err);
        }
    
    
}

// Event listeners
window.onload = function() {
  fakeStore('');
};
jewelery.addEventListener('click', (e) => {
  fakeStore('/category/jewelery');
});
electronics.addEventListener('click', (e) => {
    fakeStore('/category/electronics')
});
mensWear.addEventListener('click', (e) => {
    fakeStore(`/category/men's clothing`)
});
womensWear.addEventListener('click', (e) => {
    fakeStore(`/category/women's clothing`)
});
theStore.addEventListener('click', (e) => {
    fakeStore(``)
});
