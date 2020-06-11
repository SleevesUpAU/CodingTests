export default {
  getFloat: (str: string | undefined): number | undefined => {
    if (str) {
      const strAsNumber = parseFloat(str);
      if (!isNaN(strAsNumber)) {
        return strAsNumber;
      }
    }

    return undefined;
  },
};
