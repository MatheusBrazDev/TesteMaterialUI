import React, { useState } from 'react';
import { FormControl, Input, FormHelperText } from '@mui/material';

export const Login = () => {
    const [login, setLogin] = useState('');
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Grid item xs={12}>
            <FormControl fullWidth>
                <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login}
                    onChange={e => { setLogin(e.target.value); }} />
                <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
            </FormControl>
        </Grid>
    );
};
