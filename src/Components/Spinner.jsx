import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import styled from "styled-components";

export default function Spinner() {
  return (
    <div>
      <PacmanLoader size={50} color="#218561" />
    </div>
  );
}
