export type ScoreFeedback = {
  score: number;
  feedback: string;
};

export type ResumeAnalysis = {
  targetRole: string;
  overallScore: number;
  atsScore: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
  experience: ScoreFeedback;
  skills: ScoreFeedback;
  keywords: {
    found: string[];
    missing: string[];
  };
  grammar: ScoreFeedback;
  priorityImprovements: string[];
};

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === "string");

const isScoreFeedback = (value: unknown): value is ScoreFeedback => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const feedback = value as Record<string, unknown>;

  return (
    typeof feedback.score === "number" &&
    typeof feedback.feedback === "string"
  );
};

export const isResumeAnalysis = (value: unknown): value is ResumeAnalysis => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const analysis = value as Record<string, unknown>;
  const keywords = analysis.keywords as Record<string, unknown> | null;

  return (
    typeof analysis.targetRole === "string" &&
    typeof analysis.overallScore === "number" &&
    typeof analysis.atsScore === "number" &&
    typeof analysis.summary === "string" &&
    isStringArray(analysis.strengths) &&
    isStringArray(analysis.weaknesses) &&
    isScoreFeedback(analysis.experience) &&
    isScoreFeedback(analysis.skills) &&
    !!keywords &&
    isStringArray(keywords.found) &&
    isStringArray(keywords.missing) &&
    isScoreFeedback(analysis.grammar) &&
    isStringArray(analysis.priorityImprovements)
  );
};
