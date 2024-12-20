firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

function logAction(action, details) {
  db.collection("logs").add({
    action,
    details,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#admin-email").value;
  const password = document.querySelector("#admin-password").value;
  try {
    await auth.signInWithEmailAndPassword(email, password);
    logAction("Admin Login", `Admin logged in with email: ${email}`);
    alert("Login successful!");
    document.querySelector("#login-section").style.display = "none";
    document.querySelector("#admin-panel").style.display = "block";
  } catch (error) {
    console.error("Login Error:", error);
    alert("Login failed. Please check your credentials.");
  }
});

const shopForm = document.querySelector("#shop-form");
shopForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const shopData = {
    name: document.querySelector("#shop-name").value,
    floor: parseInt(document.querySelector("#shop-floor").value),
    category: document.querySelector("#shop-category").value,
    owner: document.querySelector("#shop-owner").value,
  };
  try {
    await db.collection("shops").add(shopData);
    logAction("Create Shop Details", `Shop created: ${shopData.name}`);
    alert("Shop added successfully!");
    shopForm.reset();
  } catch (error) {
    console.error("Error Creating Shop:", error);
    alert("Failed to add shop.");
  }
});

const offerForm = document.querySelector("#offer-form");
offerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const offerData = {
    title: document.querySelector("#offer-title").value,
    discount: parseFloat(document.querySelector("#offer-discount").value),
    shopId: document.querySelector("#offer-shop-id").value,
  };
  try {
    await db.collection("offers").add(offerData);
    logAction("Manage Offer Details", `Offer added: ${offerData.title}`);
    alert("Offer added successfully!");
    offerForm.reset();
  } catch (error) {
    console.error("Error Adding Offer:", error);
    alert("Failed to add offer.");
  }
});

const logoutButton = document.querySelector("#logout-button");
logoutButton.addEventListener("click", async () => {
  try {
    await auth.signOut();
    logAction("Admin Logout", "Admin logged out");
    alert("Logged out successfully!");
    document.querySelector("#admin-panel").style.display = "none";
    document.querySelector("#login-section").style.display = "block";
  } catch (error) {
    console.error("Logout Error:", error);
    alert("Logout failed.");
  }
});
