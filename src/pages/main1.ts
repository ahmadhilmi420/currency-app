import { convertProductPrice } from '../services/currencyConverter';
import { Product } from '../types';

const sampleProducts: Product[] = [
  { id: 1, name: 'Indonesian Batik', price: 150000, currency: 'IDR', market: 'indonesia' },
  { id: 2, name: 'Global Headphones', price: 100, currency: 'USD', market: 'global' }
];

async function runDemo() {
  for (const product of sampleProducts) {
    const converted = await convertProductPrice(product);
    console.log(`Product: ${product.name}, Converted Price: ${converted}`);
  }
}

runDemo();
