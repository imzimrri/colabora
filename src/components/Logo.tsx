export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Colaborasolutions Logo"
      role="img"
    >
      <circle cx="24" cy="24" r="23" stroke="#529989" strokeWidth="2" fill="none" />
      <path
        d="M24 12 L32 20 L24 28 L16 20 Z"
        fill="#529989"
        opacity="0.8"
      />
      <circle cx="24" cy="32" r="4" fill="#879153" />
      <rect x="20" y="15" width="8" height="3" fill="#655225" opacity="0.9" />
    </svg>
  );
}
