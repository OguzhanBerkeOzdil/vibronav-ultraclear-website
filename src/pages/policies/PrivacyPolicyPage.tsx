/**
 * Component: PrivacyPolicyPage
 * Purpose: Legal policy documentation
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/pages/policies/PrivacyPolicyPage.tsx
import React from 'react';
import PolicyPageLayout from '../../components/PolicyPageLayout';
import PrivacyPolicyContent from '../../content/policies/privacy-policy.mdx';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <PolicyPageLayout
      title="Privacy Policy"
      href="/privacy-policy"
      effectiveDate="28 July 2025"
      icon="eye"
    >
      <PrivacyPolicyContent />
    </PolicyPageLayout>
  );
};

export default PrivacyPolicyPage;
