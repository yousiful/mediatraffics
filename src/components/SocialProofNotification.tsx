import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface Notification {
  id: string;
  name: string;
  action: string;
  location: string;
  timeAgo: string;
}

const notifications: Notification[] = [
  {
    id: '1',
    name: 'Sarah M.',
    action: 'set up Facebook Ads campaign',
    location: 'Los Angeles, CA',
    timeAgo: '2 minutes ago'
  },
  {
    id: '2',
    name: 'Michael R.',
    action: 'purchased Kenji AI subscription',
    location: 'Austin, TX',
    timeAgo: '5 minutes ago'
  },
  {
    id: '3',
    name: 'Jennifer L.',
    action: 'set up automated workflow',
    location: 'Miami, FL',
    timeAgo: '8 minutes ago'
  },
  {
    id: '4',
    name: 'David K.',
    action: 'booked a strategy call',
    location: 'Seattle, WA',
    timeAgo: '12 minutes ago'
  },
  {
    id: '5',
    name: 'Amanda T.',
    action: 'joined Ads Training program',
    location: 'New York, NY',
    timeAgo: '15 minutes ago'
  },
  {
    id: '6',
    name: 'Robert P.',
    action: 'set up Google Ads campaign',
    location: 'Chicago, IL',
    timeAgo: '18 minutes ago'
  },
  {
    id: '7',
    name: 'Lisa W.',
    action: 'purchased Voice Front Desk',
    location: 'Phoenix, AZ',
    timeAgo: '22 minutes ago'
  },
  {
    id: '8',
    name: 'James H.',
    action: 'started Client Generation Loop',
    location: 'Boston, MA',
    timeAgo: '25 minutes ago'
  },
  {
    id: '9',
    name: 'Emily C.',
    action: 'set up lead generation workflow',
    location: 'Denver, CO',
    timeAgo: '28 minutes ago'
  },
  {
    id: '10',
    name: 'Thomas B.',
    action: 'purchased Kenji AI subscription',
    location: 'San Diego, CA',
    timeAgo: '32 minutes ago'
  },
  {
    id: '11',
    name: 'Jessica M.',
    action: 'set up Instagram Ads campaign',
    location: 'Portland, OR',
    timeAgo: '35 minutes ago'
  },
  {
    id: '12',
    name: 'Christopher G.',
    action: 'became a partner',
    location: 'Atlanta, GA',
    timeAgo: '40 minutes ago'
  }
];

export default function SocialProofNotification() {
  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const getRandomDelay = () => Math.floor(Math.random() * 15000) + 10000; // 10-25 seconds

    const showNotification = () => {
      if (dismissed) {
        setTimeout(showNotification, getRandomDelay());
        return;
      }

      const randomIndex = Math.floor(Math.random() * notifications.length);
      setCurrentNotification(notifications[randomIndex]);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
        setTimeout(showNotification, getRandomDelay());
      }, 8000); // Show for 8 seconds
    };

    const initialDelay = setTimeout(showNotification, getRandomDelay());

    return () => clearTimeout(initialDelay);
  }, [dismissed]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  if (!visible || !currentNotification) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 animate-slide-up"
      role="status"
      aria-live="polite"
    >
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 pr-12 max-w-sm relative">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              {currentNotification.name}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              {currentNotification.action}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>{currentNotification.location}</span>
              <span>•</span>
              <span>{currentNotification.timeAgo}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-lg overflow-hidden">
          <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 animate-progress"></div>
        </div>
      </div>
    </div>
  );
}
