import Form from '@/app/ui/transactions/create-form';
import Breadcrumbs from '@/app/ui/transactions/breadcrumbs';
import { fetchTransactions, fetchInstitutions, fetchEvents, fetchArtists } from '@/app/lib/data';
 
export default async function Page() {
  const [transactions, institutions, events, artists] = await Promise.all([
    fetchTransactions(),
    fetchInstitutions(),
    fetchEvents(),
    fetchArtists(),
  ]);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Transactions', href: '/dashboard/transactions' },
          {
            label: 'Create Transaction',
            href: '/dashboard/transactions/create',
            active: true,
          },
        ]}
      />
      <Form transactions={transactions} institutions={institutions} events={events} artists={artists} />
    </main>
  );
}