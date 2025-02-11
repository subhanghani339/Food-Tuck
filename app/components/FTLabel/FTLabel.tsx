import React from 'react'

interface FTLabelProps {
    label: string,
    id: string,
}

const FTLabel: React.FC<FTLabelProps> = ({ label, id }) => {
    return (
        <label htmlFor={id} className='text-grey-100'>
            {label}
        </label>
    )
}

export default FTLabel