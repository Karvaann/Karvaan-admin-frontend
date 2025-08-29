import React from "react"
import { useLocation } from "react-router-dom";
import versionConfig from "../data/version.json";

function VersionTag() {
  const location = useLocation();
  const version = versionConfig[location.pathname];

  if (import.meta.env.MODE !== "development" || !version) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        background: "#222",
        color: "#fff",
        padding: "4px 10px",
        borderRadius: "6px",
        fontSize: "12px",
        opacity: 0.8,
      }}
    >
      {version}
    </div>
  );
}

export default VersionTag;
