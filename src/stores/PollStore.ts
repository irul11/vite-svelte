import type { Poll } from "@/utils/types";
import { writable } from "svelte/store";

const polls = writable<Poll[]>([{
    id: 1,
    question: "Python or Javascript",
    answer_a: "Python",
    answer_b: "Javascript",
    count_a: 8,
    count_b: 12,
}]);

export default polls;