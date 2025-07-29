"use client";

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import { HiSun, HiMoon, HiComputerDesktop } from 'react-icons/hi2';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themes = [
    { name: 'light', icon: HiSun, label: 'Light' },
    { name: 'dark', icon: HiMoon, label: 'Dark' },
    { name: 'system', icon: HiComputerDesktop, label: 'System' }
  ];

  return (
    <div className="w-max flex items-center bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
      {themes.map(({ name, icon: Icon, label }) => (
        <button
          key={name}
          onClick={() => setTheme(name)}
          className={`
            flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-colors
            ${theme === name 
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' 
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }
          `}
          aria-label={`Switch to ${label} mode`}
        >
          <Icon className="w-4 h-4" />
          <span className="ml-2 hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  )
}