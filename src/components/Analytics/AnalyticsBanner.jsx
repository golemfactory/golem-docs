export const AnalyticsBanner = ({
  setPreviousConsent,
  setAskedForConsent
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid gap-8 bg-primary px-6 py-3 text-white md:items-center md:justify-between lg:flex">
      <div>
        We use cookies to improve the experience on the Golem Docs. By
        browsing this website, you agree to our use of cookies.
      </div>
      <div className="flex gap-4">
        <button
          className="text-white hover:text-white/90"
          onClick={() => {
            localStorage.setItem('GDocscookieConsent', 'false');
            setPreviousConsent(false);
            setAskedForConsent(true);
          }}
        >
          Decline
        </button>
        <button
          className="rounded-sm border border-white bg-primary px-4 py-1 text-white hover:bg-white/10"
          onClick={() => {
            localStorage.setItem('GDocscookieConsent', 'true');
            setPreviousConsent(true);
            setAskedForConsent(true);
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
};
