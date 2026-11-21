const PlatformQuote = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center max-margin py-20 md:py-28">
      <h2 className="text-2xl md:text-4xl font-normal leading-relaxed text-vgreen mb-8 text-center max-w-4xl">
        &quot; Knowing that every product is sourced from trusted suppliers,
        quality is verified, and every payment is handled securely is the kind
        of confidence bulk commodity trade needs. &quot;
      </h2>
      <p className="text-lg text-gray-700 font-semibold leading-7 mt-2">
        Vicago Trade Team
      </p>
      <a
        href="https://trade.vicago.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-500 text-center mt-1 underline"
      >
        trade.vicago.org
      </a>
    </div>
  );
};

export default PlatformQuote;
