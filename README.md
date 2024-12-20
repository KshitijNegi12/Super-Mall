# SuperMall Web App

SuperMall Web App is a platform enabling merchants to advertise and sell products globally. It provides admin functionalities to manage shops, categories, and offers, and user functionalities to explore and purchase products efficiently.


## Features
### Admin Features
- Login securely to manage the platform.
- Create and manage shop details.
- Manage offers and categories.
- Assign shops to floors and categories.

### User Features
- View shop and product details.
- Compare products by cost and features.
- Explore floor- and category-wise shops.
- Filter and search for products.


### Firebase Configuration
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable Firestore in the "Build > Firestore Database" section.
4. Enable Authentication and configure Email/Password authentication.
5. Copy your Firebase configuration from the project settings and replace the placeholders in `admin.js` and `user.js`.

### Initialize Firebase
Replace placeholders in the Firebase configuration:
```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```


## File Structure
- **admin.html**: Admin portal interface.
- **user.html**: User portal interface.
- **admin.css**: Styles for the admin interface.
- **user.css**: Styles for the user interface.
- **admin.js**: Admin functionalities.
- **user.js**: User functionalities.

