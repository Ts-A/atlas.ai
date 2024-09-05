import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenerativeAiService {
  constructor() {}

  public async generateContent(prompt: string) {
    const genAI = new GoogleGenerativeAI(environment.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);

    return result.response.text();
  }
}
