
import { Creative } from '../components/types';

export const mockCreatives: Creative[] = [
  {
    creative_id: '120214081337200422',
    creative_name: 'New Creative 4',
    tags: [
      'Concept:UGC',
      'Audio - Type:voiceover',
      'Audio - Language:English',
      'End card elements - CTA:download it and start crushing those levels!',
      'End card elements - Objects:colored bubbles',
      'End card elements - Objects:wand',
      'End card elements - Objects:rocks',
      'End card elements - Objects:boots',
      'End card elements - Language:English',
      'End card elements - CTA Placement:Middle-Right',
      'End card elements - Background Colour:Orange',
      'End card elements - Background setting:fantasy',
      'End card elements - CTA background colour:Dark Purple'
    ],
    country: 'IN',
    ad_network: 'meta',
    os: 'unknown',
    campaign: 'App promotion campaign - New Creatives',
    ad_group: 'New Creatives',
    ipm: 2.70011323055483,
    ctr: 0.844874,
    spend: 7.01,
    impressions: 11481,
    clicks: 97,
    cpm: 0.610574,
    cost_per_click: 0.072268,
    cost_per_install: 0.22612903225806452,
    installs: 31
  },
  {
    creative_id: '120214081106690422',
    creative_name: 'New Creative 5',
    tags: [
      'Concept:UGC',
      'Audio - Type:voiceover',
      'Audio - Language:English',
      'End card elements - CTA:Download today and start merging!',
      'End card elements - Objects:large brown mushrooms',
      'End card elements - Objects:trees',
      'End card elements - Objects:a wand',
      'End card elements - Language:English',
      'End card elements - Logo present:yes',
      'End card elements - CTA Placement:Bottom-Center',
      'End card elements - Background Colour:Orange',
      'End card elements - Background setting:forest',
      'End card elements - CTA background colour:Dark Purple'
    ],
    country: 'IN',
    ad_network: 'meta',
    os: 'unknown',
    campaign: 'App promotion campaign - New Creatives',
    ad_group: 'New Creatives',
    ipm: 1.8835616438356164,
    ctr: 0.770548,
    spend: 2.95,
    impressions: 5840,
    clicks: 45,
    cpm: 0.505137,
    cost_per_click: 0.065556,
    cost_per_install: 0.2681818181818182,
    installs: 11
  },
  {
    creative_id: '120214096349490422',
    creative_name: 'Creative 2',
    tags: [
      'Concept:UGC',
      'Audio - Type:voiceover',
      'Audio - Language:English',
      'End card elements - CTA:Download and play for free!',
      'End card elements - Objects:purple and red mushrooms',
      'End card elements - Objects:crystals',
      'End card elements - Objects:magnet',
      'End card elements - Objects:bomb',
      'End card elements - Language:English',
      'End card elements - Logo present:yes',
      'End card elements - CTA Placement:Middle-Center',
      'End card elements - Background Colour:light blue',
      'End card elements - Background setting:bedroom',
      'End card elements - CTA background colour:light-blue'
    ],
    country: 'IN',
    ad_network: 'meta',
    os: 'unknown',
    campaign: 'App promotion campaign - OG Creatives',
    ad_group: 'OG Creatives – Revised',
    ipm: 1.603750308413521,
    ctr: 0.826548,
    spend: 5.05,
    impressions: 8106,
    clicks: 67,
    cpm: 0.622995,
    cost_per_click: 0.075373,
    cost_per_install: 0.38846153846153847,
    installs: 13
  },
  
  {
    creative_id: '120214081106700422',
    creative_name: 'New Creative 1',
    tags: [
      'Concept:UGC',
      'Audio - Type:voiceover',
      'Audio - Language:English',
      'End card elements - CTA:Download now!',
      'End card elements - Objects:colored bubbles',
      'End card elements - Objects:wand',
      'End card elements - Objects:game screen',
      'End card elements - Language:English',
      'End card elements - CTA Placement:Bottom-Center',
      'End card elements - Background Colour:Yellowish Orange',
      'End card elements - Background setting:forest',
      'End card elements - CTA background colour:Purple'
    ],
    country: 'IN',
    ad_network: 'meta',
    os: 'unknown',
    campaign: 'App promotion campaign - New Creatives',
    ad_group: 'New Creatives',
    ipm: 0.6657789613848203,
    ctr: 0.7323570000000001,
    spend: 0.75,
    impressions: 1502,
    clicks: 11,
    cpm: 0.49933400000000006,
    cost_per_click: 0.068182,
    cost_per_install: 0.75,
    installs: 1
  },
  {
    creative_id: '120214096349510422',
    creative_name: 'Creative 3',
    tags: [
      'Concept:UGC',
      'Audio - Type:Voiceover',
      'Audio - Language:English',
      'End card elements - CTA:Download Bubblewise now',
      'End card elements - Objects:blue crystals',
      'End card elements - Objects:pink petals',
      'End card elements - Objects:red mushrooms',
      'End card elements - Language:English',
      'End card elements - CTA Placement:Bottom-Center',
      'End card elements - Background Colour:light blue',
      'End card elements - Background setting:game',
      'End card elements - CTA background colour:White'
    ],
    country: 'IN',
    ad_network: 'meta',
    os: 'unknown',
    campaign: 'App promotion campaign - OG Creatives',
    ad_group: 'OG Creatives – Revised',
    ipm: 0.6373486297004461,
    ctr: 0.478011,
    spend: 2.85,
    impressions: 6276,
    clicks: 30,
    cpm: 0.454111,
    cost_per_click: 0.095,
    cost_per_install: 0.7125,
    installs: 4
  },
  
];


export function generateMockData(count: number): Creative[] {
  const countries = ['US', 'UK', 'IN', 'CA', 'AU'];
  const networks = ['meta', 'Google Ads', 'TikTok', 'Twitter'];
  const osList = ['Android', 'iOS', 'unknown'];
  
  return Array.from({ length: count }, (_, i) => ({
    creative_id: `gen_${Date.now()}_${i}`,
    creative_name: `Generated Creative ${i + 1}`,
    tags: [
      `Concept:${i % 2 === 0 ? 'UGC' : 'Gameplay'}`,
      `Audio - Type:${i % 2 === 0 ? 'voiceover' : 'music'}`,
      `Audio - Language:English`,
      `End card elements - CTA:Call to action ${i}`,
      `End card elements - Objects:object_${i}`
    ],
    country: countries[i % countries.length],
    ad_network: networks[i % networks.length],
    os: osList[i % osList.length],
    campaign: `Campaign ${i % 3 + 1}`,
    ad_group: `Ad Group ${i % 5 + 1}`,
    ipm: Math.random() * 5,
    ctr: Math.random() * 2,
    spend: Math.random() * 100,
    impressions: Math.floor(Math.random() * 50000),
    clicks: Math.floor(Math.random() * 1000),
    cpm: Math.random() * 2,
    cost_per_click: Math.random(),
    cost_per_install: Math.random() * 5,
    installs: Math.floor(Math.random() * 100)
  }));
}