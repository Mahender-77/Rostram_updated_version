import React, { useState, useEffect, useRef } from 'react';

// Utility: Seeded random for consistent gaps
function seededRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface InteractiveWallProps {
  squareSize?: number;
  squareColor?: string;
  shadowColor?: string;
  mouseX?: number;
  mouseY?: number;
}

const InteractiveWall: React.FC<InteractiveWallProps> = ({ squareSize = 48, squareColor = 'rgba(240,240,240,0.7)', shadowColor = 'rgba(120,120,120,', mouseX, mouseY }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const rows = Math.ceil(dimensions.height / squareSize);
  const cols = Math.ceil(dimensions.width / squareSize);

  // Use external mouse coordinates if provided
  const effectiveMouse = (typeof mouseX === 'number' && typeof mouseY === 'number') ? { x: mouseX, y: mouseY } : mouse;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      {...(typeof mouseX === 'number' && typeof mouseY === 'number' ? {} : { onMouseMove: handleMouseMove })}
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => {
          const y_norm = rows > 1 ? row / (rows - 1) : 0;
          const x_norm = cols > 1 ? Math.abs(col - (cols - 1) / 2) / ((cols - 1) / 2) : 0;
          const brokenness = ((1 - y_norm) + x_norm) / 2;
          const MAX_BROKENNESS = 0.8;
          const skip_probability = brokenness * MAX_BROKENNESS;

          const seed = row * 1000 + col * 17;
          if (seededRandom(seed) < skip_probability) {
            return null;
          }

          const left = (col * squareSize) + squareSize / 2;
          const top = (row * squareSize) + squareSize / 2;
          const dx = effectiveMouse.x - left;
          const dy = effectiveMouse.y - top;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxShadow = 24;
          const shadowX = (dx / 100) * 8;
          const shadowY = (dy / 100) * 8;
          const shadowBlur = Math.max(8, maxShadow - dist / 10);
          const shadowAlpha = Math.max(0.05, 0.35 - dist / 400);
          const spread = Math.max(0, 4 - dist / 50);

          return (
            <div
              key={`sq-${row}-${col}`}
              style={{
                position: 'absolute',
                left: col * squareSize,
                top: row * squareSize,
                width: squareSize - 2,
                height: squareSize - 2,
                background: squareColor,
                borderRadius: 6,
                boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px ${spread}px ${shadowColor}${shadowAlpha})`,
                transition: 'box-shadow 0.1s',
                pointerEvents: 'none',
              }}
            />
          );
        })
      )}
    </div>
  );
};

export default InteractiveWall; 