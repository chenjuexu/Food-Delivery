
import React from 'react';
import { render,  screen,fireEvent } from '@testing-library/react'
import SortOrdersOptions from './SortOrdersOptions'




it('display all sort options  with correct value', ()=>{
const setSortPreferece = jest.fn()
render(<SortOrdersOptions setSortPreferece={setSortPreferece}/>)

expect(screen.getByText('Older')).toHaveValue('-createdAt')
expect(screen.getByText('Older')).toHaveValue('createdAt')
expect(screen.getByText('Lower Amount')).toHaveValue('total')
expect(screen.getByText('Lower Amount')).toHaveValue('-total')



})

it('to have -createdAt as default value',()=>{
const setSortPreferece = jest.fn();

  render(<SortOrdersOptions  setSortPreferece={setSortPreferece}/>)

 expect(screen.getByRole('combobox')).toHaveDisplayValue('Most recent')

})

it('triggers setSortPreferece function passing the correct value on change',()=>{

const setSortPreferece = jest.fn();

render(<SortOrdersOptions  setSortPreferece={setSortPreferece}/>)

fireEvent.change(screen.getByRole('combobox'), {
  target: {
    value:'-total'
  },
})
 expect(setSortPreferece.mock.calls.length).toBe(1)

 expect(screen.getByRole('combobox')).toHaveDisplayValue('Most recent')

 fireEvent.change(screen.getByRole('combobox'), {
  target: {
    value:'-createdAt'
  },
})
 expect(setSortPreferece.mock.calls.length).toBe(2)

 expect(screen.getByRole('combobox')).toHaveDisplayValue('Most recent')

})