<script lang="ts">
    import { fly } from "svelte/transition";

    export let title = "Confirmation";
    export let cancelText = "Cancel";
    export let confirmText = "Yes";
    export let isModalOpen = false;
    export let onConfirm = async () => {};

    function closeModal() {
        isModalOpen = false
    }

</script>

{#if isModalOpen}
    <div class="modal-backdrop" on:click|self={closeModal} transition:fly>
        <div class="modal-content">
            <h2>{title}</h2>
                <slot></slot>
            <div class="modal-actions">
                <button on:click={closeModal} class="modal-cancel">{cancelText}</button>
                <button on:click={onConfirm} class="modal-confirm">{confirmText}</button>
            </div>
        </div>
    </div>    
{/if}

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .modal-content {
        background: white;
        color: #242424;
        padding: 1.5rem;
        border-radius: 5px;
        max-width: 500px;
        width: 100%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .modal-actions {
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
    }
    
    .modal-confirm {
        background-color: #ff6b6b;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    
    .modal-cancel {
        background-color: #ccc;
        color: black;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    
    .modal-confirm:hover {
        background-color: #ff3b3b;
    }
    
    .modal-cancel:hover {
        background-color: #bbb;
    }
    </style>