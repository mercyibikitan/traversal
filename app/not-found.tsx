import Link from "next/link";

export default function NotFound() {
    return (
        <main className="not-found">
            <div className="not-found-content">
                <p className="not-found-code">404</p>

                <h1>Oops! Page Not Found</h1>

                <p>
                    The page you are looking for may have been moved, deleted,
                    or does not exist.
                </p>

                <Link href="/" className="primary-btn">
                    Back to Home
                </Link>
            </div>
        </main>
    );
}