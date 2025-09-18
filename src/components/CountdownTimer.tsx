import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    // Set target date to October 11, 2025 (JBCN Stars competition date)
    const targetDate = new Date("2025-10-11T08:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
          seconds: Math.floor(distance % (1000 * 60) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <div className="glass p-4 sm:p-6 rounded-2xl text-center max-w-2xl mx-auto px-4 sm:px-0 py-6 sm:py-8 my-0">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-deep-purple" />
        <h3 className="text-lg font-semibold text-foreground">Competition Starts In</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-deep-purple">{timeLeft.days}</div>
          <div className="text-xs sm:text-sm text-foreground-muted">Days</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-deep-purple">{timeLeft.hours}</div>
          <div className="text-xs sm:text-sm text-foreground-muted">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-deep-purple">{timeLeft.minutes}</div>
          <div className="text-xs sm:text-sm text-foreground-muted">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-deep-purple">{timeLeft.seconds}</div>
          <div className="text-xs sm:text-sm text-foreground-muted">Seconds</div>
        </div>
      </div>
    </div>;
};
export default CountdownTimer;