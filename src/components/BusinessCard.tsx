import Progress from "./Progress";

export default function BusinessCard() {
  const data = {
    targetSavings: 1000000.0,
    currentSavings: 789999.56,
    progress: 65,
  };
  return (
    <div className="space-y-1 w-full h-full flex flex-col">
      <h3 className="text-2xl font-medium">Business</h3>
      <div className="w-full flex-1 flex flex-col gap-6 glass px-4 py-6">
        <div className="flex items-center justify-between">
          <p>Target savings</p>
          <div className="py-1 px-2 bg-black/10 border border-white/60 rounded-[10px] text-sm text-primary">
            <p>
              $
              {data.targetSavings
                .toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .replace(/,/g, ".")}
            </p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-between gap-4">
          <div className="space-y-3">
            <p className="text-white/80 text-sm">Total savings</p>
            <div className="space-y-1">
              <p>
                <span className="text-primary">$</span>
                {data.currentSavings
                  .toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                  .replace(/,/g, ".")}
              </p>
              <Progress progress={data.progress} />
            </div>
          </div>
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="currentColor"
                strokeWidth="6"
                fill="white"
                className="text-white/5"
              />
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="currentColor"
                strokeWidth="6"
                fill="transparent"
                strokeDasharray={213.6}
                strokeDashoffset={213.6 * (1 - data.progress / 100)}
                className="text-primary"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-sm font-bold text-black">
              {data.progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
