import { useState } from "react";

import PasswordScreen from "./components/PasswordScreen";
import UnlockAnimation from "./components/UnlockAnimation";
import LoadingScreen from "./components/LoadingScreen";
import Welcome from "./components/Welcome";
import Gift from "./components/Gift";
import BirthdayMessage from "./components/BirthdayMessage";
import MemoryJourney from "./components/MemoryJourney";
import HeartGallery from "./components/HeartGallery";
import BirthdayCake from "./components/BirthdayCake";
import Letter from "./components/Letter";
import Reply from "./components/Reply";
import Goodbye from "./components/Goodbye";
import PageTransition from "./components/PageTransition";

function App() {
  const [currentScreen, setCurrentScreen] = useState("password");

  const goTo = (screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "password":
        return (
          <PasswordScreen
            onSuccess={() => goTo("unlock")}
          />
        );

      case "unlock":
        return (
          <UnlockAnimation
            onComplete={() => goTo("loading")}
          />
        );

      case "loading":
        return (
          <LoadingScreen
            onComplete={() => goTo("welcome")}
          />
        );

      case "welcome":
        return (
          <Welcome
            onNext={() => goTo("gift")}
          />
        );

      case "gift":
        return (
          <Gift
            onNext={() => goTo("message")}
          />
        );

      case "message":
        return (
          <BirthdayMessage
            onNext={() => goTo("memory")}
          />
        );

      case "memory":
        return (
          <MemoryJourney
            onNext={() => goTo("heart")}
          />
        );

      case "heart":
        return (
          <HeartGallery
            onNext={() => goTo("cake")}
          />
        );

      case "cake":
        return (
          <BirthdayCake
            onNext={() => goTo("letter")}
          />
        );

      case "letter":
        return (
          <Letter
            onNext={() => goTo("reply")}
          />
        );

      case "reply":
        return <Reply />;

      case "goodbye":
        return <Goodbye />;

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <PageTransition key={currentScreen}>
        {renderScreen()}
      </PageTransition>
    </main>
  );
}

export default App;