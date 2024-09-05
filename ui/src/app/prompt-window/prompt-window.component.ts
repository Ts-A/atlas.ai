import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';
import { GenerativeAiService } from './generative.ai.service';
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
  ];
  public prompt: string = '';

  constructor(public genAIService: GenerativeAiService) {}

  public async handleFormSubmit(event: any) {
    event.preventDefault();
    if (this.prompt === '') return;
    const userPrompt = {
      id: this.chats.length,
      text: this.prompt,
      sender: 'user',
    };
    this.chats.push(userPrompt);

    const aiResponse = await this.genAIService.generateContent(this.prompt);

    this.chats.push({
      id: this.chats.length,
      text: aiResponse,
      sender: 'ai',
    });
    this.prompt = '';
  }
}
