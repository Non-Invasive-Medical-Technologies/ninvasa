import { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber = ({ value, prefix = '', suffix = '', duration = 800 }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = displayValue;
    const endValue = Number(value);
    
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
  }, [value, duration]);

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