---
layout: componentLayout
title: Svelte Button Group - Flowbite
breadcrumb_title: Svelte Button Group
component_title: Button group
dir: Components
description: Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line
---

<script>
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, P, A } from '$lib'
  const dirName = 'buttongroup'
</script>

The button group component from flowbite-svelte can be used to stack together multiple buttons and links inside a single element.

## Setup

```svelte example hideOutput
<script>
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>
```

## Default

Use the following code to stack together buttons into a single group.

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
<script>
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>

<ButtonGroup class="*:ring-primary-700!">
  <Button>Profile</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>
```

## More examples

```svelte example class="flex flex-col flex-wrap gap-4" hideResponsiveButtons
<script>
  import { ButtonGroup, Button, GradientButton } from "flowbite-svelte";
</script>

<div class="text-gray-900 dark:text-gray-100">
  <div class="py-4">Pills</div>
  <ButtonGroup class="space-x-px">
    <Button pill color="purple">Profile</Button>
    <Button pill color="purple">Settings</Button>
    <Button pill color="purple">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Standard buttons</div>
  <ButtonGroup>
    <Button color="red">Profile</Button>
    <Button color="green">Settings</Button>
    <Button color="yellow">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Outline</div>
  <ButtonGroup>
    <Button outline color="red">Profile</Button>
    <Button outline color="green">Settings</Button>
    <Button outline color="yellow">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Gradient with shadows</div>
  <ButtonGroup>
    <GradientButton shadow color="green">Profile</GradientButton>
    <GradientButton shadow color="pink">Settings</GradientButton>
    <GradientButton shadow color="teal">Messages</GradientButton>
  </ButtonGroup>
  <div class="py-4">Dualtone gradient</div>
  <ButtonGroup class="space-x-px">
    <GradientButton color="purpleToBlue">Profile</GradientButton>
    <GradientButton color="cyanToBlue">Settings</GradientButton>
    <GradientButton color="greenToBlue">Messages</GradientButton>
  </ButtonGroup>
  <div class="py-4">Dualtone gradient pill</div>
  <ButtonGroup class="space-x-px">
    <GradientButton pill color="purpleToBlue">Profile</GradientButton>
    <GradientButton pill color="cyanToBlue">Settings</GradientButton>
    <GradientButton pill color="greenToBlue">Messages</GradientButton>
  </ButtonGroup>
</div>
```

## Button group as links

You can also use the button group component as links.

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
<script>
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>

<ButtonGroup class="*:ring-primary-700!">
  <Button href="/">Profile</Button>
  <Button href="/">Settings</Button>
  <Button href="/">Messages</Button>
</ButtonGroup>
```

## Group buttons with icons

You can also use SVG icons inside the grouped buttons.

```svelte example class="flex justify-center"
<script>
  import { ButtonGroup, Button } from "flowbite-svelte";
  import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid } from "flowbite-svelte-icons";
</script>

<ButtonGroup class="*:ring-primary-700!">
  <Button>
    <UserCircleSolid class="me-2 h-4 w-4" />
    Profile
  </Button>
  <Button>
    <AdjustmentsVerticalOutline class="me-2 h-4 w-4" />
    Settings
  </Button>
  <Button>
    <DownloadSolid class="me-2 h-4 w-4" />
    Download
  </Button>
</ButtonGroup>
```

## Outline

Group a series of buttons together on a single line or stack them in a vertical column.

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
<script>
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>

<ButtonGroup>
  <Button outline color="dark">Profile</Button>
  <Button outline color="dark">Settings</Button>
  <Button outline color="dark">Messages</Button>
</ButtonGroup>
```

## Outline with icon

Group a series of buttons together on a single line or stack them in a vertical column.

```svelte example class="flex justify-center"
<script>
  import { ButtonGroup, Button } from "flowbite-svelte";
  import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid } from "flowbite-svelte-icons";
</script>

<ButtonGroup>
  <Button outline color="dark">
    <UserCircleSolid class="me-2 h-4 w-4" />
    Profile
  </Button>
  <Button outline color="dark">
    <AdjustmentsVerticalOutline class="me-2 h-4 w-4" />
    Settings
  </Button>
  <Button outline color="dark">
    <DownloadSolid class="me-2 h-4 w-4" />
    Download
  </Button>
</ButtonGroup>
```

## Events

You can add the `onclick` event to the `Button` component.

```svelte example class="flex justify-center" hideResponsiveButtons
<script>
  import { ButtonGroup, Button } from "flowbite-svelte";
  const handleClick = () => {
    alert("Clicked");
  };
</script>

<ButtonGroup class="*:ring-primary-700!">
  <Button onclick={handleClick}>Click me</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Button Group](https://flowbite.com/docs/components/button-group/)

<GitHubCompoLinks />
