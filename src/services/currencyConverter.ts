import { Product } from '../types';
import { getUserCountryCode } from '../utils/location';
import { getExchangeRates } from './exchangeRates';

export async function convertProductPrice(product: Product): Promise<number> {
  const userCountry = await getUserCountryCode();
  const rates = await getExchangeRates();

  // Determine conversion rule
  const isUserIndonesian = userCountry === 'ID';
  const isProductIndonesian = product.market === 'indonesia';

  if (isUserIndonesian && product.currency !== 'IDR') {
    // Convert to IDR
    const rate = rates[product.currency];
    return Math.round(product.price * rates['IDR'] / rate);
  }

  if (!isUserIndonesian && isProductIndonesian && product.currency === 'IDR') {
    // Convert to USD
    return Math.round(product.price / rates['IDR']);
  }

  // No conversion
  return product.price;
}
