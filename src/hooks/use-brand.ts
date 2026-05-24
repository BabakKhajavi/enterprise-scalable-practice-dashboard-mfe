import { useEffect, useState } from 'react';

import { brand$, getCurrentBrand } from 'enterprise_data/Brand';

import { Brand } from '../types/brand';

export const useBrand = () => {
  const [brand, setBrandState] = useState<Brand | null>(() =>
    getCurrentBrand(),
  );

  useEffect(() => {
    const subscription = brand$.subscribe((nextBrand: Brand | null) => {
      setBrandState(nextBrand);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    brand,
  };
};
