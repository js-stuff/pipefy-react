import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
    return (
        <Container>
            <header>
                <Label color="#7159C1" />
            </header>
            <p>
                Fazer migração completa de servidor
            </p>
            <img src="https://api.adorable.io/avatars/285/bfsd@adorable.io.png" alt=""/>
        </Container>
    );
}