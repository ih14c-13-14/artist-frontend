import React, { ReactNode } from 'react';

interface VerticalStackProps {
  children: ReactNode;
}

const VerticalStack: React.FC<VerticalStackProps> = ({ children }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {children}
    </div>
  );
};

export default VerticalStack;
