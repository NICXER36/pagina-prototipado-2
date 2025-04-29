# Medical Management System

## Overview
The Medical Management System is a web application designed to facilitate the management of medical records, appointments, and user roles within a healthcare environment. The application supports two types of users: administrators and patients. Administrators have the ability to manage users and appointments, while patients can access their medical history and schedule appointments.

## Features
- **User Authentication**: Secure login for both administrators and patients.
- **Role Management**: Different functionalities based on user roles (admin or patient).
- **Patient Module**: Register, edit, search/filter patients, and view medical history.
- **Staff Module**: Register and edit staff data, assign roles and permissions.
- **Appointment Scheduling Module**: Schedule, edit, and cancel appointments, view daily/weekly agenda, and receive notifications.
- **Medical Consultations Module**: Register consultations, follow-ups, and view patient evolution.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/medical-management-system.git
   ```
2. Navigate to the project directory:
   ```
   cd medical-management-system
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the application.

## Initial Credentials
- **Administrator**: 
  - Username: `nicolas`
  - Password: `Nico123456`
  
- **Patient**: 
  - Username: `pacientenico`
  - Password: `Paciente123`

## Project Structure
```
medical-management-system
├── public
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── LoginForm.tsx
│   │   ├── Sidebar.tsx
│   │   ├── AdminDashboard
│   │   │   ├── PatientModule.tsx
│   │   │   ├── StaffModule.tsx
│   │   │   ├── AppointmentModule.tsx
│   │   │   └── MedicalConsultationsModule.tsx
│   │   └── PatientDashboard
│   │       └── PatientModule.tsx
│   ├── context
│   │   └── AuthContext.tsx
│   ├── hooks
│   │   └── useAuth.ts
│   ├── pages
│   │   ├── LoginPage.tsx
│   │   ├── AdminPage.tsx
│   │   └── PatientPage.tsx
│   ├── services
│   │   ├── api.ts
│   │   └── authService.ts
│   ├── styles
│   │   ├── global.css
│   │   └── components
│   │       ├── LoginForm.css
│   │       ├── Sidebar.css
│   │       └── Dashboard.css
│   ├── utils
│   │   └── validators.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.