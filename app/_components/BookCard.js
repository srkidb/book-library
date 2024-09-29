"use client";
import { useQuery } from "@tanstack/react-query";
import Header from "./Header";
import { getBook } from "../data/getBooks";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {}

export async function generateStaticParams() {}

function BookCard() {
  const params = useParams();
  console.log(params.bookId);

  const { data, isLoading, isError } = useQuery({
    queryKey: [params.bookId],
    queryFn: () => getBook(`/${params.bookId}`),
  });
  console.log(data);

  if (isError)
    return <div className="rounded-xl h-12 w-96 lg:w-[40rem]">Error!</div>;
  console.log(data?.items);

  return (
    <>
      <html lang="en">
        <body className="bg-[#B4B8AF] p-5">
          <Header />
          <div>
            <div className="slika p-5">
              <Image
                src={data?.volumeInfo.imageLinks.thumbnail}
                alt="Slika knjige"
                width={300}
                height={300}
              />
            </div>
            <div>
              <div>Book Title: {data?.volumeInfo.title}</div>
              <div>Author: {data?.volumeInfo.authors}</div>
              <div>Description: {data?.volumeInfo.description}</div>
              <div>Page Count: {data?.volumeInfo.pageCount}</div>
              <div>Avg. Rating: {data?.volumeInfo.averageRating}</div>
            </div>
            {/*
        
        volumeInfo.title
        volumeInfo.authors
        description
        pageCount
        averageRating
        */}
          </div>
          <div>
            <Link href="/">
              <button>Home</button>
            </Link>
          </div>
        </body>
      </html>
    </>
  );
}

export default BookCard;
