<script lang="ts">
  import { getContext } from "svelte";
  import { type ToolbarButtonProps as Props, toolbarButton } from "./";
  import clsx from "clsx";

  const background = getContext("background");
  let { children, color = "default", name, "aria-label": ariaLabel, size = "md", href, class: className, ...restProps }: Props = $props();

  const buttonClass = $derived(
    toolbarButton({
      color,
      size,
      background: !!background,
      class: clsx(className)
    })
  );

  // let buttonClass: string = twMerge('focus:outline-hidden whitespace-normal', sizing[size], colors[color], color === 'default' && (background ? 'dark:hover:bg-gray-600' : 'dark:hover:bg-gray-700'), className);
</script>

{#if href}
  <a {href} {...restProps} class={buttonClass} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children()}
  </a>
{:else}
  <button type="button" {...restProps} class={buttonClass} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children()}
  </button>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:color: any = "default";
@props:name: any;
@props:"aria-label": any;
@props:size: any = "md";
@props:href: any;
@props:class: string;
-->
