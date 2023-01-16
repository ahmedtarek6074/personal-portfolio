import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react';




function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }



  return (
    
      <Component {...pageProps} />
    
    
  );
}

export default App;
