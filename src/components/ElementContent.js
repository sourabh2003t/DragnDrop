import ImageElement from "./ImageElement";
import ElementTypes from "./Types"
const ElementContent = ({ element, onUpload }) => {
    switch (element.type) {
      case ElementTypes.TEXT:
        return <p style={{ fontSize: element.style.fontSize }}>{element.content}</p>;
      case ElementTypes.BUTTON:
        return (
          <button 
            className="px-4 py-2 rounded text-white"
            style={{ backgroundColor: element.style.backgroundColor }}
          >
            {element.content}
          </button>
        );
      case ElementTypes.IMAGE:
        return <ImageElement content={element.content} style={element.style} onUpload={onUpload} />;
      default:
        return null;
    }
  };

  export default ElementContent