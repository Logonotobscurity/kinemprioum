import { frameFor } from "@/data/catalog";

export function Founder() {
  return (
    <section id="founder" className="scroll-mt-36 border-t border-line py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-line">
          <img
            src="/experiences/signet.jpg"
            alt="An antique brass signet ring on black velvet"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-square w-full object-cover"
            style={{ objectPosition: frameFor("/experiences/signet.jpg") }}
          />
        </div>
        <div>
          <p className="text-xs tracking-widest text-brass uppercase">About the house</p>
          <h2 className="mt-2 font-display text-4xl text-ivory sm:text-5xl">A desk, not a club.</h2>
          <div className="mt-5 space-y-4 text-base text-mist">
            <p>
              Kinemprioum is not a velvet rope and a mailing list. It is a small
              desk: live sessions when the room is right, and written study when it is not.
            </p>
            <p>
              The founder keeps the circle narrow on purpose. Names stay off the door. What is
              offered is time, a clear brief, and a standard for how adults treat each other once
              the lights drop.
            </p>
            <p>Everything begins as an enquiry. You must be 18 or older.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  const steps = [
    { n: "01", title: "Choose", body: "A dungeon session or a study from the shelves." },
    { n: "02", title: "Enquire", body: "Name, email, and the terms you need. No cart." },
    { n: "03", title: "Confirm", body: "The desk replies with a time and a consent note." },
  ];
  return (
    <section className="border-t border-line py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {steps.map((step) => (
          <div key={step.n}>
            <p className="font-display text-3xl text-brass tabular-nums">{step.n}</p>
            <h3 className="mt-2 font-display text-2xl text-ivory">{step.title}</h3>
            <p className="mt-2 text-sm text-mist">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
