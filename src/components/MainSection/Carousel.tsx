import { Ruling, UpdateVotesFunction } from "src/types";
import styled from "styled-components";
import RulingCard from "./RulingCard";

interface CarouselProps {
  rulings: Ruling[];
  updateVotes: UpdateVotesFunction;
}

const Carousel: React.FC<CarouselProps> = ({ rulings, updateVotes }) => {
  return (
    <CarouselContainer>
      {rulings.map((ruling, index) => (
        <RulingCard key={index} ruling={ruling} updateVotes={updateVotes} />
      ))}
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  height: 300px;
  overflow: auto;

  @media (min-width: 550px) {
    display: none;
  }
`;

export default Carousel;
