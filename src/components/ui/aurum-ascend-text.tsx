import React from 'react';

interface AurumAscendTextProps {
  className?: string;
  includeCapital?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  animated?: boolean;
}

export function AurumAscendText({ 
  className = '', 
  includeCapital = false, 
  size = 'medium',
  animated = true 
}: AurumAscendTextProps) {
  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  };

  const baseClass = `${sizeClasses[size]} ${animated ? 'aurum-ascend-enhanced' : 'aurum-ascend-container'} ${className}`;

  return (
    <span className={baseClass}>
      <span className="aurum-text">Aurum</span>
      <span className="ascend-text">Ascend</span>
      {includeCapital && <span className="ascend-text"> Capital</span>}
    </span>
  );
}

// Individual components for more granular control
export function AurumText({ className = '' }: { className?: string }) {
  return <span className={`aurum-text ${className}`}>Aurum</span>;
}

export function AscendText({ className = '', includeCapital = false }: { className?: string; includeCapital?: boolean }) {
  return (
    <span className={`ascend-text ${className}`}>
      Ascend{includeCapital && ' Capital'}
    </span>
  );
}
