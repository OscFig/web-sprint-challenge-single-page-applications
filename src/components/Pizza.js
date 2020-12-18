//! this is your form
import React from 'react'

export default function Pizza(props) {
    const { values, submit, change, errors } = props;


    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form onSubmit={onSubmit}>
{/*           DROPDOWN          */}
            <label>
                Choice of Size
                <select 
                onChange={onChange} 
                value={values.size} 
                name='size'>
                    <option value=''>-Select a size-</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Meduim</option>
                    <option value='large'>Large</option>
                </select>
            </label>

{/*          RADIO BUTTON           */}
            <label>
                BBQ
                <input
                    type='radio'
                    name='sauce'
                    value='BBQ'
                    onChange={onChange}
                    checked={values.sauce === 'BBQ'}
                    />
            </label>

            <label>
                Ranch
                <input
                    type='radio'
                    name='sauce'
                    value='Ranch'
                    onChange={onChange}
                    checked={values.sauce === 'Ranch'}
                    />
            </label>

{/*           CHECKBOX           */}
            <label>
                Pepperoni
                <input
                    type='checkbox'
                    name='pepperoni'
                    onChange={onChange}
                    checked={values.pepperoni}
                    />
            </label>

            <label>
                Sausage
                <input
                    type='checkbox'
                    name='sausage'
                    onChange={onChange}
                    checked={values.sausage}
                    />
            </label>

            <label>
                Pineapple
                <input
                    type='checkbox'
                    name='pineapple'
                    onChange={onChange}
                    checked={values.pineapple}
                    />
            </label>

            <label>
                Bacon
                <input
                    type='checkbox'
                    name='bacon'
                    onChange={onChange}
                    checked={values.bacon}
                    />
            </label>

{/*           TEXT INPUT           */}
            <label>
                Special Instructions
                <input
                    value={values.special}
                    onChange={onChange}
                    name="name"
                    type="text"
                    />
            </label>

            <label>
                Name
                <input
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    type="text"
                    />
                </label>

            <div className='PizzaDiv'>
           <button>Create Order</button>
            </div> 

            <div className='errorsDiv'>{errors.name}</div>
        </form>


       
    )
}
