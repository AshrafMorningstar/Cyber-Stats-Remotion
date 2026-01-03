/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

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
