<script lang="ts">
  import Modal from "./Modal.svelte";

  interface People {
    id: number,
    name: string,
    age: number,
  }
  
  let people: People[] = [
    { id:1, name: "Zoro", age: 12 },
    { id:2, name: "Luffy", age: 15 },
  ]
  
  let showModal = false;

  function handleDelete(e:Event, id: number) {
    people = people.filter(item => item.id != id);
    console.log(e.target);
  }
</script>

<Modal 
  message={"This messsage from props!"} 
  {showModal}
  isDanger={false}
  on:click={() => showModal = !showModal}
/>
<main>
  <button on:click={() => showModal = !showModal}>Open Modal</button>
  {#each people as person (person.id) }
    <div class="person">
      <h4>{person.name} - {person.age}</h4>
      <button on:click={(e) => {handleDelete(e, person.id)}}>delete</button>
    </div>
  {/each}
</main>

<style> 
  .person {
    display: flex;
    gap: 24px;
  }
</style>
