export type rateType = {
    shopping: string,
    user: string,
    rating: number,
    response: questions[]
}

type questions = {
    question: string,
    response: string | number
}