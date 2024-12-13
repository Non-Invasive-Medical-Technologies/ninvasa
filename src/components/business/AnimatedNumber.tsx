import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber = ({ value, prefix = '', suffix = '' }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const duration = 1000;
    const startTime = Date.now();
    const startValue = displayValue;
    const endValue = parseFloat(value as string);
  
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
  
      if (elapsed < duration) {
        const progress = elapsed / duration;
        const currentValue = startValue + (endValue - startValue) * progress;
        setDisplayValue(currentValue);
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };
  
    requestAnimationFrame(animate);
  }, [value]);
  
  return (
    <span>
      {prefix}
      {displayValue.toLocaleString(undefined, { 
        maximumFractionDigits: 0,
        minimumFractionDigits: 0 
      })}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;