'use client'

import { Box, Button, Heading, HStack, Input, Link, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import NextLink from 'next/link'

const patient = {
  id: '1',
  name: 'João Romão',
  email: 'joao.romao@gmail.com',
  phone: '+55 11 99999-8888',
  value: 'R$ 120',
  baseSchedule: 'Terça-feira, das 15h às 15h30'
}

export default function Home() {
  return (
    <main>
      <Heading size="lg">
        Pacientes
      </Heading>
      <Text mt={4}>Aqui você pode visualizar seus pacientes</Text>
      <Box mt={8}>
        <HStack justifyContent="space-between">
          <Input bg="white" w="220px" placeholder="Buscar paciente..." />
          <Button variant="outline" colorScheme="green">Criar paciente</Button>
        </HStack>
        <TableContainer mt={4}>
          <Table variant='simple'>
            <Thead>
              <Tr>
                {["Nome", "Telefone", "Email", "Valor / Sessão", "Horário"].map(item =>
                  <Th key={item}>{item}</Th>
                )}
              </Tr>
            </Thead>
            <Tbody>
              {Array.from({ length: 10 }, (_, item) => (
                <Tr key={item}>
                  <Td>
                    <Link as={NextLink} href={`/pacientes/${patient.id}`}>{patient.name}</Link>
                  </Td>
                  <Td>{patient.phone}</Td>
                  <Td>{patient.email}</Td>
                  <Td>{patient.value}</Td>
                  <Td>{patient.baseSchedule}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </main>
  );
}
