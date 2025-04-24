export type Currency = 'USD' | 'IDR' | string;

export interface Product {
  id: number;
  name: string;
  price: number;
  currency: Currency;
  market: 'global' | 'indonesia';
}