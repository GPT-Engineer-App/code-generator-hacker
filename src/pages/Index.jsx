import React, { useState } from "react";
import { Box, Heading, Textarea, Button, Code, useClipboard, VStack, HStack, Icon, useToast } from "@chakra-ui/react";
import { FaRegCopy, FaRegCheckCircle } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { onCopy, hasCopied } = useClipboard(output);
  const toast = useToast();

  const generateCode = () => {
    // This is a placeholder for an actual code generation logic.
    // Replace it with any logic you want.
    const generatedCode = `
// Generated Hack Code Based on User Input
// DISCLAIMER: This is for educational purposes only!

function hack(input) {
  console.log('Pretending to hack using the input:', input);
  // ... your code generation logic goes here ...
}

hack('${input.replace(/'/g, "\\'")}');
`;
    setOutput(generatedCode);
  };

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Code copied!",
      description: "You've copied the generated code.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Heading as="h1">Hack Code Generator</Heading>
        <Textarea placeholder="Enter some text to inspire the hack code..." value={input} onChange={(e) => setInput(e.target.value)} />
        <Button colorScheme="blue" onClick={generateCode}>
          Generate Code
        </Button>
        {output && (
          <Box w="100%">
            <HStack justifyContent="space-between" mb={2}>
              <Heading as="h3" size="md">
                Generated Code:
              </Heading>
              <Button onClick={handleCopy} size="sm" leftIcon={<Icon as={hasCopied ? FaRegCheckCircle : FaRegCopy} />}>
                {hasCopied ? "Copied" : "Copy Code"}
              </Button>
            </HStack>
            <Code w="100%" p={3} children={output} overflowX="auto" />
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
