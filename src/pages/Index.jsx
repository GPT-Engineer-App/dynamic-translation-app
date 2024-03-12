import React, { useState } from "react";
import { Box, VStack, HStack, Text, Heading, Button, Image, Divider, List, ListItem } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

// Simulated list of users (normally you would fetch this data)
const users = [
  { id: 1, name: "User One" },
  { id: 2, name: "User Two" },
  { id: 3, name: "User Three" },
  // ... more users
];

// Simulated posts by user ID (normally you would fetch this data)
const postsByUserId = {
  5: [
    { id: "a1", title: "Post Title 1", content: "Post content 1" },
    { id: "a2", title: "Post Title 2", content: "Post content 2" },
    // ... more posts
  ],
  // ... posts for other users
};

const Index = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  // Simulate navigating to /translation/:id
  const handleUserClick = (id) => {
    setSelectedUserId(id);
    setUserPosts(postsByUserId[id] || []);
  };

  // Simulate navigating to /translation
  const handleLoadAllPosts = () => {
    setSelectedUserId(null);
    setUserPosts([]);
  };

  return (
    <HStack spacing="24px" p={4}>
      <Box w="200px">
        <Heading size="md" mb={4}>
          Users
        </Heading>
        <List spacing={3}>
          {users.map((user) => (
            <ListItem key={user.id}>
              <Button onClick={() => handleUserClick(user.id)} leftIcon={<FaUser />} justifyContent="flex-start" variant="ghost">
                {user.name}
              </Button>
            </ListItem>
          ))}
        </List>
        <Divider my={4} />
        <Button onClick={handleLoadAllPosts}>Load All Posts</Button>
      </Box>
      <VStack align="stretch" w="full">
        <Heading size="lg">Posts {selectedUserId && `for User ${selectedUserId}`}</Heading>
        {userPosts.length === 0 && <Text>No posts found.</Text>}
        {userPosts.map((post) => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
          </Box>
        ))}
      </VStack>
    </HStack>
  );
};

export default Index;
