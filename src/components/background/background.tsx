import css from "./background.module.css";

export function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="filter">
          <feTurbulence baseFrequency="0.3" />
          <feColorMatrix
            values="0 0 0 9 -4
                    0 0 0 9 -4
                    0 0 0 9 -4
                    0 0 0 0 1"
          />
        </filter>

        <rect id="rect" width="100%" height="100%" filter="url(#filter)" />
      </svg>

      <div className={css.gradient} />

      <div className={css.supernova}/>
    </div>
  );
}
