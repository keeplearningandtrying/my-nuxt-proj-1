<template>
    <div>
        <h1 class="text-emerald-900 text-4xl m-4 p-4">Title</h1>
        <div>
            <h2 class="blue">Some content</h2>
        </div>

    </div>

    <div class="flex flex-row gap-10">
        <div>
            <h2 class="blue basis-1/3 hover:basis-1/2">Some content</h2>
        </div>

        <div>
            <h2 class="blue basis-1/6 hover:basis-1/2">Some content</h2>
        </div>
        <div>
            <h2 class="blue basis-1/6 hover:basis-1/2">Some content</h2>
        </div>
        <div>
            <h2 class="blue basis-1/6 hover:basis-1/2">Some content</h2>
        </div>
        <div>
            <h2 class="blue">Some content</h2>
            <h2 class="blue basis-1/6 hover:basis-1/2">Some content</h2>
        </div>
        <div>
            <h2 class="blue">Some content</h2>
            <h2 class="blue basis-1/6 hover:basis-1/2">Some content</h2>
        </div>

    </div>

    <div class="grid grid-cols-6 grid-rows-3"> <!-- Grid item with col-span-3 -->
        <div class="col-span-3"> Item 1 (col-span-3) </div> <!-- Grid item with col-start-4 and row-span-2 -->
        <div class="col-start-4 row-span-2"> Item 2 (col-start-4, row-span-2) </div>
        <!-- Grid item with col-end-6 and row-start-2 -->
        <div class="col-end-6 row-start-2"> Item 3 (col-end-6, row-start-2) </div>
        <!-- Grid item with col-span-full and row-start-3 -->
        <div class="col-span-full row-start-3"> Item 4 (col-span-full, row-start-3) </div>
        <div class=""> Item 5</div>
        <div class=""> Item 6</div>
        <div class=""> Item 7</div>
        <div class=""> Item 8</div>
        <div class=""> Item 9</div>
        <div class=""> Item 10</div>
        <div class=""> Item 11</div>
        <div class=""> Item 12</div>
    </div>

    <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

<div class="overflow-x-auto rounded-lg border border-gray-200">
  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead class="ltr:text-left rtl:text-right">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Name
        </th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Date of Birth
        </th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Role
        </th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Salary
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          John Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Jane Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
      </tr>
    </tbody>
  </table>
</div>

<!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

<div class="overflow-x-auto">
  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead class="ltr:text-left rtl:text-right">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Name
        </th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Date of Birth
        </th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Role
        </th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Salary
        </th>
        <th class="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          John Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Jane Doe
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Designer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<a
  href="#"
  class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div class="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
        Building a SaaS product as a software developer
      </h3>

      <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
    </div>

    <div class="hidden sm:block sm:shrink-0">
      <img
        alt="Paul Clapton"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        class="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div class="mt-4">
    <p class="max-w-[40ch] text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
      provident a, ipsa maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl class="mt-6 flex gap-4 sm:gap-6">
    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Published</dt>
      <dd class="text-xs text-gray-500">31st June, 2021</dd>
    </div>

    <div class="flex flex-col-reverse">
      <dt class="text-sm font-medium text-gray-600">Reading time</dt>
      <dd class="text-xs text-gray-500">3 minute</dd>
    </div>
  </dl>
</a>


<div>
<a href="#" class="group relative block bg-black">
  <img
    alt="Developer"
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-4 sm:p-6 lg:p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

    <div class="mt-32 sm:mt-48 lg:mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
        </p>
      </div>
    </div>
  </div>
</a>
</div>

<div>
    <h2> test</h2>
    <h2> test</h2>
    <h2> test</h2>
    <h2> test</h2>
</div>

<div>
<article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="bg-white p-4 sm:p-6">
    <time datetime="2022-10-10" class="block text-xs text-gray-500">
      10th Oct 2022
    </time>

    <a href="#">
      <h3 class="mt-0.5 text-lg text-gray-900">
        How to position your furniture for positivity
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
      Molestias explicabo corporis voluptatem?
    </p>
  </div>
</article>
</div>


<div>
<section>
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
        Product Collection
      </h2>

      <p class="max-w-md mx-auto mt-4 text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>

    <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Basic Tee
            </h3>

            <p class="mt-2">
              <span class="sr-only"> Regular Price </span>

              <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Basic Tee
            </h3>

            <p class="mt-2">
              <span class="sr-only"> Regular Price </span>

              <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Basic Tee
            </h3>

            <p class="mt-2">
              <span class="sr-only"> Regular Price </span>

              <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Basic Tee
            </h3>

            <p class="mt-2">
              <span class="sr-only"> Regular Price </span>

              <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>

</section>
</div>

<div>
    <ul
  class="-m-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 [&:hover>li]:opacity-50"
>
  <li class="p-2 transition hover:!opacity-100">
    <img
      alt="Lava"
      src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-48 w-full rounded-3xl object-cover"
    />

    <p class="mt-2 text-center text-sm font-bold text-gray-900 dark:text-white">
      Finding the Journey to Mordor
    </p>
  </li>

  <li class="p-2 transition hover:!opacity-100">
    <img
      alt="Lava"
      src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-48 w-full rounded-3xl object-cover"
    />

    <p class="mt-2 text-center text-sm font-bold text-gray-900 dark:text-white">
      Finding the Journey to Mordor
    </p>
  </li>

  <li class="p-2 transition hover:!opacity-100">
    <img
      alt="Lava"
      src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-48 w-full rounded-3xl object-cover"
    />

    <p class="mt-2 text-center text-sm font-bold text-gray-900 dark:text-white">
      Finding the Journey to Mordor
    </p>
  </li>
</ul>

</div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {}
    }
})
</script>

<style scoped></style>