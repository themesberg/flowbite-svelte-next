<script lang="ts">
  import { setContext } from "svelte";
  import { type TableProps as Props, table as tableCls, type TableCtxType, TableHead, TableBody, type HeadItemType } from ".";
  import clsx from "clsx";

  let { children, footerSlot, captionSlot, items: tableItems, divClass = "relative overflow-x-auto", striped, hoverable, border = true, shadow, color = "default", class: className, ...restProps }: Props = $props();

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
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:footerSlot: any;
@props:captionSlot: any;
@props:items: any;
@props:divClass: any = "relative overflow-x-auto";
@props:striped: any;
@props:hoverable: any;
@props:border: any = true;
@props:shadow: any;
@props:color: any = "default";
@props:class: string;
-->
