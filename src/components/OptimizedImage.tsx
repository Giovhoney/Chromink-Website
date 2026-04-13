import React from 'react';

type OptimizedImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

const OptimizedImage = ({
  priority = false,
  loading,
  decoding,
  fetchPriority,
  ...props
}: OptimizedImageProps) => {
  return (
    <img
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding ?? 'async'}
      fetchPriority={fetchPriority ?? (priority ? 'high' : 'auto')}
      {...props}
    />
  );
};

export default OptimizedImage;
