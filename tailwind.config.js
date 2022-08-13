/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
     
    },
    colors: {
      'blue': '#007bff',
      'indigo': '#6610f2',
      'purple': '#6f42c1',
      'pink': '#e83e8c',
      'red': '#fd556d',
      'orange': '#fd7e14',
      'yellow': '#ffc107',
      'green': '#28a745',
      'teal': '#20c997',
      'cyan': '#17a2b8',
      'white': '#fff',
      'gray': '#969696',
      'gray-dark': '#343a40',
      'primary': '#57ccc3',
      'secondary': '#6c757d',
      'success': '#28a745',
      'info': '#17a2b8',
      'warning': '#ffc107',
      'danger': '#dc3545',
      'light': '#f8f9fa',
      'dark': '#343a40',
    }
  },
  plugins: [],
};