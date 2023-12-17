import type { Meta, StoryObj } from '@storybook/react';

import { Trafficlight } from './Trafficlight';

const meta: Meta<typeof Trafficlight>={
    component: Trafficlight,
    title: 'Trafficlight'
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Base : Story ={
    args:{
        varient: 'green'
    },
};

export const Yellow : Story ={
    args:{
        varient: 'yellow'
    },
};

export const Red : Story ={
    args:{
        varient: 'red'
    },
};

export const Grouped : Story ={
    render: (args)=> <div
    style={{
        background:'gray',
        display:'flex',
        flexDirection:'column',
        gap:10,
        border: '1px solid black',
        width: 'max-content',
        padding:10
    }}
    >
        <Trafficlight varient='red' />
        <Trafficlight varient='yellow' />
        <Trafficlight varient='green' />
    </div>

}



