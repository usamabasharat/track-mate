import { Badge } from '@radix-ui/themes'
import React from 'react'
import { Status } from '@prisma/client';

const statusMap: Record<
  Status, { label: string, color: 'red' | 'violet' | 'green' }> = {
    OPEN: { label: 'Open', color: 'red' },
    IN_PROGRESS: { label: 'In Progress', color: 'violet' },
    DONE: { label: 'Closed', color: 'green' }
  };

const StatusBadge = ({ status }: {status: Status}) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  )
}

export default StatusBadge
