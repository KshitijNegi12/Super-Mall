firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function fetchCategories() {
  try {
    const categoriesSnapshot = await db.collection("categories").get();
    const categories = categoriesSnapshot.docs.map(doc => doc.data());
    const categorySelect = document.querySelector("#category-select");
    categorySelect.innerHTML = categories.map(category => `<option value="${category.name}">${category.name}</option>`).join('');
  } catch (error) {
    console.error("Error Fetching Categories:", error);
  }
}

async function fetchShops() {
  try {
    const shopsSnapshot = await db.collection("shops").get();
    const shops = shopsSnapshot.docs.map(doc => doc.data());
    const shopList = document.querySelector("#shop-list");
    shopList.innerHTML = shops.map(shop => `<li>${shop.name} - Floor: ${shop.floor} - Category: ${shop.category}</li>`).join('');
  } catch (error) {
    console.error("Error Fetching Shops:", error);
  }
}

async function fetchOffers() {
  try {
    const offersSnapshot = await db.collection("offers").get();
    const offers = offersSnapshot.docs.map(doc => doc.data());
    const offerList = document.querySelector("#offer-list");
    offerList.innerHTML = offers.map(offer => `<li>${offer.title} - ${offer.discount}% Discount</li>`).join('');
  } catch (error) {
    console.error("Error Fetching Offers:", error);
  }
}

async function filterProducts(criteria) {
  try {
    let query = db.collection("products");
    Object.keys(criteria).forEach(key => {
      query = query.where(key, "==", criteria[key]);
    });
    const productsSnapshot = await query.get();
    const products = productsSnapshot.docs.map(doc => doc.data());
    const productList = document.querySelector("#product-list");
    productList.innerHTML = products.map(product => `<li>${product.name} - ${product.price}</li>`).join('');
  } catch (error) {
    console.error("Error Filtering Products:", error);
  }
}

const categorySelect = document.querySelector("#category-select");
categorySelect.addEventListener("change", () => {
  const selectedCategory = categorySelect.value;
  filterProducts({ category: selectedCategory });
});

window.addEventListener("load", () => {
  fetchCategories();
  fetchShops();
  fetchOffers();
});
