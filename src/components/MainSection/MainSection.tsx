import { useState } from "react";
import styled from "styled-components";

import ListView from "./ListView";
import CustomSelect from "./CustomSelect";
import { ViewMode } from "src/types";
import { useRulings } from "src/hooks/useRulings";

const MainSection = () => {
  const [selected, setSelected] = useState<ViewMode>(ViewMode.List);
  const { rulings, updateVotes } = useRulings();

  return (
    <>
      <SectionHeader>
        <Title>Previous Rulings</Title>
        <CustomSelect selected={selected} setSelected={setSelected} />
      </SectionHeader>
      {selected === ViewMode.List && (
        <ListView rulings={rulings} updateVotes={updateVotes} />
      )}
    </>
  );
};

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 36px;
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: 300;
`;

export default MainSection;
