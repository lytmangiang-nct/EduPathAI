export interface UserProfile {
  uid: string;
  displayName: string;
  email?: string;
  personalityResults?: {
    holland?: string;
    creativeTypes?: string;
    mbti?: string;
  };
  careerGoals?: {
    environment?: string;
    lifeGoals?: string;
    expectedSalary?: number;
    futureDirection?: string;
  };
  academicRecord?: {
    selfAssessment?: string;
    studyGroup?: string;
    favoriteSubjects?: string[];
    goodSubjects?: string[];
    weakSubjects?: string[];
    examScores?: Record<string, number>;
    competencyScore?: number;
    gpa?: number;
    certificates?: string[];
  };
  familyCondition?: {
    locationPreference?: string;
    tuitionBudget?: number;
  };
}

export interface ChatMessage {
  id?: string;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

export interface University {
  id: string;
  name: string;
  code: string;
  location: string;
  region?: 'miền Bắc' | 'miền Trung' | 'miền Nam';
  tuition: number;
  majors: Major[];
  description: string;
  website: string;
}

export interface Major {
  id: string;
  name: string;
  code: string;
  admissionScore: Record<string, number>; // Year: Score
  description: string;
  careerOpportunities: string[];
  category: string;
  isHot?: boolean;
  matchProbability?: number;
}
