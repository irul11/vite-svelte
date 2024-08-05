import type { CreatePoll, Poll } from "./types";

export async function getPollData(): Promise<Poll[]> {
    const res = await fetch("http://localhost:4343/polls");
    const text = await res.text();
    const data = JSON.parse(text);

    if (res.ok) {
        return data;
    } else {
        throw new Error("Request failed");
    }
}

export async function getPollDataById(id: number): Promise<Poll> {
    const res = await fetch(`http://localhost:4343/polls/${id}`);
    const text = await res.text();
    const data = JSON.parse(text);

    if (res.ok) {
        return data;
    } else {
        throw new Error("Request failed");
    }
}

export async function createPolls(body: CreatePoll) {
    const res = await fetch("http://localhost:4343/polls", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    });

    if (res.ok) {
        return ;
    } else {
        throw new Error("Create polls failed");
    }
}

export async function updatePolls(id: number, body: CreatePoll) {
    const res = await fetch(`http://localhost:4343/polls/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
    });

    if (res.ok) {
        return ;
    } else {
        throw new Error("Update polls failed");
    }
}

export async function updateVote(pollsId: number, option: string) {
    const res = await fetch(`http://localhost:4343/polls/${pollsId}/${option}`, {
        method: "PUT"
    });

    if (res.ok) {
        return ;
    } else {
        throw new Error("Update vote failed");
    }
}

export async function deletePolls(pollsId: number) {
    const res = await fetch(`http://localhost:4343/polls/${pollsId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        return ;
    } else {
        throw new Error("Delete vote failed");
    }
}