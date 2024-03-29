import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArrowDown from "src/assets/img/arrowDown.svg?react";
import { ViewMode } from "src/types";

const options = [ViewMode.List, ViewMode.Grid];

interface CustomSelectProps {
  selected: ViewMode;
  setSelected: (arg0: ViewMode) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  selected,
  setSelected,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (option: ViewMode) => {
    setSelected(option);
    setOpen(false);
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handler);

    return () => {
      window.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <SelectWrapper ref={ref}>
      <Option $selected onClick={() => setOpen(!open)}>
        {selected}
        <ArrowWrapper>
          <ArrowDown />
        </ArrowWrapper>
      </Option>
      {open &&
        options.map((option, index) => (
          <Option
            key={index}
            id={option}
            onClick={() => handleClick(option)}
            $index={index}
          >
            {option}
          </Option>
        ))}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;

  width: 131px;
  height: 28px;

  cursor: pointer;
  z-index: 200;

  @media (max-width: 550px) {
    display: none;
  }

  @media (min-width: 920px) {
    width: 173px;
    height: 36px;
  }
`;

interface OptionProps {
  $index?: number;
  $selected?: boolean;
}

const Option = styled.div<OptionProps>`
  position: absolute;
  top: ${({ $index }) => ($index !== undefined ? ($index + 1) * 36 : 0)}px;
  right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  border: 2px solid black;

  background-color: white;

  text-align: center;

  &:hover {
    filter: ${({ $selected }) => ($selected ? "1" : "brightness(0.85)")};
  }

  @media (max-width: 920px) {
    top: ${({ $index }) => ($index !== undefined ? ($index + 1) * 28 : 0)}px;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-150%);

  width: 12px;
  height: 7px;
`;

export default CustomSelect;
