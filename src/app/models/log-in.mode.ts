import { FormControl, FormGroup } from "@angular/forms"

export type LogInForm = {
    username: FormControl<string | null>,
    password: FormControl<string | null>
}