# Atlas

An AI itinerary planner to plan all your trips. Drop in a prompt with the choices you have, and let AI analyse and decide the best places to visit.

## Setup

```bash
git clone https://github.com/Ts-A/atlas.ai

#Setup backend
cd atlas.ai/backend
#set your google api key in app.py
.venv\Scripts\activate
pip install -r requirements.txt
flask --app app run

#Setup frontend
cd atlas.ai/ui
cp src/environments/environment.sample.ts src/environments/environment.ts
# Setup env keys
npm install --verbose
ng serve
```

## Tools

- angular v18 Standalone
- @angular/material v18
- gemini ai
- python 3.12 

