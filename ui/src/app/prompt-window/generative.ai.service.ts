import { Injectable } from '@angular/core';
import axios from 'axios';
import {
  GenerativeModel,
  GoogleGenerativeAI,
  SchemaType,
} from '@google/generative-ai';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenerativeAiService {
  public genAI: GoogleGenerativeAI | undefined;
  public model: GenerativeModel | undefined;
  public chat : any;
  public jsonModel: GenerativeModel | undefined;
  public jsonContext: string =
    'You are an AI travel assistant. Plan the trip the user requests delimited by =. Always return the output in json format as tripPlan with the keys name, description, imageUrl, latitude and longitude of the place';

  constructor() {
    this.genAI = new GoogleGenerativeAI(environment.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    this.jsonModel = this.genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: {
        responseMimeType: "application/json",
       
      }
    });
    this.chat =  this.model.startChat({
      history: [
        {
          role: 'user',
          parts: [{
            text: this.jsonContext
          }]
        }
      ]
    });

  
  }


  public async generateContent(jsonContent: any) {
    if (!this.model) throw new Error('Model not found');
    const result = await axios.post('http://localhost:5000/content',{json_content: jsonContent})
    console.log(result.data);

    return result.data;
  }

  public async generateJSON(prompt: string) {
    try {
      if (!this.jsonModel) throw new Error('Model not found');
      if (!this.chat) throw new Error('Chat not found');
      // const result = await this.jsonModel.generateContent(
      //   this.jsonContext + '=' + prompt + '='
      // );
      let result = await axios.post('http://localhost:5000/chat', {'prompt': prompt})
      const jsonResponse = result.data;
      console.log(jsonResponse);
      return jsonResponse;
    } catch (error) {
      console.log(error);
      return '';
    }
  }
}
