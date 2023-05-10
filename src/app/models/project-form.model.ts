import { FormControl } from "@angular/forms"

export type ProjectFormModel = {
    title: FormControl<string | null>,
    description: FormControl<string | null>
}