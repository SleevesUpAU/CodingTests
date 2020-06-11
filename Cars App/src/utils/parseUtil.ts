export default {
  isValidFloatString: (str: string | null | undefined): boolean => {
    if (str) {
      if (str.split('.').length > 2) {
        return false;
      }

      if (str.length > 0) {
        const zeroPrefixStr = str[0] === '.' ? `0${str}` : `${str}`;

        const number = parseFloat(zeroPrefixStr);
        if (number !== 0 && !number) {
          return false;
        }
      }
    }
    return true;
  },
};
