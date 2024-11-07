import { Plus, X, Settings, Move, Upload } from 'lucide-react';
import { ElementSettings } from './ElementSettings';
export const SettingsPanel = ({ element, onUpdate, onRemove, onUpload, onClose }) => (
    <div className="w-80 bg-white p-4 border-l">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Settings</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <ElementSettings 
        element={element} 
        onUpdate={onUpdate} 
        onRemove={onRemove} 
        onUpload={onUpload}
      />
    </div>
  );