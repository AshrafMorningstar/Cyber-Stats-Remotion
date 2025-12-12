import { Composition } from "remotion";
import { StatsComposition } from "./components/StatsComposition";
import React from 'react';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="CyberStats"
        component={StatsComposition}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          username: "AshrafMorningstar",
        }}
      />
    </>
  );
};
