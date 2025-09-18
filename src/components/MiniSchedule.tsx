import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const MiniSchedule = () => {
  const events = [{
    date: "Mar 15",
    title: "Orientation & Registration",
    time: "9:00 AM",
    status: "upcoming"
  }, {
    date: "Mar 16",
    title: "Preliminary Rounds",
    time: "10:00 AM",
    status: "upcoming"
  }, {
    date: "Mar 17",
    title: "Workshop & Seminars",
    time: "2:00 PM",
    status: "upcoming"
  }, {
    date: "Mar 18",
    title: "Finals & Award Ceremony",
    time: "11:00 AM",
    status: "upcoming"
  }];
  return <div className="space-y-4 sm:space-y-6 relative">
      {/* Slanted Coming Soon Banner */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="transform -rotate-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 text-2xl font-bold shadow-xl opacity-90">
          COMING SOON
        </div>
      </div>
      
      <div className="opacity-50">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-deep-purple" />
          <h3 className="font-bold text-foreground text-lg sm:text-xl">Upcoming Events</h3>
        </div>
        <Button variant="outline" className="self-start sm:self-auto text-deep-purple border-deep-purple hover:bg-deep-purple hover:text-white text-sm">
          View Full Schedule
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {events.map((event, index) => <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-lg hover:shadow-md hover:shadow-sky-purple/10 transition-all duration-300 group">
            {/* Date */}
            <div className="text-center min-w-[50px] sm:min-w-[60px]">
              <div className="text-deep-purple font-semibold text-sm sm:text-base">{event.date}</div>
              <div className="text-xs text-foreground-muted">2025</div>
            </div>

            {/* Timeline connector */}
            <div className="flex flex-col items-center">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-deep-purple group-hover:scale-125 transition-transform duration-300" />
              {index < events.length - 1 && <div className="w-0.5 h-6 sm:h-8 bg-sky-purple/30 mt-2" />}
            </div>

            {/* Event Details */}
            <div className="flex-1">
              <h4 className="font-semibold text-foreground group-hover:text-deep-purple transition-colors duration-300 text-sm sm:text-base">
                {event.title}
              </h4>
              <p className="text-xs sm:text-sm text-foreground-muted">{event.time}</p>
            </div>

            {/* Status Badge */}
            <div className="px-2 sm:px-3 py-1 bg-sky-purple/20 text-deep-purple text-xs font-medium rounded-full whitespace-nowrap">
              Upcoming
            </div>
          </div>)}
      </div>
      </div>
    </div>;
};
export default MiniSchedule;