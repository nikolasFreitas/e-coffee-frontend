import { useState } from 'react';
import { Store } from '@dataTypes/store';

const shop = {
  name: 'Lorem ipsum dolor sit amet',
  popularity: 3.2,
  id: 1,
  cover_image_url: 'https://via.placeholder.com/300x500?text=Lorem%20Ipsum',
  stock: []
} as Store;

export const useShopsHooks = () => {
  const [ shops ] = useState([ shop, shop, shop, shop ] as Store[]);

  return {
    shops
  };
};
