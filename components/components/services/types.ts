export enum ServiceType {
  ACADEMIC = 'Academic Research',
  MARKET = 'Market Analysis',
  BUSINESS = 'Business Strategy',
  DATA_SCIENCE = 'Data Science & AI'
}

export interface ResearchProject {
  id: string;
  title: string;
  type: ServiceType;
  status: 'Pending' | 'In Progress' | 'Completed';
  date: string;
}

export interface ConsultationMessage {
  role: 'user' | 'assistant';
  content: string;
}
