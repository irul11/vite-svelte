<script lang="ts">
    export let message = "This is default prop!";
    export let showModal = false;
    export let isDanger = false;

</script>

{#if showModal}
    <div role="button" tabindex="0" class="backdrop" on:click|self on:keydown >
        <div 
            class="modal"
            class:danger={isDanger}
        >
            <slot name="header" />
            <slot />
        </div>
    </div>
{/if}

<style>
    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(100, 100, 100, .5);
    }

    .modal {
        width: 400px;
        margin: 10% auto;
        padding: 10px;
        border-radius: 15px;
        text-align: center;
        background: white;
        color: #242424;
    }

    .danger {
        background: #ff6d6d;
        color: aliceblue;
    }
</style>