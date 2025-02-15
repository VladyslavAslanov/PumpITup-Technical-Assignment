import React, { useState, useEffect, useMemo } from 'react'
import {
  Avatar,
  Box,
  Typography,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { IRecipient } from '../interfaces/IRecipient.ts'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { Roles } from '../interfaces/IRole.ts'
import { useRecipients } from '../hooks/useRecipients.ts'

const Recipient: React.FC<IRecipient> = ({ id, name, email, avatar, role }) => {
  const { recipients, updateRole } = useRecipients()
  const [selectedRole, setSelectedRole] = useState<Roles>(role as Roles)

  const adminExists = useMemo(
    () => recipients.some((recipient) => recipient.role === Roles.Admin),
    [recipients],
  )

  useEffect(() => {
    if (selectedRole === Roles.Admin && !adminExists) {
      updateRole(id ?? '', selectedRole)
    }
  }, [selectedRole, adminExists, id, updateRole])

  const handleRoleChange = (event: SelectChangeEvent) => {
    const newRole = event.target.value as Roles

    if (newRole === Roles.Admin && adminExists) {
      alert('Only one admin is allowed.')
      return
    }

    setSelectedRole(newRole)
    updateRole(id ?? '', newRole)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src={avatar} alt={name} sx={{ width: 48, height: 48 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>{name}</Typography>
          <Typography sx={{ fontSize: '14px', color: 'gray', fontWeight: 300 }}>{email}</Typography>
        </Box>
      </Box>

      <Select
        value={selectedRole}
        onChange={handleRoleChange}
        variant="outlined"
        displayEmpty
        sx={{ width: 140 }}
        IconComponent={KeyboardArrowDownOutlinedIcon}
      >
        {Object.values(Roles).map((roleOption) => (
          <MenuItem
            key={roleOption}
            value={roleOption}
            disabled={roleOption === Roles.Admin && adminExists}
          >
            {roleOption}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default Recipient
