<script lang="ts">
    import PollDetail from "@/lib/PollDetail.svelte";
    import polls from "@/stores/PollStore";

</script>

<div class="poll-list">
    {#each $polls as poll (poll.id)}
        <div class="poll-question">
            <PollDetail {poll} />
        </div>
    {/each}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr ;
        gap: 20px;
    }
</style>