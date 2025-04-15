"use client";

import { Input } from "../../components/ui/input";
import { Search, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// 샘플 책 데이터
const sampleBooks = [
  { id: 1, title: "해리 포터와 마법사의 돌", author: "J.K. 롤링" },
  { id: 2, title: "어린 왕자", author: "생텍쥐페리" },
  { id: 3, title: "1984", author: "조지 오웰" },
  { id: 4, title: "데미안", author: "헤르만 헤세" },
  { id: 5, title: "멋진 신세계", author: "올더스 헉슬리" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  
  // 검색어에 따라 책 필터링
  const filteredBooks = sampleBooks.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) || 
    book.author.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E5EFFF] text-[#1A1A1A]">
      <h1 className="text-4xl font-bold mb-12">무슨 책을 읽을까요?</h1>
      <div className="bg-white shadow-md rounded-lg p-4 w-1/2 mb-8">
        <form onSubmit={handleSearch}>
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <Input
              type="text"
              placeholder="소설, 만화, 에세이..."
              className="flex-1 border-none focus:ring-0"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" variant="ghost">검색</Button>
          </div>
        </form>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 w-1/2 min-h-[400px] flex items-center justify-center">
        {showResults && filteredBooks.length > 0 ? (
          <div className="w-full">
            <h2 className="text-xl font-bold mb-4">검색 결과</h2>
            <ul className="space-y-2">
              {filteredBooks.map((book) => (
                <li key={book.id} className="p-3 hover:bg-gray-100 rounded-lg">
                  <Link href="/book/questions" className="flex flex-col">
                    <span className="font-medium">{book.title}</span>
                    <span className="text-sm text-gray-500">{book.author}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : showResults && filteredBooks.length === 0 ? (
          <div className="flex flex-col items-center">
            <BookOpen className="w-12 h-12 text-gray-400 mb-2" />
            <p className="text-gray-500">검색 결과가 없습니다.</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <BookOpen className="w-12 h-12 text-gray-400 mb-2" />
            <p className="text-gray-500">책을 검색해보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
}
