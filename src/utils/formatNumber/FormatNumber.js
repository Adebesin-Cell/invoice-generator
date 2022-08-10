export const FormatNumber = function ({ amount, type, currency, locale }) {
  const options = {
    style: type,
    currency: currency,
  };

  return new Intl.NumberFormat(locale, options).format(amount);
};
