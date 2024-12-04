import StatusBadge from "@/app/components/StatusBadge";
import prisma from "@/prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="2" my="2" align="center">
        <StatusBadge status={issue.status} />
        <Text>{issue.createdAt.toLocaleDateString()}</Text>
      </Flex>
      <Box maxWidth='450px'>
        <Card size="2">{issue.description}</Card>
      </Box>
    </div>
  );
};

export default IssueDetailsPage;
