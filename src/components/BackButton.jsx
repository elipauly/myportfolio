import { useNavigate } from "react-router";

export default function BackButton({ to = -1 }) {
    const navigate = useNavigate();

    return (
    <button onClick={() => navigate(to)} className="back-button">
      ← back
    </button>
  );
}