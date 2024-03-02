import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "../app/modules/welcome/Welcome";
import MainLayout from "../app/layouts/main-layout/MainLayout";
import Detail from "../app/modules/detail/Detail";
import ProgressBar from "../app/components/progress_bar/ProgressBar";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Welcome />} />
        <Route path="detail" element={<Detail />} />
        <Route path="progress" element={<ProgressBar countLimit={25} delayInMs={500} />} />
      </Route>
    </Routes>
  );
}