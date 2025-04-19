import React from 'react'
import { Link, Links } from 'react-router-dom'
import profileImage from "../assets/profile.jpg"


export default function about() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6'>
      {/* 📷 プロフィール写真 */}
      <img 
      src={profileImage}
      alt='Profile'
      className='w-40 h-40 rounded-full shadow-lg mb-6 object-cover'
/>

{/* 📝 自己紹介カード */}
<div className='max-w-lg w-full bg-white p-6 rounded-lg shadow-md space-y-6'>
 {/* 💻 スキルセット */}
 <div>
  <h2 className='tesx-xl font-bold border-b pb-2'>スキルセット</h2>
  <p className='mt-2'>React, Flutter, Python, JavaScript</p>
 </div>

  {/* 📜 経歴・学習歴 */}
  <div>
    <h2 className='text-xl font-bold border-b pb-2'>経歴・学習歴</h2>
    <p className='mt-2'>WEBエンジニア転職を目指し、Web開発・アプリ開発を学習中</p>
  </div>

  {/* 🎮 趣味・個性 */}
  <div>
    <h2 className='text-xl font-bold border-b pb-2'>趣味・個性</h2>
    <p className="mt-2">ゲーム好き (特にストリートファイター)、筋トレもやってます！</p>
        </div>

        {/* 🚀 目標・夢 */}
        <div>
          <h2 className="text-xl font-bold border-b pb-2">🚀 目標・夢</h2>
          <p className="mt-2">WEB開発スキルを活かしてフリーランスとして活動する！</p>
        </div>
        

</div>
<div className='flex justify-center mt-5'> 
<div className='flex justify-center mt-5 gap-4'>
<Link to="/">
<button className="text-2xl font-bold text-white bg-blue-400 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-lg shadow-md cursor-pointer">
    TOP
  </button>
</Link>
<Link to="/WORKS">
<button className="text-2xl font-bold text-white bg-purple-400 hover:bg-purple-700 transition-all duration-300 px-6 py-3 rounded-lg shadow-md cursor-pointer">
    WORKS
  </button>
</Link>
</div>
          </div>
    </div>
  )
}
