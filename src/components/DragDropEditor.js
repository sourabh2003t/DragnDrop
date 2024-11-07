import { useRef, useState } from "react";
import { Toolbar } from "./Toolbar"
import { SettingsPanel } from "./SettingsPanel"
import ElementTypes from "./Types"
import Canvas from "./Canvas";


const DragDropEditor = () => {
    const [elements, setElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
  
    const addElement = (type) => {
      const newElement = {
        id: Date.now(),
        type,
        content: type === ElementTypes.TEXT ? 'New Text' : 
                 type === ElementTypes.BUTTON ? 'Button' : '/api/placeholder/200/200',
        style: {
          x: 0,
          y: 0,
          width: type === ElementTypes.IMAGE ? '200px' : 'auto',
          height: type === ElementTypes.IMAGE ? '200px' : 'auto',
          fontSize: '16px',
          color: '#000000',
          backgroundColor: type === ElementTypes.BUTTON ? '#4F46E5' : 'transparent',
        }
      };
      setElements([...elements, newElement]);
    };
  
    const updateElement = (id, updates) => {
      setElements(elements.map(el => 
        el.id === id ? { ...el, ...updates } : el
      ));
    };
  
    const removeElement = (id) => {
      setElements(elements.filter(el => el.id !== id));
      setSelectedElement(null);
    };
  
    const handleImageUpload = (elementId) => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
        fileInputRef.current.setAttribute('data-element-id', elementId);
      }
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const elementId = parseInt(event.target.getAttribute('data-element-id'));
      
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          updateElement(elementId, { content: e.target.result });
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className="flex h-screen bg-gray-50">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
  
        <Toolbar onAddElement={addElement} />
  
        <Canvas 
          elements={elements}
          selectedElement={selectedElement}
          isDragging={isDragging}
          onElementSelect={setSelectedElement}
          onElementUpdate={setIsDragging}
        />
  
        {selectedElement && (
          <SettingsPanel
            element={selectedElement}
            onUpdate={(updates) => updateElement(selectedElement.id, updates)}
            onRemove={() => removeElement(selectedElement.id)}
            onUpload={() => handleImageUpload(selectedElement.id)}
            onClose={() => setSelectedElement(null)}
          />
        )}
      </div>
    );
  };
  
  export default DragDropEditor;