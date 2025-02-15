interface ILeasingsLogos {
  className?: string;
}

export default function LeasingsLogos({ className }: ILeasingsLogos) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center ${className}`}
    >
      <a
        href="https://www.leanpay.si/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/leasing/leanpay.png"
          alt="LeanPay"
          className="w-full h-20 object-contain"
        />
      </a>
      <a
        href="https://www.motiveservice.eu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/leasing/motive-service.png"
          alt="Motive Service"
          className="w-full h-20 object-contain"
        />
      </a>
      <a
        href="https://www.gb-leasing.si/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/leasing/gbleasing.png"
          alt="GB Leasing"
          className="w-full h-20 object-contain"
        />
      </a>
      <a
        href="https://www.summit-leasing.si/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/leasing/summit.png"
          alt="Summit Leasing"
          className="w-full h-20 object-contain"
        />
      </a>
      <a
        href="https://www.dh.si/leasing/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/leasing/dhleasing.png"
          alt="DH Leasing"
          className="w-full h-20 object-contain"
        />
      </a>
    </div>
  );
}
