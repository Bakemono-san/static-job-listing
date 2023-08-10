<script>
  import Card from "./lib/Card.svelte";
  import close from "../public/images/icon-remove.svg";
  import { datas } from "./lib/data";

  let donnees = datas;
  let filteredData = [];

  let filter = (index) => {
    filteredData.splice(index, 1);
    filteredData = filteredData;
  };
</script>

<main class="bg-container-background h-full">
  <!-- header -->
  <header
    class="relative flex justify-center bg-header-color bg-cover bg-no-repeat bg-center h-28 w-full sm:mb-10 p-4"
  >
    <!-- filtre -->
    <div
      class="absolute flex flex-wrap gap-4 bg-white -bottom-1/4 p-4 inset-x-4 sm:inset-x-4 max-w-md md:max-w-4xl mx-auto"
      class:hidden={filteredData.length == 0}
    >
      {#each filteredData as data, i}
        <div
          class="bg-container-background flex items-center justify-center max-h-6"
        >
          <p class="p-2">{data}</p>
          <button
            on:click={() => {
              filter(i);
              if (filteredData.length == 0) {
                donnees = datas;
                donnees = donnees;
              }
            }}
            class="bg-header-color hover:bg-feature-background w-6 h-6 p-1 flex items-center justify-center text-white"
            ><img src={close} alt="close" class="w-full h-full" /></button
          >
        </div>
      {/each}
    </div>
  </header>
  <!-- conteneur -->
  <div
    class="flex flex-col items-center justify-center sm:gap-6 gap-16 sm:py-6 sm:px-0 md:max-w-4xl py-28 px-4 max-w-md mx-auto"
  >
    <Card bind:filteredData bind:datas={donnees} />
  </div>

  <!-- /conteneur -->
</main>

<style>
  header {
    background-image: url("../public/images/bg-header-desktop.svg");
  }
  @media screen and (max-width: 600px) {
    header {
      background-image: url("../public/images/bg-header-mobile.svg");
    }
  }
</style>
