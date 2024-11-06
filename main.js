import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjxjGgc1_HHBUGoXM1kFq4aXiV--plwZE",
  authDomain: "pasarcemerlang-11fa3.firebaseapp.com",
  projectId: "pasarcemerlang-11fa3",
  storageBucket: "pasarcemerlang-11fa3.appspot.com",
  messagingSenderId: "390685080124",
  appId: "1:390685080124:web:6a69ed5fd39c3fc21da139",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarproduk() {
  const refDokumen = collection(db, "kasir");
  const kueri = query(refDokumen, orderBy("namaProduk"));
  const cuplikankueri = await getDocs(kueri);

  let hasil = []; // tes
  cuplikankueri.forEach((dok) => {

    
    hasil.push({
      id: dok.id,
      namaProduk: dok.data().namaProduk,
      harga: dok.data().harga,
      jumlah: dok.data().jumlah
    });
  });

  return hasil;
}
