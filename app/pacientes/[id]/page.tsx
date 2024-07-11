'use client'

import { Heading, Link, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
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
        João Romão
      </Heading>
      <Text mt={4}>Aqui você pode visualizar seus pacientes</Text>
    </main>
  );
}
