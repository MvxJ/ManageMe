import { FormControl } from "@angular/forms"

export type TaskFormModel = {
    name: FormControl<string | null>,
    description: FormControl<string | null>
    priority: FormControl<string | null>,
    functionalityKey: FormControl<string | null>,
    timeToDone: FormControl<number | null>,
    userKey: FormControl<string | null>,
    status: FormControl<string | null>
}