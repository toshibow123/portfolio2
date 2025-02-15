import React, { useState } from 'react'
import { FaReact, FaJsSquare, FaPython } from 'react-icons/fa'
import { FaDartLang } from 'react-icons/fa6';

const skills = [
 { name: "React", level: 40, icon: <FaReact className='text-blue-500'/>},
 { name: "JavaScript", level: 30, icon: <FaJsSquare className='text-yellow-400'/>},
 { name: "Python", level: 40, icon: <FaPython className='text-green-500'/>},
 { name: "Flutter", level: 30, icon: <FaDartLang className='text-sky-400'/>},
];


export default function works() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Skills</h2>
{skills.map((skill, index) => (
  <div key={index} className='mb-4'>
    {/*アイコン　+　スキル名*/}
<div className='flex items-center mb-2'>
<span className='text-2xl'>{skill.icon}</span>
<span className='ml-2 text-lg font-semibold'>{skill.name}</span>
</div>

{/* プログレスバー */}
<div className='w-full bg-gray-200 rounded-full h-4'>
<div
className='h-4 rounded-full transition-all duration-1000 ease-in-out'
style={{
  width: `${skill.level}%`,
  backgroundColor: "#4F46E5",
}}
></div>
</div>

 {/* タグ（レベル表示） */}
 <span className='ml-2 text-sm text-gray-600'>{skill.level}</span>
  </div>
))}
    </div>
  );
}
