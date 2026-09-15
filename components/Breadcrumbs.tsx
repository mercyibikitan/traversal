import Link from "next/link";

type BreadcrumbsProps = {
  currentPage: string;
};

export default function Breadcrumbs({
  currentPage,
}: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs">
      <Link href="/">Home</Link>
      <span>»</span>
      <span>{currentPage}</span>
    </div>
  );
}