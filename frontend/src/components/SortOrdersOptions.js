
import {Option,OptionList} from './SortProductsOptions'

export default function SortOrdersOptions({setSortPreferece,defaultValue}){


return(
<OptionList  defaultValue={defaultValue} name="sortProductBy" onChange={(e) => setSortPreferece(e.target.value)}>
<Option value="-createdAt" >Most recent</Option>
<Option value="createdAt" >Most recent</Option>
<Option value="total" >Lower Amount</Option>
<Option value="-total">Lower Amount</Option>

</OptionList>

);

}