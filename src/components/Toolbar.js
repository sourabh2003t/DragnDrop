import ElementTypes from "./Types";
import { Plus, X, Settings, Move, Upload } from 'lucide-react';

export const Toolbar = ({ onAddElement }) => (
    <div className="w-64 bg-white p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Elements</h2>
      <div className="space-y-2">
        <button
          onClick={() => onAddElement(ElementTypes.TEXT)}
          className="w-full p-2 text-left hover:bg-gray-100 rounded flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Text</span>
        </button>
        <button
          onClick={() => onAddElement(ElementTypes.BUTTON)}
          className="w-full p-2 text-left hover:bg-gray-100 rounded flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Button</span>
        </button>
        <button
          onClick={() => onAddElement(ElementTypes.IMAGE)}
          className="w-full p-2 text-left hover:bg-gray-100 rounded flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Image</span>
        </button>
      </div>
    </div>
  );
  