import React, { useState } from "react";
import Alert from "../alert/Alert";

const DeleteAlert = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Alert isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <p>Are your sure want to delete this?</p>
          <div>
            <button>Cancel</button> <button>Yes</button>
          </div>
        </div>
      </Alert>
    </div>
  );
};

export default DeleteAlert;
