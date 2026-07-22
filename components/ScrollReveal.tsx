// ScrollReveal is now a no-op shim.
// Scroll-triggered animations are handled by Framer Motion's whileInView
// in each component via FadeUp and StaggerContainer primitives.
export default function ScrollReveal() {
  return null;
}
