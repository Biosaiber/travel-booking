import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[sameCountryValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: SameCountryValidatorDirective,
            multi: true
        }
    ]
})
export class SameCountryValidatorDirective implements Validator {
    validate(control: AbstractControl) {
        const fromCountry = control.get('flight-from')?.value;
        const toCountry = control.get('flight-to')?.value;

        if (!fromCountry || !toCountry) {
            return null;
        }
        if (fromCountry === toCountry) {
            return { sameCountry: true }
        }
        return null;
    }
}