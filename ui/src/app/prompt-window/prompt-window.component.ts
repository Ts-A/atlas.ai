import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ItineraryService } from '../itinerary/itinerary.service';
import { ProgressService } from '../shared/services/progress/progress.service';
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
      text: "Welcome to atlas.ai! I'm your personal AI travel assistant. How can I help you plan your next travel destination?",
      sender: 'ai',
    },
  ];
  public prompt: string = '';
  public chat: Object = {
    
  }
  constructor(
    public genAIService: GenerativeAiService,
    public itinerarySvc: ItineraryService,
    public progressSvc: ProgressService
  ) {}

  public async handleFormSubmit(event: any) {
    event.preventDefault();
    if (this.prompt === '') return;
    this.progressSvc.start();
    const userPrompt = {
      id: this.chats.length,
      text: this.prompt,
      sender: 'user',
    };
    this.prompt = '';
    this.chats.push(userPrompt);

    const aiResponse = await this.genAIService.generateJSON(userPrompt.text);

    const jsonResponse =aiResponse ;

    const jsonKeys = Object.keys(jsonResponse);

let aiSummary = '' ;
    if(!jsonKeys.includes('tripPlan') || jsonResponse['tripPlan'].length == 0){
      aiSummary = 'Please enter a valid request'
    }
    else{
      if (jsonKeys.includes('tripPlan'))
        this.itinerarySvc.updateItinerary(jsonResponse['tripPlan']);

      if (!jsonKeys.includes('description')) {
        aiSummary = await this.genAIService.generateContent(aiResponse);
      } else {
        aiSummary = jsonResponse['description'];
      }
    }
    
    
    this.chats.push({
      id: this.chats.length,
      text: aiSummary,
      sender: 'ai',
    });
    this.progressSvc.stop();
  }
}
