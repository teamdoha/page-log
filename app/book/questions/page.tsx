"use client";

import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function BookQuestionsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E5EFFF]">
      <div className="w-full max-w-4xl p-8"> {/* 영역을 넓게 수정 */}
        <Carousel />
      </div>
    </div>
  );
}

const questions = [
  {
    id: 1,
    title: '왜 이 책을 선택했나요?',
    content: '',
    placeholder: '읽게 된 이유나 기대하는 점을 작성해주세요.',
    showTextArea: true,
  },
  {
    id: 2,
    title: '책을 읽기 전 궁금한 점이 있나요?',
    content: '',
    placeholder: '책을 통해 알고 싶은 내용이나 질문을 적어주세요.',
    showTextArea: true,
  },
  {
    id: 3,
    title: '이제 책을 읽으러 갑시다.',
    content: '',
    placeholder: '',
    showTextArea: false,
  },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [responses, setResponses] = React.useState<{[key: number]: string}>({});

  const handleNext = () => {
    if (activeIndex < questions.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleResponseChange = (id: number, value: string) => {
    setResponses({
      ...responses,
      [id]: value,
    });
  };

  const activeQuestion = questions[activeIndex];

  return (
    <div className="relative">
      {/* 질문 카드 */}
      <div className="bg-white rounded-lg shadow-md p-8 min-h-[500px] flex flex-col justify-between">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-8">{activeQuestion.title}</h2>
          {activeQuestion.showTextArea && (
            <Textarea
              placeholder={activeQuestion.placeholder}
              className="min-h-[250px] resize-none"
              value={responses[activeQuestion.id] || ''}
              onChange={(e) => handleResponseChange(activeQuestion.id, e.target.value)}
            />
          )}
        </div>
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="mr-2"
            onClick={handlePrevious}
            disabled={activeIndex === 0}
          >
            이전으로
          </Button>
          {activeIndex === questions.length - 1 ? (
            <Link href="/book/read">
              <Button>책 읽기 시작</Button>
            </Link>
          ) : (
            <Button onClick={handleNext}>다음으로</Button>
          )}
        </div>
      </div>
      
      {/* 진행 상태 표시 */}
      <div className="flex justify-center mt-4">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === activeIndex ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}