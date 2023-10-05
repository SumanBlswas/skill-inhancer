import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Stack,
  ModalFooter,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useLoggedIn } from "../Context/useLoggedIn";
import Login from "./Login";

interface Mentor {
  id: number;
  name: string;
  description: string;
  availability: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Ravi Barma",
    description: "Experienced in web development.",
    availability: "Monday and Wednesday",
  },
  {
    id: 2,
    name: "Sarat Chaterjee",
    description: "Expert in mobile app development.",
    availability: "Tuesday and Friday",
  },
];

const MentorPage: React.FC = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentInfo, setAppointmentInfo] = useState<{
    date: string;
    time: string;
  } | null>(null);

  const [timestring, setTimeString] = useState("");

  const openModal = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMentor(null);
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    const timestamp: string = timestring;
    const dateObj = new Date(timestamp);

    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    const date = `${year}-${month}-${day}`;
    let time;
    if (String(hours).length > 1 && String(minutes).length > 1) {
      time = `${hours}:${minutes}`;
    } else if (String(hours).length > 1 && String(minutes).length == 1) {
      time = `${hours}:0${minutes}`;
    } else if (String(hours).length == 1 && String(minutes).length > 1) {
      time = `0${hours}:${minutes}`;
    } else {
      time = `0${hours}:0${minutes}`;
    }

    setAppointmentInfo({ date, time });
    setIsModalOpen(true);
  };

  const navigate = useNavigate();

  const { isLoggedIn } = useLoggedIn();
  const token = localStorage.getItem("token");

  return (
    <Box>
      {isLoggedIn || token ? (
        <Box>
          <Box
            p={{ base: 20, md: 24 }}
            pt={{ base: 5, md: 5 }}
            pb={{ base: 5, md: 5 }}
            bg={"#fff"}
          >
            <Navbar />
          </Box>
          <Box
            p={{ base: 20, md: 24 }}
            pt={{ base: 5, md: 5 }}
            pb={{ base: 5, md: 5 }}
          >
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} pt={10}>
              {mentors.map((mentor) => (
                <Box
                  key={mentor.id}
                  borderWidth="1px"
                  borderRadius="lg"
                  p={4}
                  bg={"#fff"}
                >
                  <Text fontSize="xl">{mentor.name}</Text>
                  <Text>{mentor.description}</Text>
                  <Text>Availability: {mentor.availability}</Text>
                  <Button
                    onClick={() => openModal(mentor)}
                    mt={4}
                    colorScheme="teal"
                  >
                    Schedule Appointment
                  </Button>
                </Box>
              ))}
            </SimpleGrid>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              closeOnOverlayClick={false}
            >
              <ModalOverlay />
              <ModalContent>
                {appointmentInfo ? (
                  <>
                    <ModalHeader>Appointment Scheduled</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>Your appointment has been scheduled for:</Text>
                      <Text>Date: {appointmentInfo.date}</Text>
                      <Text>Time: {appointmentInfo.time}</Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button colorScheme="teal" onClick={closeModal}>
                        Close
                      </Button>
                      <Button
                        ml={3}
                        colorScheme="teal"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </Button>
                    </ModalFooter>
                  </>
                ) : (
                  <>
                    <ModalHeader>Schedule Appointment</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      {selectedMentor && (
                        <Stack spacing={4}>
                          <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" placeholder="Your Name" />
                          </FormControl>
                          <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Your Email" />
                          </FormControl>
                          <FormControl>
                            <FormLabel>Preferred Date and Time</FormLabel>
                            <Input
                              type="datetime-local"
                              onChange={(e) => setTimeString(e.target.value)}
                            />
                          </FormControl>
                          <Button colorScheme="teal" onClick={handleSubmit}>
                            Submit
                          </Button>
                        </Stack>
                      )}
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </Box>
        </Box>
      ) : (
        <Login />
      )}
    </Box>
  );
};

export default MentorPage;
