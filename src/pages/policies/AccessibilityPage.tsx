/**
 * Component: AccessibilityPage
 * Purpose: Legal policy documentation
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/pages/policies/AccessibilityPage.tsx
import React from 'react';
import PolicyPageLayout from '../../components/PolicyPageLayout';
import AccessibilityContent from '../../content/policies/accessibility.mdx';

const AccessibilityPage: React.FC = () => {
  return (
    <PolicyPageLayout
      title="Accessibility Statement"
      href="/accessibility"
      lastReviewed="28 July 2025"
      icon="accessibility"
    >
      <AccessibilityContent />
    </PolicyPageLayout>
  );
};

export default AccessibilityPage;
