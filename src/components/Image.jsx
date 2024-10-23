import { useState } from "react";
import "../styles/ImageComponent.css";
import wsi from "../assets/wsi.png";

export default function Image() {
  const [zoomStyle, setZoomStyle] = useState({ display: "none" });
  const [hoverRect, setHoverRect] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    const rectWidth = width * 0.2;
    const rectHeight = height * 0.2;
    const rectLeft = e.pageX - left - rectWidth / 2;
    const rectTop = e.pageY - top - rectHeight / 2;

    setZoomStyle({
      display: "block",
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "400%",
    });

    setHoverRect({
      top: rectTop,
      left: rectLeft,
      width: rectWidth,
      height: rectHeight,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  return (
    <div className="hover-zoom-container borde-l min-h-screen rounded-lg border-yellow-500 flex flex-col">
      <div className="image-container relative self-center h-36 rounded-xl mb-1">
        <img
          src={wsi}
          alt="Zoomable"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="main-image cursor-pointer"
        />
        <div
          className="absolute border border-red-500 pointer-events-none"
          style={{
            top: `${hoverRect.top}px`,
            left: `${hoverRect.left}px`,
            width: `${hoverRect.width}px`,
            height: `${hoverRect.height}px`,
            display: zoomStyle.display,
          }}
        />
      </div>
      <div className="text-center text-sm mb-4">
        Hover the image to view zoomed image
      </div>
      <div
        className="zoomed-image w-[90%] h-80 rounded-xl self-center"
        style={{
          ...zoomStyle,
          backgroundImage: `url(${wsi})`,
        }}
      />
    </div>
  );
}
