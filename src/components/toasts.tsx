import { useHouse } from "@/lib/house";

export function Toasts() {
  const toasts = useHouse((s) => s.toasts);
  const dismiss = useHouse((s) => s.dismiss);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-2 px-4 pb-4">
      {toasts.map((toast) => (
        <button
          key={toast.id}
          type="button"
          onClick={() => dismiss(toast.id)}
          className="pointer-events-auto max-w-sm rounded-md border border-line bg-panel-2 px-4 py-3 text-sm text-ivory shadow-lg"
        >
          {toast.text}
        </button>
      ))}
    </div>
  );
}
