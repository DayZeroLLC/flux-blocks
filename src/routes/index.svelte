<script lang="ts">
	import type { BreadcrumbItem } from "carbon-components-svelte";
    import "carbon-components-svelte/css/g80.css";
	import FluxBreadcrumb from "../lib/FuxBreadcrumb/FluxBreadcrumb.wc.svelte";	

	export let items: BreadcrumbItem[] = [];
	let item1 = {} as BreadcrumbItem;
	item1.id=1;
	item1.href = '/';
	item1.title = 'Home';
	item1.isCurrentPage = false;
	items.push(item1);
	let item2 = {} as BreadcrumbItem;
	item2.id=2;
	item2.href = '/profile';
	item2.title = 'Profile';
	item2.isCurrentPage = true;
	items.push(item2);	
</script>

<main>
	<FluxBreadcrumb noTrailingSlash skeleton={false} items={items} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>