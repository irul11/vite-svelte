<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let items: string[];
    export let activeItem: string;

    const dispatch = createEventDispatcher();
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch("tabChange", item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }
    ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;
        padding: 8px;
    }
    .active {
        color: #ff8484;
        border-bottom: 2px solid #ff8484;
    }
</style>