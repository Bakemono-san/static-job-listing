<script>
  import { fade, scale } from "svelte/transition";

  export let filteredData = [];

  export let datas;
  $: donnees = filteredData.length === 0 ? datas : getFilteredData;

  $: getFilteredData = filteredData.length
    ? datas.filter((data) => {
        if (filteredData.includes(data.level)) {
          return filteredData.includes(data.level) ?? datas;
        }
        if (filteredData.includes(data.role)) {
          return filteredData.includes(data.role) ?? datas;
        }
        for (let i in filteredData) {
          if (data.tools.includes(filteredData[i]))
            return data.tools.includes(filteredData[i]) ?? datas;
          {
          }
        }
        for (let i in data.languages) {
          if (filteredData.includes(data.languages[i])) {
            return filteredData.includes(data.languages[i]) ?? datas;
          }
        }

        donnees = donnees;
      })
    : console.log("hello");

  let addFilter = (data) => {
    if (!filteredData.includes(data)) {
      filteredData = [...filteredData, data];
    }
  };
</script>

{#each donnees as data}
  <div
    class="card bg-white duration-300"
    class:border-l={data.featured}
    class:border-l-4={data.featured}
    class:border-header-color={data.featured}
    out:scale
    in:scale
  >
    <section
      class="flex flex-col sm:flex-row relative font-sm shrink-0 sm:gap-4 sm:items-center"
    >
      <div
        class="rounded-full w-16 h-16 sm:w-20 sm:h-20 absolute -top-2/3 sm:relative sm:top-0"
      >
        <img src={data.logo} alt="logo" class="rounded-full" />
      </div>
      <div
        class="flex flex-col md:gap-2 gap-3 font-serif font-bold mt-2 text-sm"
      >
        <!-- entete avec button -->
        <p class="text-header-color flex items-center gap-2">
          {data.company}
          {#if data.new}
            <button class="bg-header-color ml-1 text-white rounded-xl px-2"
              >NEW!</button
            >
          {/if}
          {#if data.featured}
            <button class="bg-feature-background text-white rounded-xl px-2.5"
              >Featured</button
            >
          {/if}
        </p>
        <!-- title -->
        <p class="text-feature-background font-bold">{data.position}</p>
        <!-- ul -->
        <ul class="flex text-detail gap-2.5">
          <li>{data.postedAt}</li>
          <li class="list-disc mx-3">{data.contract}</li>
          <li class="list-disc">{data.location}</li>
        </ul>
      </div>
    </section>
    <hr class="md:hidden text-[gray]" />
    <section
      class="flex flex-wrap md:flex-nowrap items-center justify-start gap-4 text-header-color md:font-medium font-bold"
    >
      <!-- liste button -->
      <button
        on:click={() => {
          addFilter(data.role);
        }}
        class="py-1 px-2 bg-container-background rounded">{data.role}</button
      >
      <button
        on:click={() => {
          addFilter(data.level);
        }}
        class="py-1 px-2 bg-container-background rounded">{data.level}</button
      >
      {#each data.languages as language}
        <button
          on:click={() => {
            addFilter(language);
          }}
          class="py-1 px-2 bg-container-background rounded">{language}</button
        >
      {/each}

      {#each data.tools as tool}
        <button
          on:click={() => {
            addFilter(tool);
          }}
          class="py-1 px-2 bg-container-background rounded">{tool}</button
        >
      {/each}
    </section>
  </div>
{/each}
