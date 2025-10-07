import React from 'react';

const StatsBar = ({ progressPercentage, completedCount, selectedDay, isCompleted, onReset }) => {
  return (
    <div className="max-w-7xl mx-auto mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="stats-card">
          <div className="text-sm text-gray-600 mb-1">Progress Keseluruhan</div>
          <div className="flex items-baseline gap-2">
            <div className="text-3xl font-bold text-[#f7a049]">{progressPercentage}%</div>
            <div className="text-sm text-gray-500">({completedCount}/30 hari)</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-gradient-to-r from-[#f7a049] to-[#ea580c] h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="stats-card">
          <div className="text-sm text-gray-600 mb-1">Hari Dipilih</div>
          <div className="text-3xl font-bold text-gray-800">Hari {selectedDay}</div>
          <div className="text-sm text-gray-500 mt-2">
            {isCompleted ? '✓ Selesai' : 'Belum selesai'}
          </div>
        </div>

        <div className="stats-card">
          <div className="text-sm text-gray-600 mb-1">Tindakan Cepat</div>
          <button
            onClick={onReset}
            className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors w-full"
          >
            Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;