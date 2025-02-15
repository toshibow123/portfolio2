import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"; // 🔥 gsapをインポート
import { FaReact, FaJsSquare, FaPython } from 'react-icons/fa'
import { FaDartLang } from 'react-icons/fa6';
import WorksList from '../components/WorkList';

const skills = [
 {name: "React",
  level: 40,
  icon: <FaReact className='text-blue-500'/>,
  color: "#61DAFB",
  description: "A JavaScript library for building user interfaces"  
},
 {name: "JavaScript",
  level: 20,
  icon: <FaJsSquare className='text-yellow-400'/>,
  color: "#F7DF1E",
  description: "A programming language that powers web development"
},
 {name: "Python",
  level: 30, 
  icon: <FaPython className='text-green-500'/>,
  color: "#3776AB",
  description: "A powerful programming language used for data science and AI"
},
 {name: "Flutter",
  level: 30,
  icon: <FaDartLang className='text-sky-400'/>,
  color: "#02569B",
  description: "A UI toolkit for building natively compiled applications"
},
];

export default function works() { // 🔥 関数名を大文字に修正
  const counters = useRef([]); // 🔥 修正（counter → counters）

  useEffect(() => {
    skills.forEach((_, index) => {
      if (counters.current[index]) { // 🔥 nullチェックを追加
        gsap.fromTo(
          counters.current[index],
          { innerText: 0 },
          { innerText: skills[index].level, duration: 1.5, snap: "innerText" }
        );
      }
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-10 p-10"> 
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Skills</h2>

      {skills.map((skill, index) => (
        <div key={index} className='mb-6 group relative'>
          {/* アイコン + スキル名 */}
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
                backgroundColor: skill.color,
              }}
            ></div>
          </div>

          {/* タグ（レベル表示） */}
          <span 
            ref={(el) => (counters.current[index] = el)} 
            className='ml-2 text-sm text-gray-600'
          ></span>
        
        </div>
      ))}
    </div>
<div>
  <WorksList/>
</div>
    </div>
  );
}
