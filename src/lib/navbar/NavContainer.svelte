<script lang="ts">
  import clsx from "clsx";
  import { navbar_container } from "./theme";
  import type { NavContainerProps as Props } from "./type";

  let { children, fluid, class: clasName, ...restProps }: Props = $props();
</script>

<div {...restProps} class={navbar_container({ fluid, class: clsx(clasName) })}>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:fluid: any;
@props:class: string;
-->
