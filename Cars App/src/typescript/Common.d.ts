type Company = 'Totoya' | 'Dorf' | 'Volkspanzer';

type Car = {
  id: string;
  initialPrice: number;
  currentPrice: number | undefined;
  company: Company;
  model: string;
};
