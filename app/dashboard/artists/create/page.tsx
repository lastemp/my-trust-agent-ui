import Form from '@/app/ui/artists/create-form';
import Breadcrumbs from '@/app/ui/artists/breadcrumbs';
import { fetchArtists } from '@/app/lib/data';
 
export default async function Page() {
  const artists = await fetchArtists();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Artists', href: '/dashboard/artists' },
          {
            label: 'Create Artist',
            href: '/dashboard/artists/create',
            active: true,
          },
        ]}
      />
      <Form artists={artists} />
    </main>
  );
}