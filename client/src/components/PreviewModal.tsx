import React from 'react';
import { Creative } from './types';
 import './PreviewModal.css'; 

interface PreviewModalProps {
  item: Creative;
  onClose: () => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({ 
  item, 
  onClose, 
  isExpanded, 
  onToggleExpand 
}) => {
  const modalClass = isExpanded ? 'expanded' : 'preview';

  return (
    <div className={`modal-container ${modalClass}`}>
      <div className="modal-header">
        <h3>{item.creative_name}</h3>
        <div className="modal-actions">
          <button onClick={onToggleExpand}>
            {isExpanded ? 'Minimize' : 'Expand'}
          </button>
          <button onClick={onClose}>×</button>
        </div>
      </div>
      
      <div className="modal-content">
        <div className="row">
          <div className="col">
            <h4>Basic Info</h4>
            <p><strong>Creative ID:</strong> {item.creative_id}</p>
            <p><strong>Campaign:</strong> {item.campaign}</p>
            <p><strong>Ad Group:</strong> {item.ad_group}</p>
            <p><strong>Country:</strong> {item.country}</p>
            <p><strong>Ad Network:</strong> {item.ad_network}</p>
            <p><strong>OS:</strong> {item.os}</p>
          </div>
          
          <div className="col">
            <h4>Tags</h4>
            <div className="tags-container">
              {item.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="row">
            <div className="col">
              <h4>Performance Metrics</h4>
              <p><strong>Impressions:</strong> {item.impressions}</p>
              <p><strong>Clicks:</strong> {item.clicks}</p>
              <p><strong>CTR:</strong> {item.ctr}%</p>
              <p><strong>Installs:</strong> {item.installs}</p>
              <p><strong>IPM:</strong> {item.ipm}%</p>
            </div>
            
            <div className="col">
              <h4>Financial Metrics</h4>
              <p><strong>Spend:</strong> ${item.spend.toFixed(2)}</p>
              <p><strong>CPM:</strong> ${item.cpm.toFixed(2)}</p>
              <p><strong>Cost per Click:</strong> ${item.cost_per_click.toFixed(2)}</p>
              <p><strong>Cost per Install:</strong> ${item.cost_per_install.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};