export type TaskModel = {
    key: string,
    name: string,
    description: string,
    priority: string,
    functionalityKey: string,
    timeToDone: number,
    status: string,
    createdAt: Date,
    finishedAt: Date|null,
    userKey: string
}