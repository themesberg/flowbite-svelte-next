<script lang="ts">
  import { setContext } from "svelte";
  import { table as tableCls, TableHead, TableBody } from ".";
  import clsx from "clsx";
  import type { TableProps, TableCtxType, HeadItemType } from "$lib/types";

  let { children, footerSlot, captionSlot, items: tableItems, divClass = "relative overflow-x-auto", striped, hoverable, border = true, shadow, color = "default", class: className, ...restProps }: TableProps = $props();

  const { base, table } = $derived(tableCls({ color, shadow }));

  let tableCtx: TableCtxType = {
    get striped() {
      return striped;
    },
    get hoverable() {
      return hoverable;
    },
    get border() {
      return border;
    },
    get color() {
      return color;
    }
  };

  setContext("tableCtx", tableCtx);
  let headItems: (string | HeadItemType)[] = $state([]);
  let bodyItems: (string | number | boolean)[][] = $state([]);
  if (tableItems) {
    headItems = Object.keys(tableItems[0]).map((key) => ({ text: key.charAt(0).toUpperCase() + key.slice(1) }));
    bodyItems = tableItems.map((item) => Object.values(item));
  }
</script>

<div class={base({ class: divClass })}>
  <table {...restProps} class={table({ class: clsx(className) })}>
    {#if captionSlot}
      {@render captionSlot()}
    {/if}
    {#if tableItems}
      <TableHead {headItems} />
      <TableBody {bodyItems} />
    {:else if children}
      {@render children()}
    {/if}
    {#if footerSlot}
      {@render footerSlot()}
    {/if}
  </table>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TableProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1329)
## Props
@prop children
@prop footerSlot
@prop captionSlot
@prop items: tableItems
@prop divClass = "relative overflow-x-auto"
@prop striped
@prop hoverable
@prop border = true
@prop shadow
@prop color = "default"
@prop class: className
@prop ...restProps
-->
