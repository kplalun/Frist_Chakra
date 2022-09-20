import "./App.css";
import DisplayJohn, { JohnProfile } from "./Components/DisplayJohn";
import { Button, Input, Spinner } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div className="Botton">
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
        <Button colorScheme="cyan" size="sm">
          Button
        </Button>
        <Button colorScheme="orange" size="md">
          Button
        </Button>
      </div>

      <div className="Spinner">
        <Spinner color="red.500" size="xl" />
        <Spinner color="green.100" size="sm" />
        <Spinner color="yellow.500" size="md" />
      </div>

      <div className="input">
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
      </div>

      <DisplayJohn />
      <JohnProfile />
    </>
  );
}

export default App;
