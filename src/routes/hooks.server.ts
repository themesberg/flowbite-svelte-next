// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.hostname === 'next.flowbite-svelte.com') {
		throw redirect(308, 'https://flowbite-svelte.com' + event.url.pathname + event.url.search);
	}

	return resolve(event);
};
