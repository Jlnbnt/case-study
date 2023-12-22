import { Dispatch, SetStateAction } from 'react'

import { FlexBox } from '@/components/shared/containers/FlexBox'
import { colors } from '@/styles/theme/options/colors.option'

import { Close, Euro, LocationOn } from '@mui/icons-material'
import {
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'

interface CategoryFiltersBoxProps {
  setSearchTerms: Dispatch<SetStateAction<string>>
  setPriceRange: Dispatch<SetStateAction<string>>
  options: number[]
  searchTerms: string
  priceRange: string
}
export const CategoryFiltersBox = ({
  setSearchTerms,
  setPriceRange,
  options,
  searchTerms,
  priceRange,
}: CategoryFiltersBoxProps) => {
  return (
    <FlexBox
      column
      centered
      gap={3}
      sx={{ background: '#E5E5E580', width: 362, height: 220 }}
    >
      <TextField
        placeholder="Rechercher un lieu"
        sx={{ width: 281, background: colors.white }}
        onChange={(e) => setSearchTerms(e.target.value)}
        value={searchTerms}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={() => setSearchTerms('')}>
              <IconButton>
                <Close fontSize="small" sx={{ color: '#ADADAD' }} />
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <LocationOn fontSize="small" sx={{ color: '#ADADAD' }} />
            </InputAdornment>
          ),
        }}
      />

      <FormControl sx={{ width: 281, background: colors.white }}>
        <Select
          sx={{ minWidth: '200px' }}
          placeholder="Prix"
          displayEmpty
          value={priceRange}
          onChange={(e) => setPriceRange(String(e.target.value))}
          renderValue={() =>
            priceRange ? (
              `< ${priceRange} €`
            ) : (
              <Typography sx={{ color: '#A3A3A3' }}>Prix</Typography>
            )
          }
          startAdornment={
            <InputAdornment position="start">
              <Euro fontSize="small" sx={{ color: '#ADADAD' }} />
            </InputAdornment>
          }
        >
          <MenuItem value="">Tous</MenuItem>
          {options.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                {`< ${option}€`}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </FlexBox>
  )
}
