'use client';

import React, { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import type { QualificationFormData } from '@/lib/types/funnel';

interface CalEmbedWrapperProps {
  calLink: string;
  formData: QualificationFormData;
}

export default function CalEmbedWrapper({ calLink, formData }: CalEmbedWrapperProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#C9A876' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <div className="cal-embed-shell">
      <Cal
        calLink={calLink}
        style={{ width: '100%', height: '100%', minHeight: '680px' }}
        config={{
          name: formData.fullName,
          email: formData.email,
          notes: formData.projectBrief,
          location: JSON.stringify({
            value: 'phone',
            optionValue: formData.phone,
          }),
          'metadata[businessName]': formData.businessName,
          'metadata[serviceNeed]': formData.serviceNeed,
          'metadata[industryVertical]': formData.industryVertical,
          'metadata[budgetTier]': formData.budgetTier,
          'metadata[websiteUrl]': formData.websiteUrl || '',
        }}
      />
    </div>
  );
}
