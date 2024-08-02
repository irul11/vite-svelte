<script>
    import { createEventDispatcher } from "svelte";
    
    let fields = {
        question: "",
        answerA: "",
        answerB: "",
    };
    let errors = {
        question: "",
        answerA: "",
        answerB: "",
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

        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = "Answer cannot be empty";
            setTimeout(() => {
                errors.answerA = "";
            }, 2000)
        } else {
            errors.answerA = "";
        }

        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = "Answer cannot be empty";
            setTimeout(() => {
                errors.answerB = "";
            }, 2000)
        } else {
            errors.answerB = "";
        }

        if (valid) {
            dispatch("addPoll", {
                ...fields,
                countA: 0,
                countB: 0,
                id: Math.random(),
            });

            fields.question = "";
            fields.answerA = "";
            fields.answerB = "";
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
        <input type="text" id="answer-a" bind:value={fields.answerA}>
        <div class="error">{ errors.answerA }</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B</label>
        <input type="text" id="answer-b" bind:value={fields.answerB}>
        <div class="error">{ errors.answerB }</div>
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