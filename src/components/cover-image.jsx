/**
 * Este componente renderiza una imagen de portada con una sombra segun la imagen
 * @param {props.src} param0 Url o dirección de la imagen
 * @returns Componente Imagen
 */
export function CoverImageShadow({ url }) {
  return (
    <div className="relative">
      <img
        src={url}
        alt="Cover image"
        className="w-32 h-32 rounded-3xl object-cover filter blur-lg"
      />
      <img
        src={url}
        alt="Cover image"
        className="w-32 h-32 rounded-3xl object-cover absolute top-0 left-0"
      />
    </div>
  );
}

/**
 * Componente que renderiza una imagen de portada
 * @param {props.src} param0 Url o dirección de la imagen
 * @returns Componente Imagen
 */
export function Cover({ url }) {
  return (
    <img
      src={url}
      alt="Cover image"
      className="w-36 h-36 rounded-3xl object-cover"
    />
  );
}
