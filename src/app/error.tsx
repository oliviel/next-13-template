"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("error", error);

  return (
    <div>
      <p>An unexpected error happened</p>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
