
export enum Department {
  ALL = '全部',
  MARKETING = '行銷/市場',
  HR = 'HR/培訓',
  IT = '研發/IT',
  SALES = '業務/銷售',
  FINANCE = '財務/審計',
  ADMIN = '行政/PM',
  STRATEGY = '策略/決策'
}

export interface AIApplication {
  id: number;
  title: string;
  category: string;
  description: string;
  scenario: string;
  prompt: string;
  departments: Department[];
  link?: string;
}
