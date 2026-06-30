import './Subpage.css';
import { Outlet, useNavigate } from "react-router";

function Subpage() {
    const navi = useNavigate();

    return (
        <>
        <header className = "subpage-header">
            <button onClick={() => navi(-1)} className="back-button">
                ← back
            </button>
        </header>

        <main className = "subpage-content">
            <Outlet />
        </main>
        </>
    );
}

export default Subpage;