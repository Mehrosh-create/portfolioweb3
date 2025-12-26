// app/services/page.tsx
"use client";


import ServicesGrid from '@/components/Services/ServicesGrid';
import ServicesProcess from '@/components/Services/ServicesProcess';

import ServicesCTA from '@/components/Services/ServicesCTA';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
   
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
    </main>
  );
}