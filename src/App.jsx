import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import MenuDisplay from './components/MenuDisplay';
import StatsBar from './components/StatsBar';
import useLocalStorage from './hooks/useLocalStorage';
import menuData from './data/menuData.json';
import healthTips from './data/healthTips.json';

function App() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [completedDays, setCompletedDays] = useLocalStorage('mealPlannerData', {});

  const toggleDayComplete = (day) => {
    setCompletedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const resetProgress = () => {
    if (window.confirm('Adakah anda pasti mahu reset semua progress?')) {
      setCompletedDays({});
    }
  };

  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / 30) * 100);

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 drop-shadow-lg mb-2">
          Haziq <span className="text-[#f7a049]">Menu Sihat</span>
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          30-Day Meal Plan - Wife Yoni ♥
        </p>
      </header>

      {/* Stats Bar */}
      <StatsBar
        progressPercentage={progressPercentage}
        completedCount={completedCount}
        selectedDay={selectedDay}
        isCompleted={completedDays[selectedDay]}
        onReset={resetProgress}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Calendar
          selectedDay={selectedDay}
          completedDays={completedDays}
          onDayClick={handleDayClick}
          onToggleComplete={toggleDayComplete}
        />

        {/* Menu Display */}
        <MenuDisplay
          day={selectedDay}
          menu={menuData[selectedDay]}
          tip={healthTips[selectedDay]}
          isCompleted={completedDays[selectedDay]}
          onToggleComplete={() => toggleDayComplete(selectedDay)}
        />
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-8 text-center text-sm text-gray-600">
        <p>Data disimpan secara automatik dalam pelayar anda</p>
      </footer>
    </div>
  );
}

export default App;