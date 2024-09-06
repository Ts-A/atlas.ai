import { Injectable } from '@angular/core';
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
  public jsonModel: GenerativeModel | undefined;
  public jsonContext: string =
    'You are an AI travel assistant. Plan the trip the user requests delimited by =. Always return the output in json format as tripPlan with the keys name, description, imageUrl, latitude and longitude of the place';

  constructor() {
    this.genAI = new GoogleGenerativeAI(environment.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    this.jsonModel = this.genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: {
        responseMimeType: 'application/json',
      },
    });
  }

  public async generateContent(jsonContent: any) {
    if (!this.model) throw new Error('Model not found');
    const result = await this.model.generateContent(
      'Use the json and summarise the trip in under 40 words using html tags' +
        jsonContent
    );

    console.log(result.response.text());

    return result.response.text();
  }

  public async generateJSON(prompt: string) {
    try {
      if (!this.jsonModel) throw new Error('Model not found');
      const result = await this.jsonModel.generateContent(
        this.jsonContext + '=' + prompt + '='
      );

      const jsonResponse = result.response.text();
      console.log(jsonResponse);
      return jsonResponse;
    } catch (error) {
      console.log(error);
      return '';
    }
  }
}
