export interface Creative {
    creative_id: string;
    creative_name: string;
    tags: string[];
    country: string;
    ad_network: string;
    os: string;
    campaign: string;
    ad_group: string;
    ipm: number;
    ctr: number;
    spend: number;
    impressions: number;
    clicks: number;
    cpm: number;
    cost_per_click: number;
    cost_per_install: number;
    installs: number;
  }
  
  export type DimensionField = 
    | 'creative_id'
    | 'creative_name'
    | 'country'
    | 'ad_network'
    | 'os'
    | 'campaign'
    | 'ad_group';
  
  export type MetricField = 
    | 'ipm'
    | 'ctr'
    | 'spend'
    | 'impressions'
    | 'clicks'
    | 'cpm'
    | 'cost_per_click'
    | 'cost_per_install'
    | 'installs';
  
  export type MetricOperator = '>' | '<' | '=' | '>=' | '<=';
  
  export interface DimensionFilter {
    type: 'dimension';
    field: DimensionField;
    value: string;
  }
  
  export interface MetricFilter {
    type: 'metric';
    field: MetricField;
    operator: MetricOperator;
    value: number;
  }
  
  export interface TagFilter {
    type: 'tag';
    category: string;
    value: string;
  }
  
  export type Filter = DimensionFilter | MetricFilter | TagFilter;
  
  export interface TableColumn {
    id: keyof Creative;
    label: string;
    isSortable: boolean;
    isDimension: boolean;
    isMetric: boolean;
    isTag: boolean;
  }