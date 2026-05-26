export const WHATSAPP_NUMBER = "1234567890"; // TODO: replace with real number (international format, no +)

export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const DEFAULT_MESSAGE = "Hi MUSE, I'm interested in this outfit.";