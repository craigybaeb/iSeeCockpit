// @ts-ignore

// import type { Intent } from "./intent";
import type { Questionnaire } from './questionnaire';

/* eslint-disable */
export interface Persona {
  _id?: string;
  completed: boolean;
  details: PersonaDetails;
  uuid?: string;
  status?: string;
  intents?: PersonaIntent[];
}

export interface PersonaDetails {
  name: string;
  domain_knowledge_level?: string | null;
  ai_knowledge_level?: string | null;
}

export interface PersonaIntent {
  id: string;
  completed: boolean;
  name: string;
  uuid?: string;
  ref?: string;
  questions?: string[];
  explanation?: string;
  evaluation: Questionnaire; //todo?
}
