<script lang="ts">
  import clsx from "clsx";
  import { indicator, type IndicatorProps as Props } from "./index";

  let { children, color = "primary", cornerStyle = "circular", size = "md", border = false, placement, offset = true, class: className, ...restProps }: Props = $props();

  let hasChildren = !!children;
  const { base } = $derived(
    indicator({
      color,
      size,
      cornerStyle,
      border,
      placement,
      offset,
      hasChildren
    })
  );
</script>

<div {...restProps} class={base({ class: clsx(className) })}>
  {#if children}
    {@render children()}
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:color: any = "primary";
@props:cornerStyle: any = "circular";
@props:size: any = "md";
@props:border: any = false;
@props:placement: any;
@props:offset: any = true;
@props:class: string;
-->
