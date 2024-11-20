import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Check, X } from 'lucide-react';


const flashcards = [
    {
      category: "Event Loop y Asincronía",
      question: "¿Qué sucede cuando Node.js encuentra una operación asíncrona?",
      options: [
        "La operación bloquea el event loop hasta completarse",
        "La operación se descarta y continúa con la siguiente",
        "La operación se envía al thread pool y se registra un callback",
        "El programa se detiene hasta que la operación termine"
      ],
      correct: 2
    },
    {
      category: "Callbacks y Promesas",
      question: "¿Cuál es la principal ventaja de usar async/await sobre callbacks?",
      options: [
        "Es más rápido en ejecución",
        "Hace el código síncrono",
        "Permite mejor manejo de errores y código más legible",
        "Utiliza menos memoria"
      ],
      correct: 2
    },
    {
      category: "Event Emitters",
      question: "¿Qué método se usa para registrar un listener en un event emitter?",
      options: [
        "emitter.listen()",
        "emitter.on()",
        "emitter.addEventListener()",
        "emitter.register()"
      ],
      correct: 1
    },
    {
      category: "Streams",
      question: "¿Cuál es el propósito principal de usar streams en Node.js?",
      options: [
        "Hacer el código más rápido",
        "Manejar eficientemente grandes cantidades de datos",
        "Simplificar el código asíncrono",
        "Mejorar la seguridad de la aplicación"
      ],
      correct: 1
    },
    {
      category: "Buffers",
      question: "¿Para qué se utilizan los Buffers en Node.js?",
      options: [
        "Para almacenar datos en caché",
        "Para manejar datos binarios",
        "Para comprimir archivos",
        "Para encriptar datos"
      ],
      correct: 1
    },
    {
      category: "Módulos",
      question: "¿Cuál es la principal diferencia entre CommonJS y ES Modules?",
      options: [
        "CommonJS es más rápido",
        "ES Modules solo funciona en el navegador",
        "CommonJS es síncrono, ES Modules es asíncrono",
        "CommonJS usa más memoria"
      ],
      correct: 2
    },
    {
      category: "APIs Core",
      question: "¿Qué módulo se usa para operaciones con el sistema de archivos?",
      options: [
        "fs",
        "file",
        "system",
        "fileSystem"
      ],
      correct: 0
    },
    {
      category: "Debugging",
      question: "¿Cómo se inicia Node.js en modo debug?",
      options: [
        "node debug app.js",
        "node --debug app.js",
        "node --inspect app.js",
        "node -d app.js"
      ],
      correct: 2
    },
    {
      category: "Gestión de Procesos",
      question: "¿Cuál es el propósito principal de PM2?",
      options: [
        "Desarrollar aplicaciones",
        "Gestionar procesos en producción",
        "Debuggear código",
        "Optimizar código"
      ],
      correct: 1
    }
  ];

const FlashcardQuiz = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNext = () => {
    if (currentCard < flashcards.length - 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentCard(curr => curr + 1);
        setShowAnswer(false);
        setSelectedAnswer(null);
        setIsAnimating(false)
      }, 300)
  }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setIsAnimating(true)
      setTimeout (()=> {
        setCurrentCard(curr => curr - 1);
        setShowAnswer(false);
        setSelectedAnswer(null);
        setIsAnimating(false)
      }, 300)
    
    }
  };

  const handleAnswerSelect = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setShowAnswer(true);
      setAttempted(prev => prev + 1);
      if (index === flashcards[currentCard].correct) {
        setCorrect(prev => prev + 1);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentCard(0);
    setShowAnswer(false);
    setSelectedAnswer(null);
    setCorrect(0);
    setAttempted(0);
  };

  const getButtonStyle = (index) => {
    if (!showAnswer) return ""
    if (index === flashcards[currentCard].correct){
      return 'bg-green-100 border-green-500 text-green-700';
    }    if (selectedAnswer === index) {
      return 'bg-red-100 border-red-500 text-red-700';
    }
    return 'opacity-50';
  };


return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header con información de progreso */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Node.js Flashcards</h1>
            <div className="text-sm font-medium text-gray-500">
              Tarjeta {currentCard + 1} de {flashcards.length}
            </div>
          </div>
          
          {/* Barra de progreso */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all ease-in-out duration-500"
              style={{ width: `${((currentCard + 1) / flashcards.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Tarjeta principal */}
        <div className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
          {/* Categoría y puntuación */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
            <h2 className="text-white text-lg font-semibold">{flashcards[currentCard].category}</h2>
          </div>

          {/* Pregunta */}
          <div className="p-6">
            <p className="text-xl text-gray-800 font-medium mb-6">
              {flashcards[currentCard].question}
            </p>

            {/* Opciones */}
            <div className="space-y-3">
              {flashcards[currentCard].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showAnswer}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200
                    ${showAnswer ? getButtonStyle(index) : 'hover:bg-blue-50 hover:border-blue-500'}
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                >
                  <div className="flex items-center">
                    <span className="mr-3 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center">
                      {showAnswer && index === flashcards[currentCard].correct && (
                        <Check className="w-4 h-4 text-green-500" />
                      )}
                      {showAnswer && selectedAnswer === index && index !== flashcards[currentCard].correct && (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                    </span>
                    {option}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Controles */}
          <div className="border-t bg-gray-50 p-4">
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <button
                  onClick={handlePrevious}
                  disabled={currentCard === 0}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md
                    shadow-sm text-sm font-medium text-gray-700 bg-white
                    hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Anterior
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentCard === flashcards.length - 1}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md
                    shadow-sm text-sm font-medium text-white bg-blue-600
                    hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md
                  shadow-sm text-sm font-medium text-gray-700 bg-white
                  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reiniciar
              </button>
            </div>
          </div>
        </div>

        {/* Puntuación */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tu progreso</h3>
            <div className="flex justify-center items-center space-x-4">
              <div className="text-green-600">
                <span className="text-2xl font-bold">{correct}</span>
                <span className="text-sm block">Correctas</span>
              </div>
              <div className="text-gray-400">|</div>
              <div className="text-blue-600">
                <span className="text-2xl font-bold">{attempted}</span>
                <span className="text-sm block">Intentos</span>
              </div>
              <div className="text-gray-400">|</div>
              <div className="text-indigo-600">
                <span className="text-2xl font-bold">
                  {attempted > 0 ? Math.round((correct / attempted) * 100) : 0}%
                </span>
                <span className="text-sm block">Precisión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardQuiz;
