import React, { useState } from 'react';
import { MetricField, MetricFilter, MetricOperator } from '../types';
import './Filters.css';

interface MetricFilterComponentProps {
  onAddFilter: (filter: MetricFilter) => void;
}

const METRIC_FIELD_OPTIONS: { id: MetricField; label: string }[] = [
  { id: 'ipm', label: 'Installs per 1000' },
  { id: 'ctr', label: 'Click-through Rate' },
  { id: 'spend', label: 'Spend' },
  { id: 'impressions', label: 'Impressions' },
  { id: 'clicks', label: 'Clicks' },
  { id: 'cpm', label: 'CPM' },
  { id: 'cost_per_click', label: 'Cost per Click' },
  { id: 'cost_per_install', label: 'Cost per Install' },
  { id: 'installs', label: 'Installs' },
];

const OPERATOR_OPTIONS: { id: MetricOperator; label: string }[] = [
  { id: '>', label: 'Greater than' },
  { id: '<', label: 'Less than' },
  { id: '=', label: 'Equal to' },
  { id: '>=', label: 'Greater than or equal' },
  { id: '<=', label: 'Less than or equal' },
];

export const MetricFilterComponent: React.FC<MetricFilterComponentProps> = ({ 
  onAddFilter 
}) => {
  const [selectedField, setSelectedField] = useState<MetricField>('installs');
  const [selectedOperator, setSelectedOperator] = useState<MetricOperator>('>');
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    
    onAddFilter({
      type: 'metric',
      field: selectedField,
      operator: selectedOperator,
      value: numValue
    });
    
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <div className="form-group">
        <label htmlFor="metric-field">Field:</label>
        <select
          id="metric-field"
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value as MetricField)}
        >
          {METRIC_FIELD_OPTIONS.map(field => (
            <option key={field.id} value={field.id}>{field.label}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="metric-operator">Operator:</label>
        <select
          id="metric-operator"
          value={selectedOperator}
          onChange={(e) => setSelectedOperator(e.target.value as MetricOperator)}
        >
          {OPERATOR_OPTIONS.map(op => (
            <option key={op.id} value={op.id}>{op.label}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="metric-value">Value:</label>
        <input
          id="metric-value"
          type="number"
          step="any"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter numeric value"
        />
      </div>
      <button type="submit" className="add-filter-btn">Add Filter</button>
    </form>
  );
};