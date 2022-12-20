import React from 'react'
import { Input } from '@nextui-org/react' 
import {BiSearch} from 'react-icons/bi'

export const searchbar = () => {
  return (
    <>
    {/* Searchbar using Next js Input */}
    <Input
           rounded
           bordered
            clearable
            contentRightStyling={true}
            placeholder="Search"
            color='secondary'
            contentRight={
              <BiSearch/>
            }
          />
    </>
  )
}
export default searchbar;