// Import For React
import { useState } from "react";
// Import For React Icons
import { CgProfile } from "react-icons/cg";
// Import For Component
import Button from "./Button";

// Component Profile
export default function Profile() {
  // State Modal
  const [modal, setModal] = useState(false);

  // Function Toggle Modal
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {/* Button */}
      <Button
        icon={<CgProfile />}
        className="cursor-pointer p-2 m-14 rounded-2xl"
        onClick={toggleModal}
      />
      {/* Modal */}
      <div id="modalProfile" className={modal ? 'block' : 'hidden'}>
        <h2>Perfil</h2>
        <div>
          <img src="" alt="" />
          <p>Nombre: <span> Bryan Saenz</span></p>
          <p>Correo: <span> bryan@gmail.com</span></p>
        </div>
      </div>
    </>
  );
}