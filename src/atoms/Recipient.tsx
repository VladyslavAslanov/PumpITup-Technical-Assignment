import React, { useState, useEffect } from 'react'
import { Avatar, Box, Typography, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { IRecipient } from '../interfaces/IRecipient.ts'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { Roles } from '../interfaces/IRole.ts'


let hasOwner = false

const Recipient: React.FC<IRecipient> = ({ name, email, avatar }) => {
  const [selectedRole, setSelectedRole] = useState<Roles>(Roles.Viewer)

  useEffect(() => {
    if (selectedRole === Roles.Admin) {
      hasOwner = true
    }
    return () => {
      if (selectedRole === Roles.Admin) {
        hasOwner = false
      }
    }
  }, [selectedRole])

  const handleRoleChange = (event: SelectChangeEvent) => {
    const newRole = event.target.value as Roles

    if (newRole === Roles.Admin && hasOwner) {
      alert('Only one owner is allowed.')
      return
    }

    if (selectedRole === Roles.Admin) {
      hasOwner = false
    }

    setSelectedRole(newRole)
  }

  return (
    <Box className="flex justify-between items-center gap-4">
      <Box className="flex items-center gap-2">
        <Avatar src={avatar} alt={name} />
        <Box className="flex flex-col">
          <Typography className="font-medium">{name}</Typography>
          <Typography className="text-sm text-gray-500">{email}</Typography>
        </Box>
      </Box>

      <Select
        value={selectedRole}
        onChange={handleRoleChange}
        variant="outlined"
        displayEmpty
        className="w-36"
        IconComponent={KeyboardArrowDownOutlinedIcon}
      >
        {Object.values(Roles).map((role) => (
          <MenuItem key={role} value={role} disabled={role === Roles.Admin && hasOwner}>
            {role}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default Recipient
