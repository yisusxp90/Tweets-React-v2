import React, {useState} from 'react';
import './FormSendTweet.scss';
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';

const FormSendTweet = (props) => {

    const  { sendTweet } = props;

    const [formValue, setFormValue] = useState({
        name: '',
        tweet: ''
    });

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value
        });
    };

    return (
        <div className="form-send-tweet">
            <h2 className="form-send-tweet__title">Enviar Tweet</h2>

            <form
                className="form-send-tweet__form"
                onSubmit={(e) => sendTweet(e, formValue)}
                onChange={handleChange}
            >
                <FormControl>
                    <FormGroup>
                        <TextField
                            className="form-send-tweet__form-name"
                            type="text"
                            name="name"
                            placeholder="nombre del usuario"
                            margin="normal"
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField
                            className="form-send-tweet__form-textarea"
                            name="tweet"
                            multiline
                            rows="6"
                            placeholder="Escribe tu Tweet..."
                            margin="normal"
                        />
                    </FormGroup>

                    <FormGroup>
                        <Button type="submit">Enviar Tweet</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};

export default FormSendTweet;