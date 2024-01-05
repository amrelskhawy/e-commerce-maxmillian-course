import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
    @Output() feateredSelected: EventEmitter<string> = new EventEmitter<string>()
    
    onSelect(str: string) {
        this.feateredSelected.emit(str)
    }
}