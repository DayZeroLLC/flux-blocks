<svelte:options tag="flux-breadcrumb"></svelte:options>
<script lang="ts">
	/** Set to `true` to hide the breadcrumb trailing slash */
	export let noTrailingSlash = false;
	/** Set to `true` to display skeleton state */
	export let skeleton = false;
	export let items: BreadcrumbItem[] = [];
	import { Breadcrumb, BreadcrumbItem } from "carbon-components-svelte";
</script>
  
<Breadcrumb noTrailingSlash={noTrailingSlash} skeleton={skeleton}>
	{#each items as thing (thing.id)}
	<BreadcrumbItem href={thing.href}
	isCurrentPage={thing.isCurrentPage}
	>{thing.title}</BreadcrumbItem>
	{/each}	
</Breadcrumb>