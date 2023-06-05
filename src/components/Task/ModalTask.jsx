import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';

export const ModalTask = ({ handleNewTask }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleNewTask(title, description, date);
        onClose();
        setTitle('');
        setDescription('');
        setDate('');
    };

    return (
        <>
            <Button colorScheme="blue" onClick={onOpen}>
                Nueva tarea
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Agregar nueva tarea</ModalHeader>
                    <ModalCloseButton />
                    <form onSubmit={handleFormSubmit}>
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Título</FormLabel>
                                <Input
                                    placeholder="Ingrese el título"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Descripción</FormLabel>
                                <Input
                                    as="textarea"
                                    placeholder="Ingrese la descripción"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    resize="none"
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Fecha</FormLabel>
                                <Input
                                    type="date"
                                    placeholder="Seleccione una fecha"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button type="submit" colorScheme="blue" mr={3}>
                                Guardar
                            </Button>
                            <Button onClick={onClose}>Cancelar</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
};
