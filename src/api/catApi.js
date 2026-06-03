const BREEDS_URL = "https://api.thecatapi.com/v1/breeds?limit=30";

export async function fetchBreeds() {
  const response = await fetch(BREEDS_URL);
  if (!response.ok) {
    throw new Error(`Cat API responded with ${response.status}`);
  }
  return response.json();
}

export function buildImageUrl(cat) {
  return getImageCandidates(cat)[0] ?? "";
}

export function getImageCandidates(cat) {
  const out = [];
  if (cat?.image?.url) out.push(cat.image.url);
  const refId = cat?.reference_image_id;
  if (refId) {
    const base = `https://cdn2.thecatapi.com/images/${refId}`;
    for (const ext of ["jpg", "png", "jpeg"]) {
      const candidate = `${base}.${ext}`;
      if (!out.includes(candidate)) out.push(candidate);
    }
  }
  return out;
}

export const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
       <rect width='400' height='300' fill='#1f2933'/>
       <text x='50%' y='50%' fill='#faf6ef' font-family='serif' font-size='28'
             text-anchor='middle' dominant-baseline='middle'>No photo</text>
     </svg>`
  );
