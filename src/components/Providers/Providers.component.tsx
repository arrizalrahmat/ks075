'use client';
import { store } from '@/store';
import React from 'react';
import { Provider } from 'react-redux';

type ProvidersPropTypes = {
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersPropTypes> = (props) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
