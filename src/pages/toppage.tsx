import React, { useState, useEffect } from 'react'
import { gsap } from "gsap";
import CanvasAnimation from "../components/CanvasAnimation";
import sampleImage from "../assets/sample.jpg";
import { Link } from 'react-router-dom';

export default function toppage() {
    const [showText, setShowText] = useState(false); // 文字を表示するフラグ

    useEffect(() => {
      const tl = gsap.timeline();
  
      // **🔥 画像の初期状態を設定（opacity: 0 & y: 700px 下に）**
      gsap.set("#imageContainer", { opacity: 0, y: 700 });
  
      // 1️⃣ **背景（CanvasAnimation）のアニメーションを最初に実行**
      tl.add(() => setShowText(false)) // 文字を非表示にする
        .to("#canvasAnimation", { opacity: 1, duration: 1.5, ease: "power3.out" }) // 背景をめくる動作 // in か out、またはinoutのスピード調整。　それぞれ別の速度にしたいなら二つ関数が必要
        .add(() => setShowText(true)) // 🔥 背景の変更後に文字を表示
        .fromTo(
          ".char",
          { opacity: 0, y: 50 },  // 初期位置（画面外・下）
          { opacity: 1, y: 0, duration: 1, stagger: 0.02, ease: "power4.out" } //文字のpower調整
        )
        .to(".char", { opacity: 1, y: 0, duration: 1 }) // **welcome~文字を1秒間キープ**
        .to(".char", { opacity: 0, y: -100, duration: 1, stagger:0.05, ease: "power3.in" })
        .to("#imageContainer", { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }, "+=0.5"); // 🔥 **画像が下からスムーズに出る**
  
      // 2️⃣ ヘッダーナビゲーションのアニメーション
      gsap.fromTo(
        ".is-slide-up",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.05, delay: 1.5 }
      );
    }, []);

  return (
    <div className="relative w-screen h-screen bg-white text-black overflow-hidden">
    {/* Canvas 背景 */}
    <CanvasAnimation />

    {/* アニメーションするテキスト */}
    <h1 className=" text-3xl heading absolute inset-0 flex items-center justify-center text-white font-bold">
      <span className="char">W</span>
      <span className="char">e</span>
      <span className="char">l</span>
      <span className="char">c</span>
      <span className="char">o</span>
      <span className="char">m</span>
      <span className="char">e</span>
      <span className="char">_</span>
      <span className="char">t</span>
      <span className="char">o</span>
      <span className="char">_</span>
      <span className="char">M</span>
      <span className="char">y</span>
      <span className="char">P</span>
      <span className="char">o</span>
      <span className="char">r</span>
      <span className="char">t</span>
      <span className="char">f</span>
      <span className="char">o</span>
      <span className="char">l</span>
      <span className="char">i</span>
      <span className="char">o</span>
    </h1>

    {/* 画像を表示（最初はopacity: 0 & y: 700に設定） */}
    <div
      id="imageContainer"
      className="absolute bottom-0 left-0 w-full flex justify-center"
    >
      <img
        id="imageAnim"
        src={sampleImage}
        alt="Sample"
        className="w-[160vh] h-[80vh] object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* ヘッダー */}
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50">
      <h1 className="site-title is-slide-up inset-shadow-amber-600">Toshi's Portfolio Site</h1>
      <nav>
        <ul className="flex space-x-6">
          <Link to="ABOUT">
            <li className="nav-item is-slide-up cursor-pointer">ABOUT</li>
          </Link>
          <Link to="WORKS">
            <li className="nav-item is-slide-up cursor-pointer">WORKS</li>
          </Link>
          <li className="nav-item is-slide-up cursor-pointer">CONTACT</li>
        </ul>
      </nav>
    </header>
  </div>
  )
}
