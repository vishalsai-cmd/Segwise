import { useState, useEffect, useMemo } from 'react';
import { Creative, Filter, DimensionField, MetricField, TagFilter } from '../components/types';

export const useFilterData = (initialData: Creative[]) => {
  const [data, setData] = useState<Creative[]>(initialData);
  const [filters, setFilters] = useState<Filter[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Creative; direction: 'ascending' | 'descending' } | null>(null);

  
  const tagCategories = useMemo(() => {
    const categories = new Set<string>();
    initialData.forEach(item => {
      item.tags.forEach(tag => {
        const [category] = tag.split(':');
        categories.add(category.trim());
      });
    });
    return Array.from(categories).sort();
  }, [initialData]);

  
  const getTagValues = (category: string) => {
    const values = new Set<string>();
    initialData.forEach(item => {
      item.tags.forEach(tag => {
        const [cat, val] = tag.split(':');
        if (cat.trim() === category && val) {
          values.add(val.trim());
        }
      });
    });
    return Array.from(values).sort();
  };

  
  const filteredData = useMemo(() => {
    let result = [...initialData];

    
    filters.forEach(filter => {
      if (filter.type === 'dimension') {
        result = result.filter(item => 
          String(item[filter.field]).toLowerCase().includes(filter.value.toLowerCase())
        );
      } else if (filter.type === 'metric') {
        result = result.filter(item => {
          const itemValue = item[filter.field];
          switch (filter.operator) {
            case '>': return itemValue > filter.value;
            case '<': return itemValue < filter.value;
            case '=': return itemValue === filter.value;
            case '>=': return itemValue >= filter.value;
            case '<=': return itemValue <= filter.value;
            default: return true;
          }
        });
      } else if (filter.type === 'tag') {
        result = result.filter(item => 
          item.tags.some(tag => {
            const [cat, val] = tag.split(':');
            return cat.trim() === filter.category && val?.trim() === filter.value;
          })
        );
      }
    });

    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(item => 
        Object.values(item).some(val => {
          if (Array.isArray(val)) {
            return val.some(v => v.toLowerCase().includes(term));
          }
          return String(val).toLowerCase().includes(term);
        })
      );
    }

    return result;
  }, [initialData, filters, searchTerm]);

  
  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  const requestSort = (key: keyof Creative) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const addFilter = (filter: Filter) => {
    setFilters(prev => {
      
      const existingIndex = prev.findIndex(f => 
        f.type === filter.type && 
        (f.type !== 'tag' || (f as TagFilter).category === (filter as TagFilter).category)
      );
      
      if (existingIndex >= 0) {
        const newFilters = [...prev];
        newFilters[existingIndex] = filter;
        return newFilters;
      }
      
      return [...prev, filter];
    });
  };

  const removeFilter = (index: number) => {
    setFilters(prev => prev.filter((_, i) => i !== index));
  };

  return {
    data: sortedData,
    filters,
    addFilter,
    removeFilter,
    searchTerm,
    setSearchTerm,
    requestSort,
    sortConfig,
    tagCategories,
    getTagValues
  };
};