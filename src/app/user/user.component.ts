import { Component, EventEmitter, input, Input, output, Output, } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  selectUser = DUMMY_USERS[randomIndex];

  @Input({required: true}) id!:string;
  @Input({required: true}) avatar!:string;
  @Input({required: true}) name!:string;
  @Output() select = new EventEmitter();

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output.required<string>();

  imagePath() {
    return 'assets/users/' + this.avatar;
    // return 'assets/users/' + this.avatar();
}

  onSelectUser(){
    this.select.emit(this.id);
    // this.select.emit(this.id());
}
}
