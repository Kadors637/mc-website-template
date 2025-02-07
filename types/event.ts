export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  totalParticipants: number;
  maxParticipants: number;
  type: 'pvp' | 'survival' | 'build' | 'special';
  rewards: {
    title: string;
    amount: string;
  }[];
  status: 'upcoming' | 'ongoing' | 'completed';
} 