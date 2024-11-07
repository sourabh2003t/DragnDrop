import { motion } from "framer-motion";
import ElementTypes from "./Types";
import TextSettings from "./TextSettings";
import ButtonSettings from "./ButtonSettings";
import ImageSettings from "./ImageSettings";
export const ElementSettings = ({ element, onUpdate, onRemove, onUpload }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-white rounded-lg shadow-lg"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Element Settings</h3>
        
        {element.type === ElementTypes.TEXT && (
          <TextSettings element={element} onUpdate={onUpdate} />
        )}
        
        {element.type === ElementTypes.BUTTON && (
          <ButtonSettings element={element} onUpdate={onUpdate} />
        )}
  
        {element.type === ElementTypes.IMAGE && (
          <ImageSettings element={element} onUpdate={onUpdate} onUpload={onUpload} />
        )}
  
        <button
          onClick={onRemove}
          className="w-full p-2 mt-4 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Remove Element
        </button>
      </div>
    </motion.div>
  );