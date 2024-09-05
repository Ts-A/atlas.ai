import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatDividerModule],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss',
})
export class WindowComponent {
  public chats: any = [
    {
      id: 1,
      text: 'prepare a 4 day travel trip in manali. cover as much as places possible',
      sender: 'user',
    },
    {
      id: 2,
      text: 'ok, here is the list. first travel from xyz then to yzx. first travel from xyz then to yzx. first travel from xyz then to yzx. first travel from xyz then to yzx.',
      sender: 'ai',
    },
    {
      id: 1,
      text: 'prepare a 4 day travel trip in manali. cover as much as places possible',
      sender: 'user',
    },
    {
      id: 2,
      text: 'ok, here is the list. first travel from xyz then to yzx. first travel from xyz then to yzx. first travel from xyz then to yzx. first travel from xyz then to yzx.',
      sender: 'ai',
    },
  ];
}
