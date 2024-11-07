import { Plus, X, Settings, Move, Upload } from 'lucide-react';
const ImageSettings = ({ element, onUpdate, onUpload }) => (
    <>
      <div>
        <label className="block text-sm font-medium mb-1">Size</label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs text-gray-500">Width</label>
            <input
              type="number"
              value={parseInt(element.style.width)}
              onChange={(e) => onUpdate({ 
                style: { ...element.style, width: `${e.target.value}px` }
              })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500">Height</label>
            <input
              type="number"
              value={parseInt(element.style.height)}
              onChange={(e) => onUpdate({ 
                style: { ...element.style, height: `${e.target.value}px` }
              })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
      <button
        onClick={onUpload}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center gap-2"
      >
        <Upload className="w-4 h-4" />
        Upload Image
      </button>
    </>
  );

export default ImageSettings