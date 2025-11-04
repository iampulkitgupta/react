/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      spacing: {
        // Add custom spacing here
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        // Add custom border radius here
        '4xl': '2rem',
      },
      fontFamily: {
        // Add custom fonts here
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here
    // e.g., require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}
