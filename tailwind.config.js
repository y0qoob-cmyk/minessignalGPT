/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'large': '1440px',
      'desktop': '1280px',
      'laptop': '1024px',
      'tablet': '992px',
      'phone': '576px',
      'small': '400px',


    },
    extend: {
      backgroundImage: {
        'radial-center': 'radial-gradient(circle, #151D2F, #090F1E, #090F1E,#090F1E)',
      },
      boxShadow: {
        'custom': '0px 0px 25px rgba(240, 240, 240, 0.3)', // Кастомная тень
       'white': '0 4px 6px rgba(255, 255, 255, 0.5)',
      },
      animation: {
        gradient: 'gradient 7s ease infinite', // Замедляем анимацию до 7 секунд
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 50%', backgroundSize: '150%' }, // Сужаем размер цвета
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 50%', backgroundSize: '150%' }, // Цвет сужается перед возвратом
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      
      backgroundSize: {
        'gradient-size': '200%', // Размер фона
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
