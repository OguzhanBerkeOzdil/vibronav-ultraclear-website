/**
 * Component: TermsPage
 * Purpose: Legal policy documentation
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

// src/pages/policies/TermsPage.tsx
import React from 'react';
import PolicyPageLayout from '../../components/PolicyPageLayout';
import TermsContent from '../../content/policies/terms-of-use.mdx';

const TermsPage: React.FC = () => {
  return (
    <PolicyPageLayout
      title="Terms of Use"
      href="/terms-of-use"
      effectiveDate="28 July 2025"
      icon="shield"
    >
      <TermsContent />
    </PolicyPageLayout>
  );
};

export default TermsPage;
