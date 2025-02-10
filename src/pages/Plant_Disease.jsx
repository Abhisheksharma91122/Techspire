import { useState } from "react";
import { Upload } from "lucide-react";
import Navbar from "../components/Navbar";

export default function PlantDiseaseIdentifier() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (

    <div >
      <Navbar />
      <div className="flex flex-col mt-20 items-center p-8">

        <h1 className="text-2xl font-bold">Plant Disease Identifier</h1>
        <p className="text-gray-600 mb-4">Upload a photo of your plant to identify potential diseases</p>

        <div className="border border-dashed border-green-400 p-6 rounded-lg text-center w-80 flex flex-col items-center cursor-pointer">
          <label htmlFor="upload" className="cursor-pointer">
            {image ? (
              <img src={image} alt="Uploaded" className="w-full h-auto rounded-lg" />
            ) : (
              <div className="flex flex-col items-center text-green-600">
                <Upload size={40} />
                <p>Click to upload image</p>
              </div>
            )}
          </label>
          <input id="upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </div>

        <button className="mt-4 px-6 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500">
          Identify Disease
        </button>
      </div>
    </div>
  );
}
