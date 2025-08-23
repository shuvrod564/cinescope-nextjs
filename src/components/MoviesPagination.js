"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export default function MoviesPagination({ totalPages }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const maxVisible = 5;
 
  

  return (
    <Pagination className={"mt-10"}>
      <PaginationContent>
        {Array.from(
          { length: Math.min(maxVisible, totalPages) },
          (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`?page=${index + 1}`);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {totalPages > maxVisible && <PaginationEllipsis />}

        {totalPages > maxVisible && (
          <PaginationItem>
            <PaginationLink
              isActive={currentPage === totalPages}
              onClick={(e) => {
                e.preventDefault();
                router.push(`?page=${totalPages}`);
              }}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
