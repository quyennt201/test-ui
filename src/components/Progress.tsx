import { useEffect, useState } from "react";

export default function Progress({ progress }: { progress: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const time = setTimeout(() => {
      setWidth(progress);
    }, 100);

    return () => clearTimeout(time);
  }, [progress]);

  return (
    <div className="w-full h-2 bg-black/80 rounded-full relative overflow-hidden">
      <div
        className={
          "h-full bg-primary rounded-l-full absolute top-0 left-0 transition-all duration-500"
        }
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
