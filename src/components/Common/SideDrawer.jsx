import { useDisclosure } from "@mantine/hooks";
import { Burger, Drawer } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const SideDrawer = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const navigate = useNavigate();
  return (
    <div className='absolute top-6 left-10'>
      <Burger opened={opened} onClick={toggle} color='white' />
      <Drawer
        opened={opened}
        onClose={close}
        size='75%'
        withCloseButton={false}
      >
        <p
          className='text-2xl my-5 font-medium'
          onClick={() => {
            close();
            navigate("/");
          }}
        >
          Home
        </p>
        <p
          className='text-2xl my-5 font-medium'
          onClick={() => {
            close();
            navigate("/team");
          }}
        >
          Our Team
        </p>
        <p
          className='text-2xl my-5 font-medium'
          onClick={() => {
            close();
            navigate("/events");
          }}
        >
          Our Events
        </p>
        <p
          className='text-2xl my-5 font-medium'
          onClick={() => {
            close();
            document.querySelector("#footer").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Contact Us
        </p>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
