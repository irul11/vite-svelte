<script lang="ts">
    import PollDetail from "@/lib/PollDetail.svelte";
    import polls from "@/stores/PollStore";
    import { getData } from "@/utils/utils";

    const promise = getData();

</script>

{#await promise}
    <h3>Waiting for data</h3>
{:then polls} 
    <div class="poll-list">
        {#each polls as poll (poll.id)}
            <div class="poll-question">
                <PollDetail {poll} />
            </div>
        {/each}        
    </div>
{/await}

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr ;
        gap: 20px;
    }
</style>