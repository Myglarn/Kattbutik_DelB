import { useState } from "react";
import { FALLBACK_IMAGE, getImageCandidates } from "../api/catApi.js";

export default function BreedImage({ cat, alt = "", loading, className, style }) {
  const candidates = getImageCandidates(cat);
  const [idx, setIdx] = useState(0);
  
  const [prevId, setPrevId] = useState(cat?.id);
  if (cat?.id !== prevId) {
    setPrevId(cat?.id);
    setIdx(0);
  }

  const src = candidates[idx] ?? FALLBACK_IMAGE;

  function handleError() {
    if (idx < candidates.length) {
      setIdx(idx + 1);
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      style={style}
      onError={handleError}
    />
  );
}
