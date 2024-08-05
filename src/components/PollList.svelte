<script lang="ts">
    import PollDetail from "@/lib/PollDetail.svelte";
    import type { Poll } from "@/utils/types";
    import { getPollData, getPollDataById, updatePolls, updateVote } from "@/utils/utils";
    import { fade } from "svelte/transition";

    let loading = true;
    let polls: Poll[] = [];

    const fetchPollData = async () => {
        loading = true;
        polls = await getPollData();
        loading = false;
    }

    const handleVote = async (e: CustomEvent) => {
        const { id, option } = e.detail;
        await updateVote(id, option);

        const updatedPoll = await getPollDataById(id);
        const idx = polls.findIndex(poll => poll.id === id);
        
        if (idx !== -1) {
            polls[idx] = updatedPoll;
        }
    }

    fetchPollData();
</script>

{#if loading}
    <h3>.....</h3>
{:else} 
    <div class="poll-list">
        {#each polls as poll (poll.id)}
            <div class="poll-question" transition:fade>
                <PollDetail {poll} on:updateVote={handleVote} on:deletePolls on:editPolls/>
            </div>
        {/each}        
    </div>
{/if}

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr ;
        gap: 20px;
    }
</style>