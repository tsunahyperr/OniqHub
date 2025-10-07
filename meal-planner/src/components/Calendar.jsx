import React from 'react';
import DayBox from './DayBox';

const Calendar = ({ selectedDay, completedDays, onDayClick, onToggleComplete }) => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Kalendar 30 Hari
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Klik pada kotak untuk lihat menu • Klik ✓ untuk tandakan selesai
      </p>

      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-6 xl:grid-cols-7 gap-3">
        {days.map(day => (
          <DayBox
            key={day}
            day={day}
            isSelected={selectedDay === day}
            isCompleted={completedDays[day]}
            onClick={() => onDayClick(day)}
            onToggleComplete={() => onToggleComplete(day)}
          />
        ))}
      </div>

      <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
        <div className="flex items-start gap-2">
          <span className="text-lg">💡</span>
          <div className="flex-1">
            <div className="font-semibold text-gray-800 text-sm mb-1">Legenda:</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#f7a049] rounded"></div>
                <span>Dipilih</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span>Selesai</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-50 border-2 border-orange-200 rounded"></div>
                <span>Belum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;