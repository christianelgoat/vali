
export enum Status {
  Fulfilled = 'CUMPLIDO',
  NotFulfilled = 'NO CUMPLIDO',
  Neutral = 'NEUTRAL'
}

export interface ValidationResult {
  parameter: string;
  result: string;
  interpretation: string;
  status: Status;
}

export interface AnalysisPoint {
  title: string;
  status: Status;
  finding: string;
  rootCause: string;
}
