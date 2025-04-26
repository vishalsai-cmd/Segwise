
import React, { useState } from 'react';
import { DimensionField, DimensionFilter } from '../types';
 import './Filters.css'; 


interface DimensionFilterComponentProps {
  onAddFilter: (filter: DimensionFilter) => void;
}


const DIMENSION_FIELD_OPTIONS: { id: DimensionField; label: string }[] = [
  { id: 'creative_id', label: 'Creative ID' },
  { id: 'creative_name', label: 'Creative Name' },
  { id: 'country', label: 'Country' },
  { id: 'ad_network', label: 'Ad Network' },
  { id: 'os', label: 'OS' },
  { id: 'campaign', label: 'Campaign' },
  { id: 'ad_group', label: 'Ad Group' },
];


export const DimensionFilterComponent: React.FC<DimensionFilterComponentProps> = ({ 
  onAddFilter 
}) => {
  const [selectedField, setSelectedField] = useState<DimensionField>('creative_name');
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    
    onAddFilter({
      type: 'dimension',
      field: selectedField,
      value: value.trim()
    });
    
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <div className="form-group">
        <label htmlFor="dimension-field">Field:</label>
        <select
          id="dimension-field"
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value as DimensionField)}
        >
          {DIMENSION_FIELD_OPTIONS.map(field => (
            <option key={field.id} value={field.id}>{field.label}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="dimension-value">Value:</label>
        <input
          id="dimension-value"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value to filter by"
        />
      </div>
      <button type="submit" className="add-filter-btn">Add Filter</button>
    </form>
  );
};