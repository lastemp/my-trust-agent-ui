import Form from '@/app/ui/transactions/edit-form';
import Breadcrumbs from '@/app/ui/transactions/breadcrumbs';
import { fetchInvoiceById, fetchTransactionById, fetchInstitutionById, fetchEventById, fetchArtistById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [transaction, institution, event, artist] = await Promise.all([
        //fetchInvoiceById(id),
        fetchTransactionById(id),
        fetchInstitutionById(id),
        fetchEventById(id),
        fetchArtistById(id),
      ]);
      
      if (!transaction) {
        notFound();
      }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Transactions', href: '/dashboard/transactions' },
          {
            label: 'Edit Transaction',
            href: `/dashboard/transactions/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form transaction={transaction} institution={institution} event={event} artist={artist} />
    </main>
  );
}