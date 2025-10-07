import React from 'react';

const MenuDisplay = ({ day, menu, tip, isCompleted, onToggleComplete }) => {
  const meals = [
    { title: '🌅 Sarapan Pagi', key: 'sarapan', color: 'bg-green-100 text-green-700 border-green-200' },
    { title: '☀️ Makan Tengah Hari', key: 'tengah_hari', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { title: '🍎 Snek', key: 'snek', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    { title: '🌙 Makan Malam', key: 'makan_malam', color: 'bg-red-100 text-red-700 border-red-200' }
  ];

  return (
    <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-2xl flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-gray-100">
        Menu Hari Ke <span className="text-[#f7a049]">{day}</span>
      </h2>

      <div className="space-y-4 flex-grow menu-list-container overflow-y-auto pr-2">
        {meals.map((meal) => (
          <div key={meal.key} className={`meal-card ${meal.color} p-4 rounded-xl shadow-md border`}>
            <h4 className="font-extrabold text-lg mb-1">{meal.title}</h4>
            <p className="text-base">{menu[meal.key]}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="font-bold text-gray-700 text-sm mb-2">💡 Tips Kesihatan:</p>
        <p className="text-sm text-gray-600 leading-relaxed">{tip}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={onToggleComplete}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
            isCompleted
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-[#f7a049] hover:bg-orange-600 text-white'
          }`}
        >
          {isCompleted ? '✓ Hari Ini Selesai' : 'Tandakan Selesai'}
        </button>
      </div>
    </div>
  );
};

export default MenuDisplay;