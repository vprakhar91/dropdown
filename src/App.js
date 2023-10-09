import React, {useState} from 'react'
import Select from 'react-select'
export default function App(){
  const [value, setValue] = useState(null)
  const options = [
    {value: "CHOCOLATE", label: "Chocolate"},
    {value: "CANDY", label: "Candy"},
    {value: "ICE CREAM", label: "Ice Cream"},
    {value: "BURGER", label: "Burger"},
  ]
  return(
    <div style={{margin: 20, width: 200}}>
      <Select options={options}
      defaultValue={value}
      placeholder="Select your Snack" 
      onChange={setValue}
      isMulti
      isSearchable
      noOptionsMessage={() => "No Snacks Found..."}
      //isDisabled

      style ={{
        placeholder: (baseStyles, state) => ({
          ...baseStyles,
          color: "gray"
        }),
        clearIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "red"
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "black"
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          borderColor: "red"
        }),
        multiValueRemove: (baseStyles) => ({
          ...baseStyles,
          color:   "red" ,
          backgroundColor:  "black" 
        })
      }}
      />
    </div>
  )
}
