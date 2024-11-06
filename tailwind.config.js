/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "color-1" : "#757575",
        "color-2" : "#9054F7",
        "color-3" : "#F3F3F3",
        "color-4" : "rgba(255, 255, 255, 0.4)",
        "color-5" : "#CABBFC",
        "color-6" : "rgba(255, 255, 255, 0.2)",
        "color-7" : "rgba(0, 0, 0, 0.12)",
        "color-8" : "#101828",
        "color-9" : "#F5F5F5",
        "color-10" : "#333",
        "color-11" : "#1E1E1E",
        "color-12" : '#007BFF',
        "color-13" : "rgba(243, 243, 243, 0.8)",
        "color-14" : '#475467',
        "color-15" : "rgba(0,0,0,.55)",
        "color-16" : '#344054',
        "color-17" : '#dfe3e7'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #9054F7 0%, #2E8EF5 228.18%);',
        "custom-gradient-2" : 'linear-gradient(90deg, #7D37F6 0%, #CC41F6 228.18%)',
        'custom-gradient-3': 'linear-gradient(90deg, #9054F7 0%, #2E8EF5 139.9%)',
        'custom-gradient-4' : 'linear-gradient(180deg, #9063F7 0%, #4E29F5 100%)',
        'custom-gradient-5' : 'linear-gradient(179deg, #FFF 0.73%, #E9DDFD 138.19%)',
        'custom-gradient-6' : 'linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0) 100%)',
        "custom-gradient-7" : 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, white 100%)',
        "custom-gradient-8" : 'linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0) 100%)',
        "custom-gradient-9" : 'linear-gradient(179deg, #EFE7FE 0.73%, #DCC9FC 138.19%)',
        "custom-gradient-10" : 'linear-gradient(90deg, rgba(125, 55, 246, 0.9) 0%, rgba(46, 142, 245, 0.9) 228.18%)',
        "bg-1" : 'https://beta.aigate.app/img/ces/bg-sang-tao-noi-dung.png',
        "bg-2" : 'https://beta.aigate.app/img/ces/bg_our_product.png',
        "bg-3" : 'data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 30 30\'%3e%3cpath stroke=\'rgba%280, 0, 0, 0.55%29\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' stroke-width=\'2\' d=\'M4 7h22M4 15h22M4 23h22\'/%3e%3c/svg%3e'
      },
      boxShadow:{
        "sd-1" : "0 0 0 2px #fff",
        "sd-2" : "rgba(255, 255, 255, 0.5) 0px 0px 0px 3px",
        "sd-3" : "rgba(255, 255, 255, 0.4) 0 0 0 1px",
        "sd-4" : "0px 0px 4px 0px rgba(0, 0, 0, 0.12)",
        "sd-5" : "0px 0px 9px 0px rgba(100, 100, 100, 0.1)",
        "sd-6" : "rgba(255, 255, 255, 0.5) 0 0 0 6px",
        "sd-7" : '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.1)',
      },

      backgroundPosition:{
        "ps1" : "center center",
        "ps2" : "top center",
      },
      fontSize:{
        "40" : '40px'
      }

    },

  },
  plugins: [],
}