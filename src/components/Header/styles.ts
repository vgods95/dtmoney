import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; //centralizar
    padding: 2rem 1rem 12rem; //16px nas laterais e 160px em baixo (16px é o tamanho padrão do rem no desktop - font-size)
    display: flex;
    align-items: center;
    justify-content: space-between;

    button { 
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s; //Toda vez que a filter for alterada (por ora só no hover), a transição é feita em 0.2s

        &:hover {
            filter: brightness(0.9);
        }
    }
`;