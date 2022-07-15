import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore';

import get from 'lodash/get';

import { KEYWORD, METADATA, LAST_UPDATE } from './constants';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRESTORE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRESTORE_APP_ID,
  measurementId: process.env.REACT_APP_FIRESTORE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getKeywordLastUpdate = async () => {
  const docRef = doc(db, KEYWORD, METADATA);
  const docSnap = await getDoc(docRef);
  const result = docSnap.data();
  const timestamp = get(result, LAST_UPDATE);
  return timestamp;
};

export const getAllKeywords = async () => {
  let payload = {};
  const querySnapshot = await getDocs(collection(db, KEYWORD));
  querySnapshot.forEach((doc) => {
    payload[doc.id] = doc.data();
  });
  return payload;
};


