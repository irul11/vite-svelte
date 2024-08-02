import type { Poll } from "@/utils/types";
import { writable } from "svelte/store";

const polls = writable<Poll[]>([{
    id: 1,
    question: "Python or Javascript",
    answerA: "Python",
    answerB: "Javascript",
    countA: 8,
    countB: 12,
}]);

export default polls;