<script>
    import { createEventDispatcher } from "svelte";
    
    let fields = {
        question: "",
        answer_a: "",
        answer_b: "",
    };
    let errors = {
        question: "",
        answer_a: "",
        answer_b: "",
    };
    let valid = false;
    let dispatch = createEventDispatcher();


    const submitHandler = () => {
        valid = true;

        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = "Question must be at least 5 characters";
            setTimeout(() => {
                errors.question = "";
            }, 2000)
        } else {
            errors.question = "";
        }

        if (fields.answer_a.trim().length < 1) {
            valid = false;
            errors.answer_a = "Answer cannot be empty";
            setTimeout(() => {
                errors.answer_a = "";
            }, 2000)
        } else {
            errors.answer_a = "";
        }

        if (fields.answer_b.trim().length < 1) {
            valid = false;
            errors.answer_b = "Answer cannot be empty";
            setTimeout(() => {
                errors.answer_b = "";
            }, 2000)
        } else {
            errors.answer_b = "";
        }

        if (valid) {
            dispatch("addPoll", {
                ...fields,
                count_a: 0,
                count_b: 0,
                id: Math.random(),
            });

            fields.question = "";
            fields.answer_a = "";
            fields.answer_b = "";
        }

    };
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error">{ errors.question }</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A</label>
        <input type="text" id="answer-a" bind:value={fields.answer_a}>
        <div class="error">{ errors.answer_a }</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B</label>
        <input type="text" id="answer-b" bind:value={fields.answer_b}>
        <div class="error">{ errors.answer_b }</div>
    </div>
    <button type="submit">Add Poll</button>
</form>

<style>
    form {
        width: 460px;
        margin: 0 auto;
        text-align: center;
    }

    .form-field {
        margin: 18px auto;
    }
    input {
        width: 100%;
        padding: 10px;
        border-radius: 6px;
    }
    label {
        width: 100%;
        margin: 10px auto;
        text-align: left;
    }
    .error {
        font-weight: bold;
        font-size: 0.8em;
        color: #ff6e6e;
    }
</style>