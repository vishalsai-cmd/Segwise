
import React, { useState } from 'react';
import { DimensionFilterComponent } from './DimensionFilter';
import { MetricFilterComponent } from './MetricFilter';
import { TagFilterComponent } from './TagFilter';
import { Creative } from '../types';
import './Filters.css';

interface FilterDropdownProps {
  onAddFilter: (filter: any) => void;
  tagCategories: string[];
  getTagValues: (category: string) => string[];
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  onAddFilter,
  tagCategories,
  getTagValues
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'dimension' | 'metric' | 'tag'>('dimension');

  return (
    <div className="filter-dropdown">
      <button 
        className="filter-dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M7 12H17M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Filters
        {isOpen && <div className="dropdown-overlay" onClick={() => setIsOpen(false)}></div>}
      </button>

      {isOpen && (
        <div className="dropdown-content">
          <div className="filter-tabs">
            <button
              className={activeTab === 'dimension' ? 'active' : ''}
              onClick={() => setActiveTab('dimension')}
            >
              Dimensions
            </button>
            <button
              className={activeTab === 'metric' ? 'active' : ''}
              onClick={() => setActiveTab('metric')}
            >
              Metrics
            </button>
            <button
              className={activeTab === 'tag' ? 'active' : ''}
              onClick={() => setActiveTab('tag')}
            >
              Tags
            </button>
          </div>

          <div className="filter-content">
            {activeTab === 'dimension' && (
              <DimensionFilterComponent 
                onAddFilter={(filter) => {
                  onAddFilter(filter);
                  setIsOpen(false);
                }} 
              />
            )}

            {activeTab === 'metric' && (
              <MetricFilterComponent 
                onAddFilter={(filter) => {
                  onAddFilter(filter);
                  setIsOpen(false);
                }} 
              />
            )}

            {activeTab === 'tag' && (
              <TagFilterComponent 
                onAddFilter={(filter) => {
                  onAddFilter(filter);
                  setIsOpen(false);
                }}
                tagCategories={tagCategories}
                getTagValues={getTagValues}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};