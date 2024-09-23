import React from 'react';

interface RowProps {
  children: React.ReactNode;
  className?: string; // Additional custom class names for styling
  style?: React.CSSProperties; // Inline styles for the row component
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'; // Simplified Flexbox justify-content options
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'; // Simplified Flexbox align-items options
  gap?: string; // CSS gap property for spacing between items
}

// JSON-like map for justify-content classes using NonNullable
const justifyContentMap: Record<NonNullable<RowProps['justifyContent']>, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

// JSON-like map for align-items classes using NonNullable
const alignItemsMap: Record<NonNullable<RowProps['alignItems']>, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  baseline: 'baseline',
  stretch: 'stretch',
};

const Row: React.FC<RowProps> = (
  {
    children,
    className = '',
    style = {},
    justifyContent,
    alignItems,
    gap,
  }) => {
  // Combine custom styles with Flexbox properties
  const rowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: justifyContent ? justifyContentMap[justifyContent] : undefined,
    alignItems: alignItems ? alignItemsMap[alignItems] : undefined,
    gap,
    ...style, // Merge any additional custom styles
  };

  return (
    <div className={className} style={rowStyle}>
      {children}
    </div>
  );
};

export default React.memo(Row);
