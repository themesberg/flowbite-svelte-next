<script lang="ts">
  import { android } from ".";
  import type { AndroidProps } from "$lib/types";

  let { children, divClass, div2Class, div3Class, div4Class, div5Class, div6Class, div7Class, ...restProps }: AndroidProps = $props();

  const { div, slot, top, leftTop, leftMid, leftBot, right } = android();
</script>

<div {...restProps} class={div({ class: divClass })}>
  <div class={top({ class: div2Class })}></div>
  <div class={leftTop({ class: div3Class })}></div>
  <div class={leftMid({ class: div4Class })}></div>
  <div class={leftBot({ class: div5Class })}></div>
  <div class={right({ class: div6Class })}></div>
  <div class={slot({ class: div7Class })}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AndroidProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L493)
## Props
@prop children
@prop divClass
@prop div2Class
@prop div3Class
@prop div4Class
@prop div5Class
@prop div6Class
@prop div7Class
@prop ...restProps
-->
