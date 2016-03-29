import {Control} from 'angular2/common'

export class UsernameValidators {
    static noSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0)
            return {containsSpaces: true};
        
        return null;
    }
    
    static uniqueUsername(control: Control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == 'ganga') {
                    resolve({ notUniques: true });
                } else {
                    resolve(null);
                }
            }, 1000)
        });
    }
}