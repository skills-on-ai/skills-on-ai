<script lang="ts">
	// Footer links. The category list lives on /categories/, not here.
	import { REPO_URL } from '#lib/site.js';
</script>

<nav class="footer-nav" aria-label="Footer">
	<div class="footer-nav-column">
		<h2>More</h2>
		<ul>
			<li><a href="/about/">About</a></li>
			<li><a href={REPO_URL}>Source on GitHub</a></li>
			<li><a href="{REPO_URL}#readme">README</a></li>
		</ul>
	</div>
</nav>

<style>
	.footer-nav {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		gap: 1.5rem;
		padding-block: 1.5rem;
	}
	.footer-nav h2 {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		opacity: 0.7;
		margin: 0 0 0.5rem;
	}
	.footer-nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}
	.footer-nav a {
		color: inherit;
		font-size: 0.9rem;
	}
</style>
