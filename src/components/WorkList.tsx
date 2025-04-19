// src/components/WorksList.jsx
import React from "react";
import hatsuonTop from "../assets/hatsuontop.png";
import todoTop from "../assets/Todotop.png";
import qrTop from "../assets/qrtop.png";
import chatGif from "../assets/chat.gif";
import memoryGif from "../assets/memory.gif";

const works = [
  {
    title: "英語発音チェッカー",
    text: "Coding(Responsive) / Flutter",
    imgSrc: hatsuonTop, 
    link: "https://github.com/toshibow123/hayakuchi_game",
  },
  {
    title: "ToDoリスト",
    text: "Coding(Responsive) / Flutter",
    imgSrc: todoTop,
    link: "https://github.com/toshibow123/todo_list_app",
  },
  {
    title: "QRコードリーダー",
    text: "Coding(Responsive) / Flutter",
    imgSrc: qrTop,
    link: "https://github.com/toshibow123/qr_code_reader",
  },
  {
    title: "LINE風メッセージアプリ",
    text: "Coding(Responsive) / Flutter",
    imgSrc: chatGif,
    link: "https://github.com/toshibow123/new_chat_app",
  },
  {
    title: "神経衰弱ゲームアプリ",
    text: "Coding(Responsive) / Flutter",
    imgSrc: memoryGif,
    link: "https://github.com/toshibow123/memory_game",
  },
];

const WorksList = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">WORKS</h2>
          <p className="text-gray-600">
            自分の成果物の一覧です。LinkからGitコードを確認いただけます。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg">
              <a href={work.imgSrc} className="block">
                <img
                  src={work.imgSrc}
                  alt={work.title}
                  className="w-full h-48 object-cover rounded-md hover:opacity-80 transition-opacity duration-300"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {work.title}
                </h3>
                <p className="text-gray-600">{work.text}</p>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksList;
