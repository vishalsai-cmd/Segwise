import React, { useState, useEffect } from 'react';
import { TagFilter } from '../types';
 import './Filters.css';

interface TagFilterComponentProps {
  onAddFilter: (filter: TagFilter) => void;
  tagCategories: string[];
  getTagValues: (category: string) => string[];
}

const TAG_FILTER_DEFAULT_CATEGORY = 'concept';

export const TagFilterComponent: React.FC<TagFilterComponentProps> = ({ 
  onAddFilter, 
  tagCategories,
  getTagValues 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(tagCategories[0] || TAG_FILTER_DEFAULT_CATEGORY);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [availableValues, setAvailableValues] = useState<string[]>([]);

  useEffect(() => {
    if (tagCategories.length > 0 && !selectedCategory) {
      setSelectedCategory(tagCategories[0]);
    }
  }, [tagCategories, selectedCategory]);

  useEffect(() => {
    if (selectedCategory) {
      const values = getTagValues(selectedCategory);
      setAvailableValues(values);
      setSelectedValue(values[0] || '');
    }
  }, [selectedCategory, getTagValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory || !selectedValue) return;
    
    onAddFilter({
      type: 'tag',
      category: selectedCategory,
      value: selectedValue
    });
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <div className="form-group">
        <label htmlFor="tag-category">Category:</label>
        <select
          id="tag-category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          disabled={tagCategories.length === 0}
        >
          {tagCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="tag-value">Value:</label>
        <select
          id="tag-value"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          disabled={availableValues.length === 0}
        >
          {availableValues.map(value => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="add-filter-btn">Add Filter</button>
    </form>
  );
};