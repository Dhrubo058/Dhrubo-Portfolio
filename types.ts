
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'software' | 'hardware' | 'ai';
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  objective: string;
  email: string;
  phone: string;
  location: string;
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  education: {
    school: string;
    degree: string;
    period: string;
    grades: string[];
  };
  achievements: string[];
  interests: string[];
}
