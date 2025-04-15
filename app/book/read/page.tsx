import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function BookReadPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E5EFFF]">
      <div className="w-full max-w-3xl p-8">
        <div className="bg-white rounded-lg shadow-md p-8 min-h-[500px] flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">해리 포터와 마법사의 돌</h1>
            <div className="text-sm text-gray-500 mb-8">저자: J.K. 롤링</div>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                해리 포터는 버논과 페투니아 더즐리 부부의 집에서 지내며 학대받는 생활을 하고 있었다. 그러던 중 11번째 생일이 다가오자 호그와트 마법학교에서 입학허가서가 오기 시작하고, 반 거인이자 호그와트의 사냥터지기인 루베우스 해그리드를 통해 자신이 마법사라는 사실을 알게 된다.
              </p>
              <p className="mb-4">
                해리는 해그리드와 함께 다이애건 앨리에서 학교에 필요한 물건과 부엉이 헤드위그를 구입하고 킹스크로스역의 9와 3/4 승강장에서 호그와트 행 기차를 탄다. 기차 안에서 론 위즐리와 허마이오니 그레인저와 친구가 되며, 반면 드레이코 말포이와는 앙숙이 된다.
              </p>
              <p>
                학생들은 기숙사 배정을 받게 되고 해리와 론은 그리핀도르에, 헤르미온느도 마찬가지로 그리핀도르에 배정받게 된다. 말포이는 슬리데린에 배정받게 된다.
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <Button variant="outline">이전으로</Button>
            <Link href="/book/finished">
              <Button>독서 완료</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}