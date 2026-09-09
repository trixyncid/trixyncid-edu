/** Fixed public class rate charged per live meeting (IDR). */
export const RATE_PER_SESSION = 300_000;

/** Micro-class cap — fee is for the class and may be split among students. */
export const MAX_CLASS_SIZE = 3;

export function classPriceFromSessions(sessions: number): number {
  return sessions * RATE_PER_SESSION;
}

export function splitClassPrice(sessions: number, students: number): number {
  const n = Math.min(Math.max(students, 1), MAX_CLASS_SIZE);
  return Math.round(classPriceFromSessions(sessions) / n);
}

/** Format IDR with Indonesian thousand separators, e.g. Rp 4.800.000 */
export function formatIdr(amount: number): string {
  const formatted = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp ${formatted}`;
}

export function pricingBreakdown(sessions: number) {
  const classTotal = classPriceFromSessions(sessions);
  return {
    sessions,
    classTotal,
    classTotalLabel: formatIdr(classTotal),
    per1: formatIdr(splitClassPrice(sessions, 1)),
    per2: formatIdr(splitClassPrice(sessions, 2)),
    per3: formatIdr(splitClassPrice(sessions, 3)),
  };
}
