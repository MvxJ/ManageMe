import { Form, FormControl, FormGroup } from "@angular/forms"

export type RegisterFormModel = {
    name: FormControl<string | null>,
    surname: FormControl<string | null>,
    username: FormControl<string | null>,
    password: FormControl<string | null>,
    confirmPassword: FormControl<string | null>
}