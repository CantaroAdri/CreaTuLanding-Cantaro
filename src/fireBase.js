import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEXRHhrPV1xJ5lL_7r8uME4tmeo4ITEXA",
  authDomain: "italy-cell.firebaseapp.com",
  projectId: "italy-cell",
  storageBucket: "italy-cell.appspot.com",
  messagingSenderId: "456141198325",
  appId: "1:456141198325:web:291609d09382deeb1306bc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para traer productos
export const getProductos = async () => {
  const productosCol = collection(db, "items");
  const snapshot = await getDocs(productosCol);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
