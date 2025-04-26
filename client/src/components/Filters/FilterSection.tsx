import React from 'react';
import './Filters.css';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ 
  title, 
  children, 
  isActive, 
  onToggle 
}) => {
  return (
    <div className={`filter-section ${isActive ? 'active' : ''}`}>
      <div className="filter-header" onClick={onToggle}>
        <h3>{title}</h3>
        <span className="toggle-icon">{isActive ? '−' : '+'}</span>
      </div>
      {isActive && <div className="filter-content">{children}</div>}
    </div>
  );
};