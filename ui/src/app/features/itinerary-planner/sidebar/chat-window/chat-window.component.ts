import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, ChatWindowComponent, DividerModule, AvatarModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss',
})
export class ChatWindowComponent {
  @Input() public chats: any[] = [];
}
