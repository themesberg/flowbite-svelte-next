<script lang="ts">
  import Popper from "$lib/utils/Popper.svelte";
  import { getSideAxis } from "@floating-ui/utils";
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { speed_dial } from "./theme";
  import type { SpeedDialProps as Props, SpeedCtxType } from "./type";

  let { children, popperClass, placement = "top", pill = true, tooltip = "left", trigger = "hover", textOutside = false, class: className, ...restProps }: Props = $props();

  setContext<SpeedCtxType>("speed-dial", { pill, tooltip, textOutside });

  let vertical: boolean = $derived(getSideAxis(placement) === "y");

  let { base, popper } = $derived(speed_dial({ vertical }));
</script>

<!-- class="bg-transparent" -->

<Popper {...restProps} {trigger} arrow={false} {placement} class={base({ class: clsx(className) })}>
  <div class={popper({ class: popperClass })}>
    {@render children()}
  </div>
</Popper>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:popperClass: any;
@props:placement: any = "top";
@props:pill: any = true;
@props:tooltip: any = "left";
@props:trigger: any = "hover";
@props:textOutside: any = false;
@props:class: string;
-->
