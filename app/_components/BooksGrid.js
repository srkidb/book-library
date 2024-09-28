"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export async function getBooks(query) {
  const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
  const link = `${baseURL}${query}`;
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error("Couldn not get books");
  }
  const data = response.json();
  return data;
}

function BooksGrid({ query }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [query],
    queryFn: () => getBooks(`${query}`),
  });

  if (isError)
    return <div className="rounded-xl h-12 w-96 lg:w-[40rem]">Error!</div>;
  console.log(data?.items);

  return (
    <div className="grid grid-cols-4 gap-4 text-white mt-10 p-4">
      {isLoading
        ? "Loading..."
        : data?.items.map((item) => {
            return (
              <Link href="/">
                <div key={item?.id}>
                  <div className="flex justify-center items-center">
                    <Image
                      src={`${item.volumeInfo.imageLinks.smallThumbnail}`}
                      alt="slika"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="grid justify-center items-center">
                    <div>{item?.volumeInfo.title}</div>
                    <div className="grid justify-center items-center">
                      {item?.volumeInfo.authors}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
    </div>
  );
}

export default BooksGrid;

/*
Image
Title
Author
*/
