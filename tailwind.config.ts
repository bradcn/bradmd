module.exports = {
    content: [
      './.bradmd/utils/*.{js,ts,jsx,tsx}',
      './.bradmd/components/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }