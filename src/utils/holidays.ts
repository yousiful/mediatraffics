export interface HolidayTheme {
  name: string;
  greeting: string;
  emoji: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  particles: {
    type: 'emoji' | 'shape';
    items: string[];
    count: number;
  };
  backgroundGradient: string;
}

export function getCurrentHoliday(): HolidayTheme | null {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  // For demo purposes - Thanksgiving (November 27, 2025)
  if (month === 10 && day === 27) {
    return {
      name: 'Thanksgiving',
      greeting: 'Happy Thanksgiving!',
      emoji: '🦃',
      colors: {
        primary: '#CD853F',
        secondary: '#FF8C00',
        accent: '#8B4513'
      },
      particles: {
        type: 'emoji',
        items: ['🦃', '🍂', '🍁', '🌾', '🥧', '🌽', '🍽️'],
        count: 25
      },
      backgroundGradient: 'from-orange-900/20 via-amber-900/20 to-brown-900/20'
    };
  }

  if (month === 0 && day === 1) {
    return {
      name: 'New Year',
      greeting: 'Happy New Year!',
      emoji: '🎉',
      colors: {
        primary: '#FFD700',
        secondary: '#FFA500',
        accent: '#FF69B4'
      },
      particles: {
        type: 'emoji',
        items: ['🎉', '🎊', '✨', '🥳', '🍾', '🎆'],
        count: 30
      },
      backgroundGradient: 'from-yellow-900/20 via-orange-900/20 to-pink-900/20'
    };
  }

  if (month === 1 && day === 14) {
    return {
      name: 'Valentine\'s Day',
      greeting: 'Happy Valentine\'s Day!',
      emoji: '💝',
      colors: {
        primary: '#FF1493',
        secondary: '#FF69B4',
        accent: '#FFB6C1'
      },
      particles: {
        type: 'emoji',
        items: ['❤️', '💕', '💖', '💗', '💝', '🌹', '💐'],
        count: 25
      },
      backgroundGradient: 'from-pink-900/20 via-rose-900/20 to-red-900/20'
    };
  }

  if (month === 2 && day === 17) {
    return {
      name: 'St. Patrick\'s Day',
      greeting: 'Happy St. Patrick\'s Day!',
      emoji: '☘️',
      colors: {
        primary: '#00FF00',
        secondary: '#32CD32',
        accent: '#90EE90'
      },
      particles: {
        type: 'emoji',
        items: ['☘️', '🍀', '🌈', '🎩', '🍺', '💚'],
        count: 25
      },
      backgroundGradient: 'from-green-900/20 via-emerald-900/20 to-lime-900/20'
    };
  }

  if (month === 3 && day >= 1 && day <= 7) {
    return {
      name: 'Easter',
      greeting: 'Happy Easter!',
      emoji: '🐰',
      colors: {
        primary: '#FFB6C1',
        secondary: '#DDA0DD',
        accent: '#87CEEB'
      },
      particles: {
        type: 'emoji',
        items: ['🐰', '🥚', '🐣', '🌷', '🌸', '🌼'],
        count: 25
      },
      backgroundGradient: 'from-pink-900/20 via-purple-900/20 to-blue-900/20'
    };
  }

  if (month === 6 && day === 4) {
    return {
      name: 'Independence Day',
      greeting: 'Happy 4th of July!',
      emoji: '🇺🇸',
      colors: {
        primary: '#FF0000',
        secondary: '#0000FF',
        accent: '#FFFFFF'
      },
      particles: {
        type: 'emoji',
        items: ['🎆', '🎇', '🇺🇸', '⭐', '🎉', '🦅'],
        count: 30
      },
      backgroundGradient: 'from-red-900/20 via-blue-900/20 to-white-900/20'
    };
  }

  if (month === 9 && day === 31) {
    return {
      name: 'Halloween',
      greeting: 'Happy Halloween!',
      emoji: '🎃',
      colors: {
        primary: '#FF8C00',
        secondary: '#8B008B',
        accent: '#000000'
      },
      particles: {
        type: 'emoji',
        items: ['🎃', '👻', '🦇', '🕷️', '🍬', '🕸️', '💀', '🧙'],
        count: 30
      },
      backgroundGradient: 'from-orange-900/20 via-purple-900/20 to-black'
    };
  }

  if (month === 10 && (day >= 22 && day <= 28)) {
    return {
      name: 'Thanksgiving',
      greeting: 'Happy Thanksgiving!',
      emoji: '🦃',
      colors: {
        primary: '#CD853F',
        secondary: '#FF8C00',
        accent: '#8B4513'
      },
      particles: {
        type: 'emoji',
        items: ['🦃', '🍂', '🍁', '🌾', '🥧', '🌽', '🍽️'],
        count: 25
      },
      backgroundGradient: 'from-orange-900/20 via-amber-900/20 to-brown-900/20'
    };
  }

  if (month === 11 && (day >= 1 && day <= 26)) {
    return {
      name: 'Christmas Season',
      greeting: 'Merry Christmas!',
      emoji: '🎄',
      colors: {
        primary: '#FF0000',
        secondary: '#00FF00',
        accent: '#FFD700'
      },
      particles: {
        type: 'emoji',
        items: ['🎄', '⛄', '🎅', '🎁', '❄️', '⭐', '🔔', '🕯️'],
        count: 35
      },
      backgroundGradient: 'from-red-900/20 via-green-900/20 to-blue-900/20'
    };
  }

  if (month === 11 && day === 31) {
    return {
      name: 'New Year\'s Eve',
      greeting: 'Happy New Year\'s Eve!',
      emoji: '🎊',
      colors: {
        primary: '#FFD700',
        secondary: '#C0C0C0',
        accent: '#000000'
      },
      particles: {
        type: 'emoji',
        items: ['🎉', '🎊', '🥂', '✨', '🎆', '🎇'],
        count: 30
      },
      backgroundGradient: 'from-yellow-900/20 via-gray-900/20 to-black'
    };
  }

  return null;
}

export function isNearHoliday(daysThreshold: number = 3): HolidayTheme | null {
  const now = new Date();

  for (let i = 0; i <= daysThreshold; i++) {
    const checkDate = new Date(now);
    checkDate.setDate(now.getDate() + i);

    const originalDate = new Date();
    now.setMonth(checkDate.getMonth());
    now.setDate(checkDate.getDate());

    const holiday = getCurrentHoliday();

    now.setMonth(originalDate.getMonth());
    now.setDate(originalDate.getDate());

    if (holiday) return holiday;
  }

  return null;
}
