import { Pagination } from "react-bootstrap";

export default function PaginationBar({ currentPage, pageCount, onChange }) {
  if (pageCount <= 1) return null;

  const pages = [];
  for (let p = 1; p <= pageCount; p++) pages.push(p);

  return (
    <Pagination className="justify-content-center mt-5">
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
      >
        Prev
      </Pagination.Prev>
      {pages.map((p) => (
        <Pagination.Item
          key={p}
          active={p === currentPage}
          onClick={() => onChange(p)}
        >
          {p}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={currentPage === pageCount}
        onClick={() => onChange(currentPage + 1)}
      >
        Next
      </Pagination.Next>
    </Pagination>
  );
}
