import React, { useState } from 'react';
import { useFilterData } from '../hooks/useFilterData';
import { Creative, TableColumn } from './types';
import { CreativeTable } from './Table/CreativeTable';
import { FilterDropdown } from './Filters/FilterDropdown';
import './Dashboard.css';
import './Filters2.css';

interface DashboardProps {
  data: Creative[];
}

export const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const {
    data: filteredData,
    filters,
    addFilter,
    removeFilter,
    searchTerm,
    setSearchTerm,
    requestSort,
    sortConfig,
    tagCategories,
    getTagValues
  } = useFilterData(data);

  const columns: TableColumn[] = [
    { id: 'creative_id', label: 'Creative ID', isSortable: true, isDimension: true, isMetric: false, isTag: false },
    { id: 'creative_name', label: 'Creative Name', isSortable: true, isDimension: true, isMetric: false, isTag: false },
    { id: 'tags', label: 'Tags', isSortable: false, isDimension: false, isMetric: false, isTag: true },
    { id: 'country', label: 'Country', isSortable: true, isDimension: true, isMetric: false, isTag: false },
    { id: 'ad_network', label: 'Ad Network', isSortable: true, isDimension: true, isMetric: false, isTag: false },
    { id: 'os', label: 'OS', isSortable: true, isDimension: true, isMetric: false, isTag: false },
    { id: 'campaign', label: 'Campaign', isSortable: true, isDimension: true, isMetric: false, isTag: false },
    { id: 'ad_group', label: 'Ad Group', isSortable: true, isDimension: true, isMetric: false, isTag: false },
    { id: 'ipm', label: 'IPM', isSortable: true, isDimension: false, isMetric: true, isTag: false },
    { id: 'ctr', label: 'CTR', isSortable: true, isDimension: false, isMetric: true, isTag: false },
    { id: 'spend', label: 'Spend', isSortable: true, isDimension: false, isMetric: true, isTag: false },
    { id: 'impressions', label: 'Impressions', isSortable: true, isDimension: false, isMetric: true, isTag: false },
    { id: 'clicks', label: 'Clicks', isSortable: true, isDimension: false, isMetric: true, isTag: false },
    { id: 'cpm', label: 'CPM', isSortable: true, isDimension: false, isMetric: true, isTag: false },
    { id: 'cost_per_click', label: 'Cost/Click', isSortable: true, isDimension: false, isMetric: true, isTag: false },
    { id: 'cost_per_install', label: 'Cost/Install', isSortable: true, isDimension: false, isMetric: true, isTag: false },
    { id: 'installs', label: 'Installs', isSortable: true, isDimension: false, isMetric: true, isTag: false },
  ];

  const handleSortRequest = (key: string) => {
    if (columns.find(col => col.id === key)?.isSortable) {
      requestSort(key as keyof Creative);
    }
  };

  return (
    <div className="dashboard">
      <div className="filters-sidebar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search all columns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <FilterDropdown 
            onAddFilter={addFilter}
            tagCategories={tagCategories}
            getTagValues={getTagValues}
          />

          {filters.length > 0 && (
            <div className="active-filters">
              <h3>Active Filters</h3>
              <div className="filters-list">
                {filters.map((filter, index) => (
                  <div key={index} className="active-filter">
                    {filter.type === 'dimension' && (
                      <span>
                        {filter.field}: {filter.value}
                      </span>
                    )}
                    {filter.type === 'metric' && (
                      <span>
                        {filter.field} {filter.operator} {filter.value}
                      </span>
                    )}
                    {filter.type === 'tag' && (
                      <span>
                        Tag: {filter.category} = {filter.value}
                      </span>
                    )}
                    <button onClick={() => removeFilter(index)}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="main-content">
        <div className="summary-stats">
          <div className="stat-card">
            <h3>Total Creatives</h3>
            <p>{filteredData.length}</p>
          </div>
          <div className="stat-card">
            <h3>Total Spend</h3>
            <p>${filteredData.reduce((sum, item) => sum + item.spend, 0).toFixed(2)}</p>
          </div>
          <div className="stat-card">
            <h3>Avg. CTR</h3>
            <p>{(filteredData.reduce((sum, item) => sum + item.ctr, 0) / filteredData.length || 0).toFixed(2)}%</p>
          </div>
          <div className="stat-card">
            <h3>Total Installs</h3>
            <p>{filteredData.reduce((sum, item) => sum + item.installs, 0)}</p>
          </div>
        </div>

        <CreativeTable 
          data={filteredData} 
          columns={columns} 
          requestSort={handleSortRequest} 
          sortConfig={sortConfig} 
        />
      </div>
    </div>
  );
};