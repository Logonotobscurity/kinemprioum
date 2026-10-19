import { useState } from "react";

const KEY = "kinemprioum-adult";

export function confirmAdult() {
  try {
    localStorage.setItem(KEY, "1");
  } catch {
    /* private mode — this visit still opens */
  }
  document.documentElement.dataset.adult = "1";
}

export function AgeGate() {
  const [left, setLeft] = useState(false);

  return (
    <div className="age-gate flex min-h-dvh flex-col justify-center bg-ink px-6 py-16 text-ivory">
      <div className="mx-auto w-full max-w-md">
        <p className="font-display text-3xl tracking-wide">
          KINEMP<span className="text-brass">R</span>IOUM
        </p>
        {left ? (
          <>
            <h1 className="mt-8 font-display text-5xl leading-none">This door stays shut.</h1>
            <p className="mt-4 text-base text-mist">The house is only for adults. You can turn back if that was a mistake.</p>
            <button
              type="button"
              onClick={() => setLeft(false)}
              className="mt-8 h-12 w-full rounded-md border border-line text-sm text-ivory sm:w-auto sm:px-6"
            >
              Return
            </button>
          </>
        ) : (
          <>
            <p className="mt-8 text-xs tracking-widest text-brass uppercase">Adults only</p>
            <h1 className="mt-3 font-display text-5xl leading-none sm:text-6xl">You must be 18 or older.</h1>
            <p className="mt-4 text-base text-mist">
              Private sessions and study sit behind this door. Confirm your age to enter. This device remembers the answer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={confirmAdult}
                className="h-12 rounded-md bg-brass px-5 text-sm font-medium text-ink"
              >
                Enter — I am 18 or older
              </button>
              <button
                type="button"
                onClick={() => setLeft(true)}
                className="h-12 rounded-md border border-line px-5 text-sm text-ivory"
              >
                Leave
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
