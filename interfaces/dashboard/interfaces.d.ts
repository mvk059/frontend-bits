export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface WebComponent {
    name: string;
    slug: string;
    type: string;
    level: Level;
}
