import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E5EFFF] text-[#1A1A1A]">
      <h1 className="text-4xl font-bold mb-4">페이지로그</h1>
      <p className="text-xl mb-8">독서를 시작할까요?</p>
      <button className="bg-black text-white px-6 py-3 rounded-lg">
        <Link href="/search">새로 작성하기</Link>
      </button>
      <a href="#" className="mt-4 text-sm text-gray-500">
        내 서재로 가기
      </a>
    </div>
  );
}
