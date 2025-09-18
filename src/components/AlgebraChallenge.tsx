import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Check, Brain, Trophy } from "lucide-react";

interface AlgebraChallengeProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlgebraChallenge: React.FC<AlgebraChallengeProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      question: "Solve for x: 2x + 5 = 13",
      answer: "4",
      explanation: "2x = 13 - 5 = 8, so x = 4"
    },
    {
      question: "If 3x - 7 = 14, what is x?",
      answer: "7", 
      explanation: "3x = 14 + 7 = 21, so x = 7"
    },
    {
      question: "Solve: 5(x + 2) = 25",
      answer: "3",
      explanation: "5x + 10 = 25, so 5x = 15, x = 3"
    }
  ];

  const handleSubmit = () => {
    const correct = userAnswer.trim() === questions[currentQuestion].answer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const resetChallenge = () => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setScore(0);
    setShowResult(false);
    setCompleted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-background border-primary/20 animate-scale-in">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Algebra Challenge
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={resetChallenge}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-sm text-foreground-muted">
            Question {currentQuestion + 1} of {questions.length} | Score: {score}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {!completed ? (
            <>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">
                  {questions[currentQuestion].question}
                </h3>
              </div>

              {!showResult ? (
                <div className="space-y-4">
                  <Input
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Enter your answer"
                    className="text-center text-lg"
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  />
                  <Button 
                    onClick={handleSubmit} 
                    className="w-full"
                    disabled={!userAnswer.trim()}
                  >
                    Submit Answer
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className={`text-6xl ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    {isCorrect ? <Check /> : <X />}
                  </div>
                  <div className={`font-bold text-lg ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </div>
                  <div className="text-sm text-foreground-muted">
                    {questions[currentQuestion].explanation}
                  </div>
                  <Button onClick={nextQuestion} className="w-full">
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center space-y-6">
              <Trophy className="w-16 h-16 mx-auto text-primary" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Challenge Complete!</h3>
                <div className="text-xl font-semibold text-primary">
                  Final Score: {score}/{questions.length}
                </div>
                <div className="text-sm text-foreground-muted mt-2">
                  {score === questions.length ? "Perfect! You're a math star! ⭐" :
                   score >= questions.length / 2 ? "Great job! Keep practicing! 👍" :
                   "Keep learning and try again! 📚"}
                </div>
              </div>
              <Button onClick={resetChallenge} className="w-full">
                Close Challenge
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AlgebraChallenge;