import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                margin: '0 10px',
                color: '#00CC22',
                width: '147px',
                height: 3,
                padding: '13px 0',
                '& .MuiSlider-thumb': {
                    height: 17,
                    width: 17,
                    backgroundColor: '#fff',
                    border: '1px solid ',
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
