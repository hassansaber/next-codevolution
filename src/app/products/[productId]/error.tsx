"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Error Boundary in reviewId</h2>
      <p>{error.message}</p>
      <button onClick={reset}>try again</button>
    </div>
  );
}
