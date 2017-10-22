import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommandService } from './command.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [CommandService]
})
export class AppComponent {
    mac: string;

    constructor(private commandService: CommandService) {

    }

    onSubmit(form:NgForm) {
        this.commandService.disconnectSTA(form.value.mac)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        form.resetForm();
    }
}