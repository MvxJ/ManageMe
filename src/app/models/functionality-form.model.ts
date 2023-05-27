import { Form, FormControl, FormControlOptions } from "@angular/forms"

export type FunctionalityFormModel = {
    title: FormControl<string | null>,
    description: FormControl<string | null>
    owner: FormControl<string | null>
    project: FormControl<string | null>
    priority: FormControl<string | null>

}