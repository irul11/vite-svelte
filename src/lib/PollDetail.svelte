<script lang="ts">
    import type { Poll } from "@/utils/types";
    import Card from "./Card.svelte";
    import { createEventDispatcher } from "svelte";
    import { deletePolls, updatePolls } from "@/utils/utils";
    import { tweened } from "svelte/motion";

    const dispatch = createEventDispatcher();
    
    export let poll: Poll;
    
    $: totalVotes = poll.count_a + poll.count_b;
    $: percentA = poll.count_a === 0 && poll.count_b === 0 ? 50 : (100/totalVotes * poll.count_a);
    $: percentB = poll.count_a === 0 && poll.count_b === 0 ? 50 : (100/totalVotes * poll.count_b);

    const tweenedA = tweened(percentA);
    const tweenedB = tweened(percentB);
    $: tweenedA.set(percentA)
    $: tweenedB.set(percentB)

    const handleVote = async (option: string, id: number) => {        
        dispatch("updateVote", {
            option,
            id,
        })
    };

    const handleDelete = (id: number) => {
        dispatch("deletePolls", {
            id,
            handleDelete: deletePolls, 
        });
    }

    const handleEdit = (poll: Poll) => {
        dispatch("editPolls", {
            poll,
            handleEdit: updatePolls,
        });
    }
</script>

<Card>
    <div class="poll">
        <h3>{ poll.question }</h3>
        <p>Total votes: { totalVotes }</p>
        <div class="poll-question" >
            <button 
                class="poll-button"
                on:click|preventDefault={() => handleVote("a", poll.id)}
            >{ poll.answer_a }</button>
            
            <button 
                class="poll-button"
                on:click={() => handleVote("b", poll.id)}
            >{ poll.answer_b }</button>
        </div>
        <div class="answer">
            <div 
                class="percent percent-a"
                style="width: {$tweenedA}%;"
            >{ poll.answer_a } ({ poll.count_a })</div>
            <div 
                class="percent percent-b"
                style="width: {$tweenedB}%;"
            >{ poll.answer_b } ({ poll.count_b})</div>
        </div>
        <div class="btn">
            <button class="poll-btn poll-edit" on:click={() => handleEdit(poll)}>
                <img src="/edit.svg" alt="" width="24px" height="24px">
            </button>
            <button class="poll-btn poll-delete" on:click={() => handleDelete(poll.id)}>
                <img src="/remove.svg" alt="" width="24px" height="24px">
            </button>
        </div>
    </div>
</Card>

<style>
    h3 {
        margin: 0 auto;
    }
    p {
        margin-top: 6px;
        font-size: 14px;
        margin-bottom: 30px;
    }
    .poll-question {
        display: flex;
        justify-content: space-around;
    }
    .poll-button {
        background-color: #2f2f2f;
        width: 150px;
    }
    .answer {
        border-radius: 5px; 
        border: 1px solid #2f2f2f;
        color: #2f2f2f;
        margin: 10px auto;
        position: relative;
        transition: opacity .5s;
        height: 36px;
    }
    .answer:hover {
        opacity: .9;
    }
    .percent {
        height: 100%;
        position: absolute;
        padding: 5px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .percent-a {
        background: rgba(109, 255, 136, 0.4);
        border-left: 4px solid rgb(58, 83, 71);
    }
    .percent-b {
        right: 0;
        background: rgba(220, 116, 151, 0.4);
        border-right: 4px solid rgb(220, 116, 151);
    }
    .btn {
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
    }
    .poll-btn {
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .poll-edit {
        background: rgb(62, 149, 255);
    }
    .poll-delete {
        background-color: rgb(255, 66, 66);
    }
</style>