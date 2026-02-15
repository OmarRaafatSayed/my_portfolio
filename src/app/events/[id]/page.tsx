import { EventDetailClient } from './EventDetailClient';
import { events } from '@/data/events';

export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return <EventDetailClient id={params.id} />;
}
