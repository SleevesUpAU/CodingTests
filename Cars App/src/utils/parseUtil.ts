export default {
  getFloat: (value: string | null | undefined): number | undefined => {
    if (typeof value === 'string') {
      const number = parseFloat(value);

      if (!isNaN(number)) {
        return number;
      }
    }
  },
};
