<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { Person } from '@/utils/types';
    
    let dispatch = createEventDispatcher();
    let name: string;
    let beltColour: string;
    let age: number;
    let skills: string[] = [];

    const handelSubmit = () => {
        const person: Person = {
            name,
            beltColour,
            age,
            skills,
            id: Math.random(),
        };
        dispatch("addPerson", person);
        name = ""
        beltColour = ""
        age = 0
        skills = []
    }
</script>

<form on:submit|preventDefault={handelSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="number" placeholder="age" bind:value={age}>
    
    <label for="">Skills</label>
    <input type="checkbox" bind:group={skills} value="fighting" >Fighting<br>
    <input type="checkbox" bind:group={skills} value="sneaking" >Sneaking<br>
    <input type="checkbox" bind:group={skills} value="dodging" >Dodging<br>

    <label for="">Belt Colour</label>
    <select bind:value={beltColour}>
        <option value="select belt" disabled>Select belt</option>
        <option value="black">black</option>
        <option value="orange">orange</option>
        <option value="brown">brown</option>
        <option value="white">white</option>
    </select>
    
    <button>Add Person</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
    }
    input {
        padding: 10px;
    }
</style>