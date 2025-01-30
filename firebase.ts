import { initializeApp,  } from "firebase/app";
import { getAnalytics, logEvent, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhf4ToZoQW5DQcX8Pug72yGiZ1bArZUOw",
  authDomain: "carrentalservice-b3183.firebaseapp.com",
  projectId: "carrentalservice-b3183",
  storageBucket: "carrentalservice-b3183.firebasestorage.app",
  messagingSenderId: "666485444101",
  appId: "1:666485444101:web:fa8233ce8c4d97604a566c",
  measurementId: "G-1LZ5ZYC849",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if analytics is supported (client-side only)
let analytics: Analytics;
if (typeof window !== "undefined" && typeof window.document !== "undefined") {
  analytics = getAnalytics(app);
}

export { analytics, logEvent };
