import { FormControl } from "@angular/forms"

export type UserFormModel = {
    username: FormControl<string | null>,
    password: FormControl<string | null>
    name: FormControl<string | null>
    surname: FormControl<string | null>
    role: FormControl<string | null>
}