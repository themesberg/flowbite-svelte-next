<script lang="ts">
  import clsx from "clsx";
  import { type MarkProps as Props, mark } from "./index";

  let { children, class: className, ...restProps }: Props = $props();
</script>

<mark {...restProps} class={mark({ class: clsx(className) })}>
  {@render children()}
</mark>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:class: string;
-->
