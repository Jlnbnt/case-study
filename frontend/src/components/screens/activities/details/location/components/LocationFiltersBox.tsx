import { Dispatch, SetStateAction, SyntheticEvent } from 'react'

import { translateCategory } from '@/components/screens/categories/list/helpers/translate-category.helper'
import { FlexBox } from '@/components/shared/containers/FlexBox'
import { colors } from '@/styles/theme/options/colors.option'

import { Euro } from '@mui/icons-material'
import {
  Autocomplete,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'

import { CategoryAutocomplete } from '../../../list/ListLocationActivitiesScreen'

interface LocationFiltersBoxProps {
  activityOptions: CategoryAutocomplete[]
  setActivityName: Dispatch<SetStateAction<CategoryAutocomplete>>
  activityName: CategoryAutocomplete
  priceRangeOptions: number[]
  setPriceRange: Dispatch<SetStateAction<string>>
  priceRange: string
}
export const LocationFiltersBox = ({
  setPriceRange,
  priceRangeOptions,
  activityName,
  activityOptions,
  priceRange,
  setActivityName,
}: LocationFiltersBoxProps) => {
  return (
    <FlexBox
      column
      centered
      gap={3}
      sx={{ background: '#E5E5E580', width: 362, height: 220 }}
    >
      <FormControl sx={{ width: 281, background: colors.white }}>
        <Autocomplete
          placeholder="Prix"
          noOptionsText="Aucun résultat."
          clearText=""
          openText=""
          options={activityOptions}
          value={
            activityName
              ? activityOptions.find((option) => {
                  return activityName._id === option._id
                }) ?? null
              : null
          }
          getOptionLabel={(option) => translateCategory(option.name)}
          onChange={(e: SyntheticEvent<Element, Event>, newValue) => {
            setActivityName(
              newValue
                ? { _id: newValue._id, name: newValue._id }
                : { _id: '', name: '' },
            )
          }}
          renderInput={(params) => <TextField label="Activité" {...params} />}
        />
      </FormControl>
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
          {priceRangeOptions.map((option) => {
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
