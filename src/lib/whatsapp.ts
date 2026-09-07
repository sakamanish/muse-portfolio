export const WHATSAPP_NUMBER = "919381449191"; // International format without + (India +91)

export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const DEFAULT_MESSAGE = "Hi MUSE, I'm interested in this outfit.";