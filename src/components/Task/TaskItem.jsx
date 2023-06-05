import React, { useState } from 'react';
import {
    Box,
    Button,
    Flex,
    IconButton,
    Text,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { RiCheckboxCircleLine, RiCheckboxBlankLine } from 'react-icons/ri';
import { TaskUpdate } from './TaskUpdate';

export const TaskItem = ({
    task,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteTask,
}) => {
    const textDecoration = task.done ? 'line-through' : 'none';
    const checkboxColor = useColorModeValue('green.500', 'green.400');
    const titleColor = useColorModeValue('green.700', 'green.400');
    const descriptionColor = useColorModeValue('green.500', 'green.600');
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task);

    const handleUpdateButtonClick = () => {
        if (!task.done) {
            setIsEditing(true);
        }
    };

    const handleUpdateTaskModalClose = () => {
        setIsEditing(false);
    };

    const handleUpdateTaskSubmit = () => {
        handleUpdateTask(updatedTask);
        setIsEditing(false);
    };

    const handleTaskFieldChange = (e) => {
        setUpdatedTask({
            ...updatedTask,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg={useColorModeValue('gray.100', 'gray.700')}
            borderColor={useColorModeValue('gray.300', 'gray.600')}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
        >
            <Flex alignItems="center" gap={4}>
                <IconButton
                    icon={task.done ? <RiCheckboxCircleLine /> : <RiCheckboxBlankLine />}
                    color={checkboxColor}
                    onClick={() => handleCompleteTask(task.id)}
                />
                <Box>
                    <Text
                        fontSize="lg"
                        fontWeight="medium"
                        color={titleColor}
                        textDecoration={textDecoration}
                    >
                        {task.title}
                    </Text>
                    <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color={descriptionColor}
                        textDecoration={textDecoration}
                    >
                        {task.description}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        Fecha: {task.date}
                    </Text>
                </Box>
            </Flex>
            <Flex gap={2}>
                <Button
                    onClick={handleUpdateButtonClick}
                    colorScheme="blue"
                    variant="outline"
                    size="sm"
                    isDisabled={task.done}
                >
                    Editar
                </Button>
                <IconButton
                    icon={<FaTrash />}
                    colorScheme="red"
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteTask(task.id)}
                />
            </Flex>

            <Modal isOpen={isEditing} onClose={handleUpdateTaskModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar tarea</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <TaskUpdate
                            task={updatedTask}
                            handleTaskFieldChange={handleTaskFieldChange}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={handleUpdateTaskSubmit}>
                            Actualizar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};
