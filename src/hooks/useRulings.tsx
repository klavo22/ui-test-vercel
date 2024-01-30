import { useState, useEffect } from "react";
import initialData from "src/assets/data.json";
import { Ruling } from "src/types";

const useRulings = () => {
  const [rulings, setRulings] = useState<Ruling[]>(
    JSON.parse(
      localStorage.getItem("rulings") || JSON.stringify(initialData.data)
    )
  );

  useEffect(() => {
    localStorage.setItem("rulings", JSON.stringify(rulings));
  }, [rulings]);

  const updateVotes = (
    rulingName: string,
    voteType: "positive" | "negative"
  ) => {
    const updatedData = rulings.map((ruling) => {
      if (ruling.name === rulingName) {
        return {
          ...ruling,
          votes: {
            ...ruling.votes,
            [voteType]: ruling.votes[voteType] + 1,
          },
        };
      }
      return ruling;
    });
    setRulings(updatedData);
  };

  return { rulings, updateVotes };
};

export { useRulings };
