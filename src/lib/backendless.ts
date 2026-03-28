// src/lib/backendless.ts
import Backendless from "backendless";

// DEBUG ENV
console.log("FULL ENV:", import.meta.env);
console.log("APP_ID:", import.meta.env.VITE_BACKENDLESS_APP_ID);
console.log("API_KEY:", import.meta.env.VITE_BACKENDLESS_API_KEY);

const APP_ID = import.meta.env.VITE_BACKENDLESS_APP_ID as string;
const API_KEY = import.meta.env.VITE_BACKENDLESS_API_KEY as string;

if (!APP_ID || !API_KEY) {
  throw new Error("Backendless env belum diset!");
}

Backendless.initApp(APP_ID, API_KEY); 

export default Backendless;