<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";
  import Modal from "./components/Modal.svelte";
  import { createPolls } from "./utils/utils";
  import type { CreatePoll, DeleteModalProps, EditModalProps } from "./utils/types";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = items[0];  

  const deleteModalProps: DeleteModalProps = {
    isModalOpen: false,
    confirmText: "Delete",
    cancelText: "Cancel",
    onConfirm: async () => {},
    title: "Delete Polls"
  };

  const editModalProps: EditModalProps = {
    isModalOpen: false,
    confirmText: "Edit",
    cancelText: "Cancel",
    onConfirm: async () => {},
    title: "Edit Polls",
    polls: { question: "", answer_a: "", answer_b: ""},
  };

  const tabChange = (e: CustomEvent) => {
    activeItem = e.detail;
  };

  const handleAddPoll = async (e: CustomEvent) => {
    const { question, answer_a, answer_b } = e.detail; 
    const body: CreatePoll = { question, answer_a, answer_b };
    await createPolls(body);
    
    activeItem = items[0];
  };

  const handleModalDelete = (e: CustomEvent) => {
    const {id, handleDelete} = e.detail;
    deleteModalProps.isModalOpen = true;
    deleteModalProps.onConfirm = async () => {
      await handleDelete(id);
      deleteModalProps.isModalOpen = false;
      location.reload();
    };
  }

  const handleModalEdit = (e: CustomEvent) => {
    const {poll, handleEdit} = e.detail;
    editModalProps.polls = {
      question: poll.question,
      answer_a: poll.answer_a,
      answer_b: poll.answer_b,
    }
    editModalProps.isModalOpen = true;
    editModalProps.onConfirm = async () => {
      await handleEdit(poll.id, editModalProps.polls);
      editModalProps.isModalOpen = false;
      location.reload();
    }
  }

</script>

<Header />
<main>
  <h1>Hello, Man!</h1>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList on:deletePolls={handleModalDelete} on:editPolls={handleModalEdit}/>
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:addPoll={handleAddPoll} />
  {/if}
</main>
<Footer />

<Modal
  {...deleteModalProps}
>
  <p>Are you sure want to delete this polls?</p>
</Modal>

<Modal
  {...editModalProps}
>
  <CreatePollForm bind:fields={editModalProps.polls} isEdit={true}/>
</Modal>

<style> 
  main {
    padding: 0 40px;
    margin-bottom: 24px;
  }
</style>
