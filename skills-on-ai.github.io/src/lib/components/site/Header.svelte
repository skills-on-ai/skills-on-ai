<script lang="ts">
	import { Header, ContainerWithFixedWidth } from '@lilydesignsystem/svelte-headless';
	import SiteNav from './SiteNav.svelte';
	import PickerBar from '@lilydesignsystem/svelte-picker-bar';
	import type { ShareTarget } from '@lilydesignsystem/svelte-share-picker';
	import { themes, DEFAULT_THEME_ID } from '#lib/data/themes.js';
	import { SITE_NAME } from '#lib/site.js';

	// The picker bar's default seven-step text-size scale (largest … smallest,
	// starting on normal) is used; theme.css maps each slug to a font scale.
	// Storage keys match the inline script in app.html, which applies the
	// stored theme and text size before first paint.
	const themeSlugs = themes.map((t) => t.id);
	const themeLabels = Object.fromEntries(themes.map((t) => [t.id, t.label]));
	// The share-picker ships no social-network URLs by design; a share list
	// is an editorial/privacy decision, so every destination is supplied here.
	const shareTargets: ShareTarget[] = [
		{
			id: 'email',
			label: 'Share on Email',
			href: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
			newTab: false
		},
		{
			id: 'linkedin',
			label: 'Share on LinkedIn',
			href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
		},
		{
			id: 'bluesky',
			label: 'Share on Bluesky',
			href: (url, title) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`
		},
		{
			id: 'threads',
			label: 'Share on Threads',
			href: (url, title) => `https://www.threads.net/intent/post?text=${encodeURIComponent(`${title} ${url}`)}`
		},
		{
			id: 'reddit',
			label: 'Share on Reddit',
			href: (url, title) => `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
		},
		{
			id: 'mastodon',
			label: 'Share on Mastodon',
			href: (url, title) => `https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
		}
	];
</script>

<Header label="Site header">
	<ContainerWithFixedWidth maxWidth="72rem">
		<div class="site-header-bar">
			<a class="brand" href="/">
				<strong>Skills on AI</strong>
			</a>
			<SiteNav />
			<div class="site-header-controls">
				<a class="icon-button" href="/" aria-label="Home">
					<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M3 11.5 12 4l9 7.5" />
						<path d="M5 10v10h5v-6h4v6h5V10" />
					</svg>
				</a>
				<a class="icon-button" href="https://linkedin.com/in/joelparkerhenderson" aria-label="Joel Parker Henderson on LinkedIn">
					<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
						<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>
					</svg>
				</a>
				<a class="icon-button" href="https://github.com/skills-on-ai/skills-on-ai" aria-label="View source on GitHub">
					<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
						<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.28 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-11.5-11.5H12Z"/>
					</svg>
				</a>
				<PickerBar
					labels={{
						search: 'Search skills',
						searchInput: 'Search terms',
						searchSubmit: 'Search',
						theme: 'Colour theme — all 45 Lily Design System themes',
						locale: 'Language',
						textSize: 'Text size',
						share: 'Share'
					}}
					searchProps={{ placeholder: 'Search by name or description…' }}
					themesUrl="/themes/"
					themes={themeSlugs}
					themeProps={{
						themeLabels,
						storageKey: 'skills-on-ai-theme',
						defaultValue: DEFAULT_THEME_ID,
						name: 'theme'
					}}
					locales={['en']}
					textSizeProps={{
						storageKey: 'skills-on-ai-text-size',
						name: 'text-size'
					}}
					{shareTargets}
					shareProps={{
						title: SITE_NAME,
						copyLabel: 'Copy link',
						copiedLabel: 'Link copied to clipboard',
						copyFailedLabel: 'Could not copy — copy it from the address bar'
					}}
				/>
			</div>
		</div>
	</ContainerWithFixedWidth>
</Header>

<style>
	.site-header-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		padding-block: 0.75rem;
	}
	.brand {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		text-decoration: none;
		color: inherit;
	}
	.site-header-controls {
		margin-inline-start: auto;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	.icon-button {
		display: inline-flex;
		color: inherit;
	}
</style>
