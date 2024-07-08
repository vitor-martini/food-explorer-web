import { Container, CardSession, CardContainer, NavButton } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState, useRef } from "react";
import { Card } from "../Card";

export function CategorySession({ categoryData }) {
  const [dishes, setDishes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [centerItems, setCenterItems] = useState(false);
  const cardSessionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`auth-dishes?category=${categoryData.name}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [categoryData.name]);

  useEffect(() => {
    function checkScrollable() {
      if (cardSessionRef.current) {
        const containerWidth = cardSessionRef.current.offsetWidth;
        const contentWidth = cardSessionRef.current.scrollWidth;
        setIsScrollable(contentWidth > containerWidth);
        setCenterItems(contentWidth <= containerWidth);
      }
    }

    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, [dishes]);

  function getCardWidth() {
    return cardSessionRef.current ? cardSessionRef.current.firstChild.offsetWidth + 24 : 0;
  }

  function getMaxScrollIndex() {
    const cardWidth = getCardWidth();
    const containerWidth = cardSessionRef.current.offsetWidth;
    return Math.ceil(cardSessionRef.current.scrollWidth / cardWidth) - Math.floor(containerWidth / cardWidth);
  }

  function scrollToIndex(index) {
    if (cardSessionRef.current) {
      const cardWidth = getCardWidth();
      const newIndex = Math.min(index, getMaxScrollIndex());
      cardSessionRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
      setCurrentIndex(newIndex);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  }

  function handleNext() {
    if (currentIndex < getMaxScrollIndex()) {
      scrollToIndex(currentIndex + 1);
    }
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  }

  return (
    <Container>
      <h1>{categoryData.name}</h1>
      <CardSession
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <NavButton 
          direction="left" 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
        >
          {"<"}
        </NavButton>
        <CardContainer 
          ref={cardSessionRef} 
          $centerItems={centerItems}
        >
          {dishes.length > 0 && dishes.map(dish => (
            <Card 
              key={dish.id} 
              dishData={dish} 
            />
          ))}
        </CardContainer>
        <NavButton 
          direction="right" 
          onClick={handleNext} 
          disabled={!isScrollable || currentIndex === getMaxScrollIndex()}
        >
          {">"}
        </NavButton>
      </CardSession>
    </Container>
  );
}
