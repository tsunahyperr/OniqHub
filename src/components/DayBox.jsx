import React from 'react';

const DayBox = ({ day, isSelected, isCompleted, onClick, onToggleComplete }) => {
  const getClassName = () => {
    let classes = 'day-box';
    if (isCompleted) classes += ' completed';
    else if (isSelected) classes += ' selected';
    return classes;
  };

  return (
    <div className="relative">
      <div className={getClassName()} onClick={onClick}>
        {day}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleComplete();
        }}
        className="absolute -bottom-1 -right-1 w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-xs hover:border-green-500 hover:text-green-500 transition-colors shadow-sm"
        title="Tandakan selesai"
      >
        ✓
      </button>
    </div>
  );
};

export default DayBox;