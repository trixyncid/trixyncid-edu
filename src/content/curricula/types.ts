export type CurriculumSession = {
  number: string;
  title: string;
  topics: string;
  youWillLearn: string[];
  deliverable?: string;
};

export type CurriculumBlock = {
  title: string;
  note?: string;
  sessions: CurriculumSession[];
};
