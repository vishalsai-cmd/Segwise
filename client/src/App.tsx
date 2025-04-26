
import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import { mockCreatives } from './data/mockCreatives'; 
import './App.css';
import { Creative } from './components/types';


const App: React.FC = () => {
  const [data, setData] = useState<Creative[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        setData(mockCreatives); 
        
        
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (err) {
        setError('Failed to load data');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="app">
      <Dashboard data={data} />
    </div>
  );
};

export default App;