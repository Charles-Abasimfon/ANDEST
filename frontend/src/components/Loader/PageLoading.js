import React from 'react';
import { PulseBubbleLoader } from 'react-loaders-kit';

function PageLoading() {
  const loaderProps = {
    loading: true,
    size: 100,
    duration: 1,
    colors: ['#013298', '#013298', '#013298'],
  };

  return (
    <div className='loader'>
      <PulseBubbleLoader {...loaderProps} />
      <p style={{ fontSize: '0px' }}>ANDEST LLC</p>
    </div>
  );
}

export default PageLoading;
