type Bucket = { count: number };

const buckets = new Map<string, Bucket>();

function utcDay(now = new Date()): string {
  return now.toISOString().slice(0, 10);
}

/** Daily keys for independent IP and email caps. */
export function rateLimitKeys(ip: string, email: string, now = new Date()): string[] {
  const day = utcDay(now);
  return [`ip:${ip}:${day}`, `email:${email}:${day}`];
}

export function isRateLimited(keys: string[], max: number): boolean {
  return keys.some((key) => (buckets.get(key)?.count ?? 0) >= max);
}

export function recordAttempt(keys: string[]): void {
  for (const key of keys) {
    const entry = buckets.get(key);
    if (!entry) {
      buckets.set(key, { count: 1 });
    } else {
      entry.count += 1;
    }
  }
}
