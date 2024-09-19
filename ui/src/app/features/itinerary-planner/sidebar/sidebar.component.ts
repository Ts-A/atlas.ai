import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
// import { ItineraryService } from '../itinerary/itinerary.service';
// import { ProgressService } from '../shared/services/progress/progress.service';
// import { GenerativeAiService } from './generative.ai.service';
// import { WindowComponent } from './window/window.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, ButtonModule, SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  @Input() public sidebarVisible: boolean = false;
  public chats: any[] = [
    {
      id: 1,
      text: "Welcome to atlas.ai! I'm your personal AI travel assistant. How can I help you plan your next travel destination?",
      sender: 'ai',
    },
  ];
  public prompt: string = '';

  // constructor(
  //   public genAIService: GenerativeAiService,
  //   public itinerarySvc: ItineraryService,
  //   public progressSvc: ProgressService
  // ) {}

  // public async handleFormSubmit(event: any) {
  //   event.preventDefault();
  //   if (this.prompt === '') return;
  //   this.progressSvc.start();
  //   const userPrompt = {
  //     id: this.chats.length,
  //     text: this.prompt,
  //     sender: 'user',
  //   };
  //   this.prompt = '';
  //   this.chats.push(userPrompt);

  //   const aiResponse = await this.genAIService.generateJSON(userPrompt.text);

  //   const jsonResponse = JSON.parse(aiResponse);

  //   const jsonKeys = Object.keys(jsonResponse);
  //   if (jsonKeys.includes('tripPlan'))
  //     this.itinerarySvc.updateItinerary(jsonResponse['tripPlan']);

  //   let aiSummary = '';

  //   if (!jsonKeys.includes('description')) {
  //     aiSummary = await this.genAIService.generateContent(aiResponse);
  //   } else {
  //     aiSummary = jsonResponse['description'];
  //   }

  //   this.chats.push({
  //     id: this.chats.length,
  //     text: aiSummary,
  //     sender: 'ai',
  //   });
  //   this.progressSvc.stop();
  // }
}
