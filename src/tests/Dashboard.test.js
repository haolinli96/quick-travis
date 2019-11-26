import React from 'react'
import { render, fireEvent, waitForElement, findByRole } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import Dashboard from '../views/Dashboard/Dashboard.js';
import { tsExternalModuleReference } from '@babel/types';
import { get } from 'http';

test('creat a new event', async () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};
    const { getByText } = render(<Dashboard />)

    expect(getByText('Create New Event')).toBeInTheDocument()

    fireEvent.click(getByText('Create New Event'))

    //const alert = await findByRole('alert')

    //expect(alert).toHaveTextContent(/success/i)
    //expect(handleCreatingEvent).toHaveBeenCalled(1)
    //expect(setHasID).toBeCalledWith(false)
})