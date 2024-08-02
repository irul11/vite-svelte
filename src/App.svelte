<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import CreatePollFrom from "./components/CreatePollFrom.svelte";
  import PollList from "./components/PollList.svelte";
  import polls from "./stores/PollStore";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = items[0];
  

  const tabChange = (e: CustomEvent) => {
    activeItem = e.detail;
  }

  const handleAddPoll = (e: CustomEvent) => {
    $polls = [...$polls, e.detail];

    activeItem = items[0];
  }

</script>

<Header />
<main>
  <h1>Hello, Man!</h1>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else if activeItem === "Add New Poll"}
    <CreatePollFrom on:addPoll={handleAddPoll} />
  {/if}
</main>
<Footer />

<style> 
  main {
    padding: 0 40px;
  }
</style>
