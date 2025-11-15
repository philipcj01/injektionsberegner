# 🐾 Injektionsberegner (Veterinary Injection Calculator)

[![React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-www.dosisberegner.dk-brightgreen.svg)](https://www.dosisberegner.dk)

A mobile-friendly web application designed for veterinary clinics to quickly calculate injection dosages for dogs and cats. Perfect for on-the-go use when you're away from your primary workstation.

**🌐 Live Demo: [www.dosisberegner.dk](https://www.dosisberegner.dk)**

## 🚀 Features

- **Animal-Specific Calculations**: Supports both dogs and cats with tailored medicine options
- **Weight-Based Dosage**: Accurate dosage calculations based on animal weight
- **Alternative Medicine Options**: Special alternative medicine calculations for dogs
- **Mobile-Optimized**: Responsive design perfect for mobile devices
- **Real-Time Results**: Instant calculation updates as you input data
- **Clean Interface**: Simple, intuitive design for quick use in clinical settings

## 📱 Screenshots

> *Add screenshots of your application here to showcase the UI*

## 🛠️ Built With

- **React** (19.2.0) - Frontend framework
- **JavaScript** - Programming language
- **CSS3** - Styling and responsive design
- **Axios** - HTTP client for API requests

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/injektionsberegner.git
   cd injektionsberegner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📖 Usage

1. **Select Animal Type**: Choose between dog (hund) or cat (kat)
2. **Enter Weight**: Input the animal's weight in kilograms
3. **Alternative Options**: For dogs, optionally select alternative medicine calculations
4. **View Results**: The application will display calculated dosages for available medicines

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── animal-selector.js
│   ├── weight-input.js
│   ├── alternative-checkbox.js
│   └── results-list.js
├── hooks/              # Custom React hooks
│   ├── use-dosage-results.js
│   └── use-medicine-options.js
├── tools/              # Utility functions
│   ├── calculate-injection.js
│   └── retrieve-medicine-options.js
└── tests/              # Test files
    └── App.test.js
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder, ready for deployment to any static hosting service.

### Deploy Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` branch
- **Firebase Hosting**: Use Firebase CLI

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run eject` | Ejects from Create React App (one-way operation) |

## 📱 Mobile Usage

This application is optimized for mobile devices, making it perfect for:
- Quick calculations during veterinary procedures
- Field work and house calls
- Emergency situations where desktop access isn't available
- Backup calculator when primary systems are unavailable

## ⚠️ Disclaimer

This application is designed to assist veterinary professionals with dosage calculations. Always verify calculations and consult with qualified veterinarians before administering any medication to animals.

## 📧 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/injektionsberegner/issues) on GitHub.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ for veterinary professionals</p>
  <p>🐕 🐱</p>
</div>
