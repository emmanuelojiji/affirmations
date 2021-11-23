import Quotes from "../AffirmationsDatabase";
import { useState } from "react";
import "./Quote.scss";
import ChristianVerse from "../ChristianVerseDatabase";
import IslamicVerse from "../IslamicVerseDatabase";
import { useEffect } from "react";
import { useRef } from "react";

const Verse = (props) => {
  const [refreshClicked, setRefreshClicked] = useState(false);
  const [verseMenuOpen, setVerseMenuOpen] = useState(false);
  const [religionSelected, setReligionSelected] = useState("christian");

  let randomChristianVerse =
    ChristianVerse[Math.floor(Math.random() * ChristianVerse.length)];

  const [currentChristianVerse, setCurrentChristianVerse] =
    useState(randomChristianVerse);

  const changeChristianVerse = () => {
    randomChristianVerse =
      ChristianVerse[Math.floor(Math.random() * ChristianVerse.length)];
    setCurrentChristianVerse(randomChristianVerse);
  };

  let randomIslamicVerse =
    IslamicVerse[Math.floor(Math.random() * IslamicVerse.length)];
  const [currentIslamicVerse, setCurrentIslamicVerse] =
    useState(randomIslamicVerse);

  const changeIslamicVerse = () => {
    randomIslamicVerse =
      IslamicVerse[Math.floor(Math.random() * IslamicVerse.length)];
    setCurrentIslamicVerse(randomIslamicVerse);
  };

  useEffect(() => {
    setCurrentChristianVerse(randomChristianVerse);
    setCurrentIslamicVerse(randomIslamicVerse);
  }, []);

  const menuRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (verseMenuOpen && !menuRef.current.contains(e.target)) {
        setVerseMenuOpen(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => document.removeEventListener("click", checkIfClickedOutside);
  }, [verseMenuOpen]);

  return (
    <>
      <div
        className="quote-container"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="quote-header">
          <h2 className="quote-heading">Your Daily Verse</h2>

          <div className="icon-menu-container">
            <i
              className="fas fa-ellipsis-v"
              style={{ transform: verseMenuOpen && "rotate(90deg)" }}
              onClick={() =>
                verseMenuOpen ? setVerseMenuOpen(false) : setVerseMenuOpen(true)
              }
            ></i>
            <div
              className="icon-menu"
              style={{ display: verseMenuOpen ? "block" : "none" }}
              ref={menuRef}
            >
              <span
                onClick={() => {
                  religionSelected == "christian"
                    ? changeChristianVerse()
                    : changeIslamicVerse();

                  verseMenuOpen
                    ? setVerseMenuOpen(false)
                    : setVerseMenuOpen(true);
                }}
              >
                New verse
              </span>
              <a
                href={
                  religionSelected == "christian"
                    ? `https://twitter.com/intent/tweet?text=${currentChristianVerse.verse}. ${currentChristianVerse.passage1}, ${currentChristianVerse.passage2} - via betterdays.app`
                    : `https://twitter.com/intent/tweet?text=${currentIslamicVerse.verse}. ${currentIslamicVerse.passage1} - via betterdays.app`
                }
              >
                Share as Tweet
              </a>
              <span
                onClick={() => {
                  setReligionSelected("christian");
                  setVerseMenuOpen(false);
                }}
                style={{display: religionSelected == 'christian' && 'none' }}
              >
                Switch to Christianity
              </span>
              <span
                onClick={() => {
                  setReligionSelected("islam"); 
                  setVerseMenuOpen(false);
                }}
                style={{display: religionSelected == 'islam' && 'none' }}
              >
                Switch to Islam
              </span>
              <span>Copy</span>
            </div>
          </div>
        </div>

        {(() => {
          if (religionSelected === "christian") {
            return (
              <div className="christian-version">
                <span className="verse">{currentChristianVerse.verse}</span>
                <span className="quote passage-1">
                  {currentChristianVerse.passage1}
                </span>
                <span className="quote passage-2">
                  {currentChristianVerse.passage2}
                </span>
              </div>
            );
          } else {
            return (
              <div className="islam-version">
                <span className="verse">{currentIslamicVerse.passage1}</span>
                <span className="quote">{currentIslamicVerse.passage2}</span>
              </div>
            );
          }
        })()}
      </div>
    </>
  );
};

export default Verse;
