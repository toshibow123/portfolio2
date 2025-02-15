import { useEffect, useRef } from "react";
import gsap from "gsap";


export default function CanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 画面サイズ設定
    canvas.width = window.innerWidth * Math.min(2, window.devicePixelRatio);
    canvas.height = window.innerHeight * Math.min(2, window.devicePixelRatio);

    // 💡 修正：テンプレートリテラルの記述ミスを修正
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const point = {
      currentY: canvas.height * 5,
      curveY: canvas.height,
    };

    // アニメーションの設定
    gsap.registerEffect({
      name: "curve",
      defaults: { flag: true, delay: 0 },
      effect: (target, config) => {
        return gsap
          .timeline({
            onUpdate: () => drawCurve(config.flag),
          })
          .to(target, { duration: 0.8, curveY: 0, ease: "power4.out", delay: config.delay })
          .to(target, { duration: 0.8, currentY: 0 }, "<");
      },
    });

    // GSAP アニメーション実行
    const tl = gsap.timeline({ delay: 0.5 })
      .add(gsap.effects.curve(point))
      .set(point, { currentY: canvas.height * 5, curveY: canvas.height })
      .add(gsap.effects.curve(point, { flag: false }), "+=5"); //ここで黒⇒白の時間調整

    function drawCurve(flag: boolean) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#111";

      if (flag) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
      }

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, point.currentY);
      ctx.quadraticCurveTo(point.currentY, point.curveY / 2, canvas.width, -(canvas.height / 10));
      ctx.lineTo(canvas.width, 0);
      ctx.closePath();
      ctx.fill();
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
}
