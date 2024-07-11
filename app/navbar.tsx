'use client'

import { Box, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { IoLeaf } from "react-icons/io5";
import { Link } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <HStack as="nav" justifyContent='space-between' py={4}>
      <Box>
        <IoLeaf size={32} />
      </Box>
      <HStack gap={4}>
        <Link as={NextLink} href='/' variant="nav">Therapy</Link>
        <Link as={NextLink} href='/dashboard' variant="nav">Dashboard</Link>
        <Link as={NextLink} href='/pacientes' variant="nav">Pacientes</Link>
      </HStack>
    </HStack>
  );
}
