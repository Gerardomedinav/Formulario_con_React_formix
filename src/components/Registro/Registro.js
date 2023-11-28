import React, { useState } from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Registro.css';

const Registro = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es obligatorio'),
    apellido: Yup.string().required('El apellido es obligatorio'),
    email: Yup.string().email('Formato de correo electrónico inválido').required('El email es obligatorio'),
    telefono: Yup.string().required('El teléfono es obligatorio'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
    confirmarPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Confirmar la contraseña es obligatorio'),
  });

  return (
    <Box p={8} bg="blue.500" w="100%" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box bg="teal.200" p={8} borderRadius="md" width={{ base: '90%', sm: '80%', md: '60%' }}>
        <Formik
          initialValues={{ nombre: '', apellido: '', email: '', telefono: '', password: '', confirmarPassword: '' }}
          onSubmit={(values, actions) => {
            console.log(values);
            setFormularioEnviado(true);
            setTimeout(() => {
              actions.resetForm();
              setFormularioEnviado(false);
              actions.setSubmitting(false);
            }, 3000);
          }}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <VStack spacing={4}>
                <Field name="nombre">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.nombre && form.touched.nombre}>
                      <FormLabel htmlFor="nombre">Nombre</FormLabel>
                      <Input {...field} id="nombre" placeholder="Ingrese su nombre" />
                      <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="apellido">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.apellido && form.touched.apellido}>
                      <FormLabel htmlFor="apellido">Apellido</FormLabel>
                      <Input {...field} id="apellido" placeholder="Ingrese su apellido" />
                      <FormErrorMessage>{form.errors.apellido}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input {...field} id="email" placeholder="Ingrese su email" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="telefono">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.telefono && form.touched.telefono}>
                      <FormLabel htmlFor="telefono">Teléfono</FormLabel>
                      <Input {...field} id="telefono" placeholder="Ingrese su teléfono" />
                      <FormErrorMessage>{form.errors.telefono}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input {...field} type="password" id="password" placeholder="Ingrese su password" />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="confirmarPassword">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.confirmarPassword && form.touched.confirmarPassword}>
                      <FormLabel htmlFor="confirmarPassword">Confirmar password</FormLabel>
                      <Input {...field} type="password" id="confirmarPassword" placeholder="Confirme su password" />
                      <FormErrorMessage>{form.errors.confirmarPassword}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {formularioEnviado && <Box color="green">¡Formulario enviado con éxito!</Box>}
                <Button
                  colorScheme="blue"
                  _hover={{ bg: 'green.500' }}
                  type="submit"
                  isLoading={props.isSubmitting}
                  isDisabled={!props.isValid}
                >
                  Registrarse
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Registro;
