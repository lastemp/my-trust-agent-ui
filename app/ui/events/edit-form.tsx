'use client';

import { InstitutionForm, EventForm, InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateEvent } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function EditEventForm({
  invoice,
  institution,
  event,
}: {
  invoice: InvoiceForm;
  institution: InstitutionForm;
  event: EventForm;
}) {
  const initialState = { message: null, errors: {} };
  const updateEventWithId = updateEvent.bind(null, invoice.id);
  const [state, dispatch] = useFormState(updateEventWithId, initialState);
  
  return (
    <form action={dispatch}>
      <input type="hidden" name="id" value={invoice.id} />
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* event Name */}
        <div className="mb-4">
          <label htmlFor="event" className="mb-2 block text-sm font-medium">
            Event
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="event"
                name="event"
                type="string"
                defaultValue={event.name}
                //step="0.01"
                placeholder="Enter Event Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="event-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.event ? (
            <div
              id="event-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.event.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

        {/* Total Budget */}
        <div className="mb-4">
          <label htmlFor="totalBudget" className="mb-2 block text-sm font-medium">
            Total Budget
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="totalBudget"
                name="totalBudget"
                type="number"
                defaultValue={event.total_budget}
                step="0.01"
                placeholder="Enter Total Budget"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="totalBudget-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.totalBudget ? (
            <div
              id="totalBudget-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.totalBudget.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

        {/* Funds Deposited */}
        <div className="mb-4">
          <label htmlFor="fundsDeposited" className="mb-2 block text-sm font-medium">
            Funds Deposited
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="fundsDeposited"
                name="fundsDeposited"
                type="number"
                defaultValue={event.funds_deposited}
                step="0.01"
                placeholder="Enter Funds Deposited"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="fundsDeposited-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.fundsDeposited ? (
            <div
              id="fundsDeposited-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.fundsDeposited.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="mb-2 block text-sm font-medium">
            Date
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="date"
                name="date"
                type="string"
                defaultValue={event.date}
                //step="0.01"
                placeholder="Enter Date"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="date-error"
              />
              <PencilIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {state.errors?.date ? (
            <div
              id="date-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.date.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
              </div>
        </div>

        {/* Institution Name */}
        <div className="mb-4">
          <label htmlFor="institution" className="mb-2 block text-sm font-medium">
            Institution
          </label>
          <div className="relative">
            <select
              id="institutionName"
              name="institutionId"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={institution.id}
              aria-describedby="institutionName-error"
            >
              <option value="" disabled>
                Select institution
              </option>
              <option key={institution.id} value={institution.id}>
                  {institution.name}
                </option>
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
            {state.errors?.institutionId ? (
          <div
            id="institutionName-error"
            aria-live="polite"
            className="mt-2 text-sm text-red-500"
          >
            {state.errors.institutionId.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/events"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Event</Button>
      </div>
    </form>
  );
}
