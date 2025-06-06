<script lang="ts">
  import { Button, Toggle } from "$lib";
  const customSize = "w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8";
  const components = "Toggle";

  let isDisabled = $state(false);
  let checked: boolean = $state(false);
  const handleClick = () => {
    isDisabled = !isDisabled;
  };
</script>

<h1 class="my-4 text-3xl">Toggle</h1>
The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

<h2 class="text-2xl">Toggle examples</h2>
Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

<div class="border rounded p-4 my-4 flex flex-col gap-4">
  <Toggle>Toggle me</Toggle>
  <Toggle checked={true}>Checked toggle</Toggle>
  <Toggle disabled>Disabled toggle</Toggle>
  <Toggle checked disabled>Disabled checked</Toggle>
</div>

<h2 class="text-2xl">Colors</h2>

<div class="border rounded p-4 my-4 flex flex-col gap-4">
  <Toggle color="red" checked>Red</Toggle>
  <Toggle color="green" checked>Green</Toggle>
  <Toggle color="purple" checked>Purple</Toggle>
  <Toggle color="yellow" checked>Yellow</Toggle>
  <Toggle color="teal" checked>Teal</Toggle>
  <Toggle color="orange" checked>Orange</Toggle>
</div>

<h2 class="text-2xl">Sizes</h2>

<div class="border rounded p-4 my-4 flex flex-col gap-4">
  <Toggle size="small">Small toggle</Toggle>
  <Toggle size="default" checked>Default toggle</Toggle>
  <Toggle size="large" checked>Large toggle</Toggle>
  <Toggle size={undefined} spanClass={customSize}>Custom toggle</Toggle>
</div>

<h2 class="text-2xl">Label for off state</h2>

<div class="border rounded p-4 my-4 flex flex-col gap-4">
  <Toggle>
    {#snippet offLabel()}
      dark mode
    {/snippet}
    light mode
  </Toggle>
</div>

<h2 class="text-2xl">Disabled</h2>

<div class="border rounded p-4 my-4 flex flex-col gap-4">
  <Button class="w-48" onclick={handleClick}>Disabled: {isDisabled ? "True" : "False"}</Button>

  <Toggle class="mt-3" bind:checked disabled={isDisabled}>Disabled: {isDisabled}</Toggle>
</div>
