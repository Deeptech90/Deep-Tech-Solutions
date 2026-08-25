export type ServiceNeed =
  | 'website'
  | 'local_seo'
  | 'lead_gen'
  | 'full_package'
  | 'custom_app';

export type IndustryVertical =
  | 'dental'
  | 'legal'
  | 'restaurant'
  | 'home_services'
  | 'other';

export type BudgetTier =
  | 'under_500'
  | '500_1000'
  | '1000_2500'
  | 'above_2500';

export interface QualificationFormData {
  serviceNeed: ServiceNeed;
  industryVertical: IndustryVertical;
  budgetTier: BudgetTier;
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  websiteUrl?: string;
  projectBrief: string;
}

export interface CalBookingPayload {
  triggerEvent: string;
  createdAt: string;
  payload: {
    id: number;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    metadata: Record<string, string>;
    attendees: Array<{
      name: string;
      email: string;
      timeZone: string;
    }>;
    user?: {
      name: string;
      email: string;
    };
  };
}
