<script lang="ts">
  import clsx from "clsx";
  import { textarea } from ".";
  import type { TextareaProps } from "$lib/types";

  let { header, footer, value = $bindable(), innerClass, headerClass, footerClass, disabled, class: className, cols, ...restProps }: TextareaProps = $props();

  let hasHeader = $derived(!!header);
  let hasFooter = $derived(!!footer);
  let wrapped: boolean = $derived(hasHeader || hasFooter);

  const { base, wrapper, innerWrapper, headerCls, footerCls } = $derived(textarea({ wrapped, hasHeader, hasFooter, cols: !!cols }));
  // $inspect('wrapped: ', wrapped);
</script>

{#if !wrapped}
  <textarea bind:value {disabled} {...restProps} class={wrapper({ class: clsx(className) })}></textarea>
{:else}
  <div class={wrapper({ class: clsx(className) })}>
    {#if header}
      <div class={headerCls({ class: headerClass })}>
        {@render header()}
      </div>
    {/if}
    <div class={innerWrapper({ class: innerClass })}>
      <textarea bind:value {disabled} {...restProps} class={base()}></textarea>
    </div>
    {#if footer}
      <div class={footerCls({ class: footerClass })}>
        {@render footer()}
      </div>
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TextareaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L790)
## Props
@prop header
@prop footer
@prop value = $bindable()
@prop innerClass
@prop headerClass
@prop footerClass
@prop disabled
@prop class: className
@prop cols
@prop ...restProps
-->
