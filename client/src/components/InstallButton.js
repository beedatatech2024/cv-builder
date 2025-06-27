import React, { useEffect, useState } from 'react';

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('App installed');
    }
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleInstallClick}
      style={{
        background: "linear-gradient(90deg, #8e2de2, #4a00e0)",
        color: "#fff",
        border: "none",
        padding: "0.8rem 1.6rem",
        borderRadius: "8px",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "transform 0.2s",
        marginLeft: "1rem"
      }}
    >
      Download App
    </button>
  );
};

export default InstallButton;
