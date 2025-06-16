import { useNavigate } from "react-router-dom";

export default function RouteError() {
  const navigate = useNavigate();

  return (
    <div className="grid place-items-center h-screen w-screen text-center bg-background text-text px-4">
      <div>
        <h2 className="text-3xl font-bold text-PrimaryTextColour mb-4">
          Error
        </h2>
        <p>
          <span
            className="text-text cursor-pointer hover:text-primary"
            onClick={() => navigate("/")}
          >
            404 Page not found
          </span>
        </p>
      </div>
    </div>
  );
}