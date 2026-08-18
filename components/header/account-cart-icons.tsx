export function AccountCartIcons() {
  return (
    <div className="flex items-center gap-[22px]">
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#211d19" strokeWidth="1.6" aria-label="Account">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#211d19" strokeWidth="1.6" aria-label="Cart">
        <path d="M6 8h12l-1 13H7L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
    </div>
  );
}
