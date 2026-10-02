export const MONTHLY_ANALYSIS_LIMIT = 20;

export const getCurrentUsagePeriodStart = (now = new Date()) =>
  new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));

export const getNextUsagePeriodStart = (now = new Date()) =>
  new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
