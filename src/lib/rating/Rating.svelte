<script lang="ts">
  import Star from "./Star.svelte";
  import { type RatingProps as Props, rating as ratingVariants } from ".";
  import clsx from "clsx";

  let { children, text, class: divClass, size = 24, total = 5, rating = 4, icon: Icon = Star, count = false, pClass }: Props = $props();

  const { base, p } = $derived(ratingVariants());
  const ratingGroupId = crypto.randomUUID();
  let fullStars: number = Math.floor(rating);
  let rateDiffence = rating - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars: number = total - (fullStars + Math.ceil(rateDiffence));
</script>

<div class={base({ class: clsx(divClass) })}>
  {#if count && children}
    <Icon fillPercent={100} {size} iconIndex={0} groupId={ratingGroupId} />
    <p class={p({ class: pClass })}>{rating}</p>
    {@render children()}
  {:else}
    <!-- eslint-disable @typescript-eslint/no-unused-vars-->
    {#each Array(fullStars) as _, index}
      <Icon {size} fillPercent={100} iconIndex={index} groupId={`rating-${ratingGroupId}-full`} />
    {/each}
    {#if percentRating}
      <Icon {size} fillPercent={percentRating} iconIndex={fullStars} groupId={`rating-${ratingGroupId}-partial`} />
    {/if}
    <!-- eslint-disable @typescript-eslint/no-unused-vars-->
    {#each Array(grayStars) as _, index}
      <Icon {size} fillPercent={0} iconIndex={index} groupId={`rating-${ratingGroupId}-empty`} />
    {/each}
    {#if text}
      {@render text()}
    {/if}
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:text: any;
@props:class: string;
@props:size: any = 24;
@props:total: any = 5;
@props:rating: any = 4;
@props:icon: any = Star;
@props:count: any = false;
@props:pClass: any;
-->
