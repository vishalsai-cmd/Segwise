import React, { useState } from 'react';
import { Creative, TableColumn } from '../types';
import { TableHeader } from './TableHeader';
import { PreviewModal } from '../PreviewModal';
import './Table.css';

interface CreativeTableProps {
  data: Creative[];
  columns: TableColumn[];
  requestSort: (key: string) => void;
  sortConfig: { key: string; direction: string } | null;
}

export const CreativeTable: React.FC<CreativeTableProps> = ({ 
  data, 
  columns, 
  requestSort, 
  sortConfig 
}) => {
  const [previewItem, setPreviewItem] = useState<Creative | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRowClick = (item: Creative) => {
    setPreviewItem(item);
    setIsExpanded(false);
  };

  const closePreview = () => {
    setPreviewItem(null);
    setIsExpanded(false);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="table-container">
      <table>
        <TableHeader 
          columns={columns} 
          requestSort={requestSort} 
          sortConfig={sortConfig} 
        />
        <tbody>
          {data.map((item, index) => (
            <tr key={`${item.creative_id}-${index}`}>
              {columns.map(column => (
                <td 
                  key={column.id}
                  onClick={() => column.id === 'creative_id' ? handleRowClick(item) : undefined}
                  className={column.id === 'creative_id' ? 'clickable' : ''}
                >
                  {column.id === 'tags' ? (
                    <div className="tags-container">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  ) : (
                    column.id === 'ctr' || column.id === 'ipm' || column.id === 'cpm' ? 
                    `${item[column.id]}%` : 
                    String(item[column.id])
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {previewItem && (
        <PreviewModal 
          item={previewItem} 
          onClose={closePreview}
          isExpanded={isExpanded}
          onToggleExpand={toggleExpand}
        />
      )}
    </div>
  );
};