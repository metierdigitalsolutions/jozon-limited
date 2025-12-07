
export default function ImageGallery({ images = [] }) {
  // images: [{src, alt}]
  return (
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <figure key={i} className="overflow-hidden rounded-lg bg-white shadow">
            <img
              src={img.src}
              alt={img.alt || `gallery-${i}`}
              className="w-full h-48 object-cover transition-transform transform hover:scale-105"
              loading="lazy"
            />
            {img.caption && (
              <figcaption className="p-3 text-sm text-gray-600">{img.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
