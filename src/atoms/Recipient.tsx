import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Typography,
  MenuItem,
  Select,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { IRecipient } from '../interfaces/IRecipient.ts'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { Roles } from '../interfaces/IRole.ts'
import { useRecipientsContext } from '../hooks/useRecipientsContext.ts'

const Recipient: React.FC<IRecipient> = ({ id, name, email, avatar, role }) => {
  const { updateRole } = useRecipientsContext()
  const [selectedRole, setSelectedRole] = useState<Roles>(role as Roles)
  const [open, setOpen] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleRoleChange = (event: SelectChangeEvent) => {
    const newRole = event.target.value as Roles

    if (newRole === selectedRole) return

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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
        <Avatar src={avatar} alt={name} sx={{ width: 48, height: 48 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: isMobile ? '140px' : '100%',
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'gray',
              fontWeight: 300,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: isMobile ? '140px' : '100%',
            }}
          >
            {email}
          </Typography>
        </Box>
      </Box>

      <Select
        value={selectedRole}
        onChange={handleRoleChange}
        variant="outlined"
        displayEmpty
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        sx={{ minWidth: 100, maxWidth: 100, width: 100 }}
        IconComponent={KeyboardArrowDownOutlinedIcon}
      >
        {Object.values(Roles).map((roleOption) => (
          <MenuItem
            key={roleOption}
            value={roleOption}
            disabled={roleOption === selectedRole}
          >
            {roleOption}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default Recipient
