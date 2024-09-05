import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { WindowComponent } from './window/window.component';

@Component({
  selector: 'app-prompt-window',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    WindowComponent,
    FormsModule,
  ],
  templateUrl: './prompt-window.component.html',
  styleUrl: './prompt-window.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PromptWindowComponent {
  public chats: any[] = [
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
  public prompt: string = '';

  public handleFormSubmit(event: any) {
    event.preventDefault();
    console.log(this.prompt);
    const userPrompt = {
      id: this.chats.length,
      text: this.prompt,
      sender: 'user',
    };
    this.chats.push(userPrompt);
    const aiPrompt = {
      id: this.chats.length,
      text: 'working on it',
      sender: 'ai',
    };
    this.chats.push(aiPrompt);
    this.prompt = '';
  }
}
