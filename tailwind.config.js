module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        deepblack: 'var(--color-DeepBlack)',
        offtan: {
          default: 'var(--color-OffTan)',
          transparent50: 'var(--color-OffTan--Transparent50)',
        },
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        'gilda-display': ['"Gilda Display"', 'serif'],
        'mrs-sheppards': ['"Mrs Sheppards"', 'cursive'],
      },
      lineHeight: {
        149: '149%',
      },
    },
  },
  variants: {},
  plugins: [],
};
