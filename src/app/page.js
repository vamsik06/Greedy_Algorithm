"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";


export default function Home() {
  const [currentRound, setCurrentRound] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isAutoProgressing, setIsAutoProgressing] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [showTopStudents, setShowTopStudents] = useState(false);
  const [showStudentFlow, setShowStudentFlow] = useState(false);
  const [showBestStudents, setShowBestStudents] = useState(false);
  const [showFinalArrow, setShowFinalArrow] = useState(false);
  const [showFinalStudents, setShowFinalStudents] = useState(false);
  const [showSelectedStudents, setShowSelectedStudents] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setCurrentRound(1);
    setIsAutoProgressing(true);
    setShowArrow(false);
    setShowTopStudents(false);
    setShowStudentFlow(false);
    setShowBestStudents(false);
    setShowFinalArrow(false);
    setShowFinalStudents(false);
    setShowSelectedStudents(false);
  };

  const handleReset = () => {
    setIsStarted(false);
    setCurrentRound(0);
    setIsAutoProgressing(false);
    setShowArrow(false);
    setShowTopStudents(false);
    setShowStudentFlow(false);
    setShowBestStudents(false);
    setShowFinalArrow(false);
    setShowFinalStudents(false);
    setShowSelectedStudents(false);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const showRound = (roundNumber) => {
    return isStarted && currentRound >= roundNumber;
  };

  useEffect(() => {
    if (isAutoProgressing && currentRound < 3) {
      const timer = setTimeout(() => {
        setCurrentRound(prev => prev + 1);
      }, 2000); // 2 second delay between rounds

      return () => clearTimeout(timer);
    } else if (currentRound === 3) {
      setIsAutoProgressing(false);
      // Show arrow after Round 3 appears
      setTimeout(() => {
        setShowArrow(true);
        // Show top students text after arrow
        setTimeout(() => {
          setShowTopStudents(true);
          // Show student flow arrows after text
          setTimeout(() => {
            setShowStudentFlow(true);
            // Show best students text after flow arrows
            setTimeout(() => {
              setShowBestStudents(true);
              // Show final arrow after best students text
              setTimeout(() => {
                setShowFinalArrow(true);
                // Show final students text after final arrow
                setTimeout(() => {
                  setShowFinalStudents(true);
                  // Show selected students after final students text
                  setTimeout(() => {
                    setShowSelectedStudents(true);
                  }, 3000);
                }, 3000);
              }, 3000);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 3000);
    }
  }, [currentRound, isAutoProgressing]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-background p-4`}>
      <div className="w-[600px] h-[700px] mx-auto space-y-4 md:space-y-8 rounded-lg p-4 md:p-8 bg-card overflow-y-auto border-4 border-black dark:border-white">
        {/* Buttons at the top */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 md:gap-4">
            <Button size="sm" className="px-4 md:px-8" onClick={handleStart} disabled={isStarted}>
              Start
            </Button>
            <Button size="sm" variant="outline" className="px-4 md:px-8" onClick={handleReset}>
              Reset
            </Button>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleDarkMode}
            className="rounded-full w-10 h-10 md:w-12 md:h-12 p-0 border-2 border-foreground/20 hover:border-foreground/40"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </Button>
        </div>

        {/* Initial message when not started */}
        {!isStarted && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Greedy Algorithm Demo</h2>
              <p className="text-base md:text-lg text-foreground mb-6">Click on the Start button to see how greedy algorithm works in interview selection process</p>
            </div>
          </div>
        )}

        {/* Animation content - only show when started */}
        {isStarted && (
          <div className="gap-2 flex flex-col items-center">
            {/* Arrow and label above Round 1 */}
            {showArrow && (
              <div className="flex flex-col items-center mb-0">
                <div className="text-xs md:text-sm font-medium text-foreground mb-0 text-center">
                  Passing 100 Students
                </div>
                <div className="text-xl md:text-2xl">↓</div>
              </div>
            )}

            {/* Round 1 */}
            {showRound(1) && (
              <div className="flex items-center gap-6">
                <div className="w-24 text-right">
                  <span className="text-xs md:text-sm font-medium text-foreground">Round 1</span>
                </div>
                <Card className="w-[300px] h-[100px] relative border-4 border-black dark:border-white bg-white dark:bg-gray-800">
                  <CardHeader className="pb-2 md:pb-3">
                    <CardTitle className="text-base md:text-lg"></CardTitle>
                  </CardHeader>
                  <CardContent>
                    {showTopStudents && (
                      <div className="text-center text-xs md:text-sm font-medium text-foreground">
                        Picking Top 25 Students
                      </div>
                    )}
                  </CardContent>
                  
                </Card>
                <div className="w-20 text-left">
                  <span className="text-xs md:text-sm font-medium text-foreground">Aptitude</span>
                </div>
              </div>
            )}

            {/* Arrow from Round 1 to Round 2 */}
            {showStudentFlow && showRound(2) && (
              <div className="flex flex-col items-center mb-0">
                <div className="text-xs md:text-sm font-medium text-foreground mb-0 text-center">
                  Passing 25 Students
                </div>
                <div className="text-xl md:text-2xl">↓</div>
              </div>
            )}

            {/* Round 2 */}
            {showRound(2) && (
              <div className="flex items-center gap-6">
                <div className="w-24 text-right">
                  <span className="text-xs md:text-sm font-medium text-foreground">Round 2</span>
                </div>
                <Card className="w-[300px] h-[100px] border-4 border-black dark:border-white bg-white dark:bg-gray-800">
                  <CardHeader className="pb-2 md:pb-3">
                    <CardTitle className="text-base md:text-lg"></CardTitle>
                  </CardHeader>
                  <CardContent>
                    {showBestStudents && (
                      <div className="text-center text-xs md:text-sm font-medium text-foreground">
                        Picking Best 5 Students
                      </div>
                    )}
                  </CardContent>
                </Card>
                <div className="w-20 text-left">
                  <span className="text-xs md:text-sm font-medium text-foreground">Technical</span>
                </div>
              </div>
            )}

            {/* Arrow from Round 2 to Round 3 */}
            {showFinalArrow && showRound(3) && (
              <div className="flex flex-col items-center mb-0">
                <div className="text-xs md:text-sm font-medium text-foreground mb-0 text-center">
                  Passing 5 Students
                </div>
                <div className="text-xl md:text-2xl">↓</div>
              </div>
            )}

            {/* Round 3 */}
            {showRound(3) && (
              <div className="flex items-center gap-6">
                <div className="w-24 text-right">
                  <span className="text-xs md:text-sm font-medium text-foreground">Round 3</span>
                </div>
                <Card className="w-[300px] h-[100px] border-4 border-black dark:border-white bg-white dark:bg-gray-800">
                  <CardHeader className="pb-2 md:pb-3">
                    <CardTitle className="text-base md:text-lg"></CardTitle>
                  </CardHeader>
                  <CardContent>
                    {showFinalStudents && (
                      <div className="text-center text-xs md:text-sm font-medium text-foreground">
                        Picking Best 3 Students
                      </div>
                    )}
                  </CardContent>
                </Card>
                <div className="w-20 text-left">
                  <span className="text-xs md:text-sm font-medium text-foreground">HR</span>
                </div>
              </div>
            )}

            {/* Selected Students below Round 3 */}
            {showSelectedStudents && showRound(3) && (
              <div className="flex flex-col items-center mt-0">
                <div className="text-xl md:text-2xl">↓</div>
                <div className="text-xs md:text-sm font-medium text-green-600 dark:text-green-400 mt-1">
                  3 final selects!
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
