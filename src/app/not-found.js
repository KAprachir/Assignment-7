import Link from "next/link";

export default function NotFound() {
  return (
    // 'hero' creates a large centered container
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* Using semantic daisyUI classes for typography */}
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <p className="py-6 text-2xl font-semibold">
            Oops! The page you’re looking for doesn't exist.
          </p>
          <p className="pb-8 opacity-70">
            It might have been moved, deleted, or perhaps it never existed in
            the first place.
          </p>
          <div className="flex justify-center gap-4">
            {/* 'btn' components with brand colors */}
            <Link href="/" className="btn btn-primary">
              Go Home
            </Link>
            <Link href="/support" className="btn btn-ghost">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
