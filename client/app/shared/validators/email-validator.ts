import {Control} from 'angular2/common'

export class EmailValidators {
    static validEmail(control: Control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (!EMAIL_REGEXP.test(control.value))
            return {invalidEmail: true};
        
        return null;
    }
    
    static uniqueEmail(control: Control) {
        
    }
}