import { useState } from 'react';
import Button from './Button/Button';
import Modal from './Modal/Modal';

function EffectSection() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          asperiores veniam qui pariatur architecto at delectus molestias,
          beatae libero veritatis tenetur eius fugit mollitia dicta voluptatum
          sed recusandae nisi consequatur?
        </p>
      </Modal>
    </section>
  );
}

export default EffectSection;
