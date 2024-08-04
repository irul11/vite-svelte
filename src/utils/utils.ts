import type { Poll } from "./types";

export async function getData(): Promise<Poll[]> {
    const res = await fetch("http://localhost:4343/polls");
    const text = await res.text();
    const data = JSON.parse(text);

    if (res.ok) {
        return data;
    } else {
        throw new Error("Request failed");
    }
}

export async function updateVote(pollsId: number, option: string) {
    const res = await fetch(`http://localhost:4343/polls/${pollsId}?option=${option}`);

    if (res.ok) {
        return ;
    } else {
        throw new Error("Update failed");
    }
}