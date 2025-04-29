export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  age: number;
  rut: string;
  phone: string;
  address: string;
  role: 'admin' | 'patient';
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: User) => Promise<void>;
}

export interface Appointment {
  id: string;
  patientId: string;
  staffId: string;
  date: Date;
  status: 'scheduled' | 'completed' | 'canceled';
}

export interface MedicalConsultation {
  id: string;
  patientId: string;
  date: Date;
  notes: string;
  followUpDate?: Date;
}