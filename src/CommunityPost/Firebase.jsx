

/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyCt6gI7nUNLky9qYEMWQjiKWNsmB7sIOHY",
    authDomain: "agri-a1de9.firebaseapp.com",
    databaseURL: "https://agri-a1de9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "agri-a1de9",
    storageBucket: "agri-a1de9.appspot.com",
    messagingSenderId: "768062012580",
    appId: "1:768062012580:web:9c576fd9ac8ce625d8ba31",
    measurementId: "G-NQ78G2B747"
  };

const Firebase=initializeApp(firebaseConfig);
const database = Firebase.database();
const storage = Firebase.storage();

export { database, storage };

*/
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/8.9.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/8.9.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCt6gI7nUNLky9qYEMWQjiKWNsmB7sIOHY",
    authDomain: "agri-a1de9.firebaseapp.com",
    databaseURL: "https://agri-a1de9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "agri-a1de9",
    storageBucket: "agri-a1de9.appspot.com",
    messagingSenderId: "768062012580",
    appId: "1:768062012580:web:9c576fd9ac8ce625d8ba31",
    measurementId: "G-NQ78G2B747"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };

*/


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCt6gI7nUNLky9qYEMWQjiKWNsmB7sIOHY",
    authDomain: "agri-a1de9.firebaseapp.com",
    databaseURL: "https://agri-a1de9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "agri-a1de9",
    storageBucket: "agri-a1de9.appspot.com",
    messagingSenderId: "768062012580",
    appId: "1:768062012580:web:9c576fd9ac8ce625d8ba31",
    measurementId: "G-NQ78G2B747"
};

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const storage = firebase.storage();

export { database, storage };








