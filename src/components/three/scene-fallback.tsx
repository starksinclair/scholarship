export function SceneFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(106,134,170,0.24),transparent_28%),radial-gradient(circle_at_70%_30%,rgba(214,147,93,0.16),transparent_36%),linear-gradient(180deg,rgba(12,16,23,0.92),rgba(8,10,15,0.98))]">
      <div className="absolute inset-x-[-10%] top-[14%] h-72 rounded-full bg-[radial-gradient(circle,rgba(242,230,216,0.1),transparent_64%)] blur-3xl" />
      <div className="absolute left-[8%] top-[26%] h-56 w-56 rounded-full border border-white/10 bg-white/5 blur-2xl" />
      <div className="absolute right-[12%] top-[18%] h-72 w-72 rounded-full border border-[rgba(214,147,93,0.18)] bg-[rgba(214,147,93,0.05)] blur-3xl" />
      <div className="absolute inset-x-[16%] bottom-[20%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-[10%] bottom-[26%] h-px bg-gradient-to-r from-transparent via-[rgba(214,147,93,0.3)] to-transparent" />
    </div>
  );
}
