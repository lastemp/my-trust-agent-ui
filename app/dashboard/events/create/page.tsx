import Form from '@/app/ui/events/create-form';
import Breadcrumbs from '@/app/ui/events/breadcrumbs';
import { fetchEvents, fetchInstitutions } from '@/app/lib/data';
 
export default async function Page() {
  const [events, institutions] = await Promise.all([
    fetchEvents(),
    fetchInstitutions(),
  ]);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Events', href: '/dashboard/events' },
          {
            label: 'Create Event',
            href: '/dashboard/events/create',
            active: true,
          },
        ]}
      />
      <Form events={events} institutions={institutions} />
    </main>
  );
}