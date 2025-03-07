/**
 * Linearly interpolates between two values based on a parameter t.
 * 
 * @param start - The starting value.
 * @param end - The ending value.
 * @param t - The interpolation factor (0 to 1).
 * 
 * @returns The interpolated value.
 */
export default function lerp(start: number, end: number, t: number) {
  if (t < 0) return start
  if (t > 1) return end
  return start + t * (end - start)
}