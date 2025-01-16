/** @type {import('tailwindcss').Config} */
module.exports = {
  // Menggunakan opsi content untuk mendefinisikan sumber file
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Sesuaikan dengan struktur file Anda
  ],
  // Menetapkan darkMode ke "media" jika masih perlu dark mode
  darkMode: "media", // Atau hapus baris ini jika tidak perlu darkMode
  theme: {
    extend: {},
  },
  plugins: [],
};
