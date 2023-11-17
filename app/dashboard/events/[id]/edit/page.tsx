import Form from '@/app/ui/events/edit-form';
import Breadcrumbs from '@/app/ui/events/breadcrumbs';
import { fetchInvoiceById, fetchEventById, fetchInstitutionById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, event, institution] = await Promise.all([
        fetchInvoiceById(id),
        fetchEventById(id),
        fetchInstitutionById(id),
      ]);
      
      if (!invoice) {
        notFound();
      }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Events', href: '/dashboard/events' },
          {
            label: 'Edit Event',
            href: `/dashboard/events/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} event={event} institution={institution}/>
    </main>
  );
}