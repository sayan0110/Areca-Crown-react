// wa.me link that opens WhatsApp with a prefilled message (one line per entry; empty entries are skipped).
export function whatsappLink(number: string, lines: (string | null | undefined | false)[]): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`
}
