import { Plus, X, Settings, Move, Upload } from 'lucide-react';
const ImageElement = ({ content, style, onUpload }) => (
    <div 
      className="relative group cursor-pointer"
      style={{ width: style.width, height: style.height }}
    >
      <img 
        src={content}
        alt="Uploaded content"
        className="w-full h-full object-cover rounded"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
        <Upload className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-200" />
      </div>
    </div>
  );

export default ImageElement