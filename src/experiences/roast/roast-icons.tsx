interface IconProps {
  className?: string;
}

export function RoastArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true" className={className}>
      <path
        d="M1 7h11M8 3l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function RoastArrowLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 14 14" aria-hidden="true" className={className}>
      <path
        d="M13 7H2M6 3 2 7l4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function RoastExternalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className={className}>
      <path
        d="M2 10 10 2M4 2h6v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function RoastPostArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className={className}>
      <path
        d="M1 6h9M7 3l3 3-3 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function RoastThemeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <circle
        cx="8"
        cy="8"
        r="6.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
    </svg>
  );
}

export function RoastBrandSeal({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <circle
        cx="20"
        cy="20"
        r="19"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".35"
      />
      <circle
        cx="20"
        cy="20"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".18"
      />
      <path
        d="M20 9c-5 3.2-5 18.8 0 22 5-3.2 5-18.8 0-22z"
        fill="none"
        stroke="var(--roast-accent)"
        strokeWidth="1.4"
      />
      <path
        d="M20 10.5c1.6 4 -1.6 15 0 19"
        fill="none"
        stroke="var(--roast-accent)"
        strokeWidth="1.1"
      />
    </svg>
  );
}
