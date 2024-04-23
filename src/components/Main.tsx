import React, { useState } from 'react';
import useSpeechToText from '../hooks/useSpeechToText';
import SpeechRecognition from 'react-speech-recognition';

const Main = () => {
  const { transcript, resetTranscript, startListening } = useSpeechToText();
  const [isListening, setIsListening] = useState(false);

  const toggleListening = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript(); // Reinicia el transcript cada vez que inicies el reconocimiento de voz
      startListening();
    }
    setIsListening(!isListening);
  };

  return (
    <div>
      <button onClick={toggleListening}>{isListening ? 'Detener' : 'Iniciar'}</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Main;
