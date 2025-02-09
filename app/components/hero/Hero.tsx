import Typography from "../typography/Typography";

export default function Hero() {
  return (
    <>
      <div className="content">
        <picture>
          <img
            className="content block object-cover w-full h-[100vh]"
            src="/hero-lamborghini.jpg"
            alt="Hero"
            fetchpriority="high"
          />
        </picture>
      </div>

      <div
        className="absolute bottom-[6%] max-w-[75%] max-h-fill-available text-right"
        style={{
          background: "transparent",
          opacity: "unset",
          right: "max(1rem, min(7vw, 6rem))",
        }}
      >
        <Typography
          className="text-white pointer-events-none whitespace-normal"
          variant="h1"
        >
          Preverjena rabljena vozila, nepremagljive ponudbe in enostaven nakup –
          vaš sanjski avto je le en klik stran.
        </Typography>

        <div className="mt-4 w-full border-t border-white opacity-50" />
      </div>
    </>
  );
}
