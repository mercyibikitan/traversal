import Link from "next/link";

type BreadcrumbsProps = {
    currentPage: string;
};

export default function Breadcrumbs({
    currentPage,
}: BreadcrumbsProps) {
    return (
        <div className="breadcrumbs">
            <h1>{currentPage}</h1>

            <div className="breadcrumb-links">
                <Link href="/">Home</Link>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}