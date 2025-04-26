import React from 'react';
import { TableColumn } from '../types';
 import './Table.css';

interface TableHeaderProps {
  columns: TableColumn[];
  requestSort: (key: string) => void;
  sortConfig: { key: string; direction: string } | null;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ 
  columns, 
  requestSort, 
  sortConfig 
}) => {
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th 
            key={column.id} 
            onClick={() => column.isSortable && requestSort(column.id)}
            className={column.isSortable ? 'sortable' : ''}
          >
            {column.label}
            {sortConfig?.key === column.id && (
              <span className="sort-arrow">
                {sortConfig.direction === 'ascending' ? ' ↑' : ' ↓'}
              </span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};