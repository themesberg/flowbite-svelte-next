<script lang="ts">
  import { P, Span } from "$lib";
</script>

<h1 class="my-4 text-3xl">Text</h1>

<h2 class="text-2xl">Font size</h2>

<div class="border rounded p-4 my-4">
  <P size="xs">Aa</P>
  <P size="sm">Aa</P>
  <P size="base">Aa</P>
  <P size="lg">Aa</P>
  <P size="xl">Aa</P>
  <P size="2xl">Aa</P>
  <P size="3xl">Aa</P>
  <P size="4xl">Aa</P>
  <P size="5xl">Aa</P>
  <P size="6xl">Aa</P>
  <P size="7xl">Aa</P>
  <P size="8xl">Aa</P>
  <P size="9xl">Aa</P>
</div>

<h2 class="text-2xl">Font weight</h2>

<div class="border rounded p-4 my-4">
  <P size="4xl" weight="thin">Aa</P>
  <P size="4xl" weight="extralight">Aa</P>
  <P size="4xl" weight="light">Aa</P>
  <P size="4xl" weight="normal">Aa</P>
  <P size="4xl" weight="medium">Aa</P>
  <P size="4xl" weight="semibold">Aa</P>
  <P size="4xl" weight="bold">Aa</P>
  <P size="4xl" weight="extrabold">Aa</P>
  <P size="4xl" weight="black">Aa</P>
</div>

<h2 class="text-2xl">Text color</h2>
Use the `color` prop to set the color of the inline text.

<div class="border rounded p-4 my-4">
  <P class="text-blue-700 dark:text-blue-500">This text is in the blue color.</P>
  <P class="text-green-700 dark:text-green-500">This text is in the green color.</P>
  <P class="text-red-700 dark:text-red-500">This text is in the red color.</P>
  <P class="text-purple-700 dark:text-purple-500">This text is in the purple color.</P>
  <P class="text-teal-700 dark:text-teal-500">This text is in the teal color.</P>
</div>

<h2 class="text-2xl">Letter spacing</h2>
Increase or decrease the spacing between letters using the `space` prop.

<div class="border rounded p-4 my-4">
  <P space="tighter">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="tight">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="normal">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="wide">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="wider">Flowbite app will help you improve yourself by analysing your everyday life.</P>
  <P space="widest">Flowbite app will help you improve yourself by analysing your everyday life.</P>
</div>

<h2 class="text-2xl">Text decoration</h2>

<h3 class="text-xl">Underline</h3>
Update the text decoration style using the `underline` and `class` props.

<div class="border rounded p-4 my-4">
  <P>
    Track work across the enterprise through an open, collaborative platform. <Span underline>Link issues across Jira</Span> and ingest data from other <Span underline class="decoration-blue-500 decoration-double">software development</Span> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <Span underline class="decoration-green-500 decoration-dotted">requests</Span>, <Span underline class="decoration-red-500 decoration-dashed decoration-4">incidents</Span>, and <Span underline class="decoration-sky-500 decoration-wavy">changes</Span>.
  </P>
</div>

<h3 class="text-xl">Line through</h3>
Set a strikethrough line on a text element using the `line-through` class.

<div class="border rounded p-4 my-4">
  <Span class="line-through">$109</Span><Span class="ms-3">$79</Span>
</div>

<h3 class="text-xl">Uppercase</h3>
Force uppercase characters for a given portion of text using the uppercase class.

<div class="border rounded p-4 my-4">
  <P>The crypto <Span class="uppercase">identity</Span> primitive.</P>
</div>

<h2 class="text-2xl">Font style</h2>
Set italic or non italic styles with the props.
<h3 class="text-xl">Italic</h3>
Use the `italic` prop to set italic font style to a text element.

<div class="border rounded p-4 my-4">
  <P italic>The crypto identity primitive.</P>
</div>

<h3 class="text-xl">Normal</h3>
Text elements by default are non-italic.

<div class="border rounded p-4 my-4">
  <P>The crypto identity primitive.</P>
</div>

<h2 class="text-2xl">Line Height</h2>
Set the height between lines using the `height` prop.
<h3 class="text-xl">Leading normal</h3>
Use the `height="normal"` (default) prop to set default line height.

<div class="border rounded p-4 my-4">
  <P size="3xl" height="normal" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</div>

<h3 class="text-xl">Leading relaxed</h3>
Use the `height="relaxed"` prop to increase the space between lines.

<div class="border rounded p-4 my-4">
  <P size="3xl" height="relaxed" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</div>

<h3 class="text-xl">Leading loose</h3>
Use the `height="loose"` prop to set a large amount of space between text lines.

<div class="border rounded p-4 my-4">
  <P size="3xl" height="loose" class="max-w-lg" weight="semibold">The Al-powered app will help you improve yourself by analysing your everyday life.</P>
</div>

<h2 class="text-2xl">Text Align</h2>
<h3 class="text-xl">Left</h3>

<div class="border rounded p-4 my-4">
  <P align="left">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</div>

<h3 class="text-xl">Center</h3>

<div class="border rounded p-4 my-4">
  <P align="center">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</div>

<h3 class="text-xl">Right</h3>
Use the `align="right"` prop to align the text element to the right side of the page.

<div class="border rounded p-4 my-4">
  <P align="right">Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</div>

<h3 class="text-xl">Text justify</h3>
Use the `justify` prop to justify the text content.

<div class="border rounded p-4 my-4">
  <P justify>Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
  <P>Get started with an enterprise-level, profesionally designed, fully responsive, and HTML semantic set of web pages, sections and over 400+ components crafted with the utility classes from Tailwind CSS and based on the Flowbite component library</P>
</div>

<h2 class="text-2xl">Whitespace</h2>
Configure the whitespace behaviour of inline text elements using the `whitespace` prop.
<h3 class="text-xl">Normal</h3>
Use the `whitespace="normal"` prop to set the default whitespace behaviour.

<div class="border rounded p-4 my-4">
  <P whitespace="normal">This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.</P>
</div>

<h3 class="text-xl">Nowrap</h3>
Use the `whitespace="nowrap"` prop to prevent text being added to a new line when the full width has been reached.

<div class="border rounded p-4 my-4">
  class="overflow-y-scroll"
  <P whitespace="nowrap">This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.</P>
</div>

<h3 class="text-xl">Pre line</h3>
Use the `whitespace="preline'` prop to add whitespace exactly how it has been set from the source code.

<div class="border rounded p-4 my-4">
  <P whitespace="preline">This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.</P>
</div>

<h2 class="text-2xl">Text Decoration</h2>
Style Update the text decoration style using the `underline` and `class` props.

<div class="border rounded p-4 my-4">
  <P>
    Track work across the enterprise through an open, collaborative platform. <Span underline>Link issues across Jira</Span> and ingest data from other <Span underline class="decoration-blue-500 decoration-double">software development</Span> tools, so your IT support and operations teams have richer contextual information to rapidly respond to <Span underline class="decoration-green-500 decoration-dotted">requests</Span>, <Span underline class="decoration-red-500 decoration-dashed decoration-4">incidents</Span>, and <Span underline class="decoration-sky-500 decoration-wavy">changes</Span>.
  </P>
</div>
