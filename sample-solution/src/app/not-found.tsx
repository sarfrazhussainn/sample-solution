import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-surface py-20 px-6 mt-[120px]">
      <div className="max-w-lg text-center flex flex-col items-center gap-6">
        <span className="material-symbols-outlined text-[80px] text-on-tertiary-container/50">
          construction
        </span>
        <h1 className="text-display text-primary-container">404</h1>
        <h2 className="text-headline-sm text-on-surface">Page Not Found</h2>
        <p className="text-body-md text-on-surface-variant mb-4">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button href="/" variant="primary" icon="home" iconPosition="left">
          Return to Home
        </Button>
      </div>
    </div>
  );
}
