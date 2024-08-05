export interface Poll {
    id: number,
    question: string,
    answer_a: string,
    answer_b: string,
    count_a: number,
    count_b: number,
}

export interface CreatePoll {
    question: string,
    answer_a: string,
    answer_b: string,
}

export interface EditModalProps {
    isModalOpen: boolean,
    confirmText: string,
    cancelText: string,
    onConfirm: () => Promise<void>,
    title: string,
    polls: CreatePoll,
}

export interface DeleteModalProps {
    isModalOpen: boolean,
    confirmText: string,
    cancelText: string,
    onConfirm: () => Promise<void>,
    title: string,
}