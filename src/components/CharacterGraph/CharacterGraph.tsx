import { useAppSelector } from "@/hooks";
import { Box } from "@mui/material";
import {
  ReactFlow,
  Node,
  Edge,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

export const HeroGraph = () => {
  const { hero, films, starships } = useAppSelector(
    (state) => state.currentHeroSlice
  );

  if (!hero) {
    return (
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        Hero not found
      </Box>
    );
  }

  const nodes: Node[] = [
    {
      id: "hero",
      data: { label: hero.name },
      position: { x: 300, y: 0 },
      style: { backgroundColor: "#FFD700", padding: 10 },
    },
    ...films.map((film, i) => ({
      id: `film-${i}`,
      data: { label: film.title },
      position: { x: 150 + i * 300, y: 200 },
    })),
    ...films.flatMap((_, i) =>
      starships.map((ship, j) => ({
        id: `ship-${i}-${j}`,
        data: { label: ship.name },
        position: { x: 150 + i * 300, y: 400 + j * 100 },
      }))
    ),
  ];

  const edges: Edge[] = [
    ...films.map((_, i) => ({
      id: `char-film-${i}`,
      source: "hero",
      target: `film-${i}`,
      type: "smoothstep",
      animated: true,
      style: { stroke: "#2196F3" },
    })),
    ...films.flatMap((_, i) =>
      starships.map((_, j) => ({
        id: `film-ship-${i}-${j}`,
        source: `film-${i}`,
        target: `ship-${i}-${j}`,
        type: "smoothstep",
        style: { stroke: "#2196F3" },
      }))
    ),
  ];

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      style={{ width: "100%", height: "100%" }}
    >
      <Background />
    </ReactFlow>
  );
};
