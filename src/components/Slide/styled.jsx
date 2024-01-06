import styled from 'styled-components';

export const Slide = styled.div`
    padding: 120px 0;

    .container {
        gap: 24px;
        display: flex;
        flex-direction: column;

        h2 {
            font-size: 28px;
        }

        .carousel-prev, .carousel-next {
            top: 0;
            bottom: 0;
            width: 32px;
            height: 32px;
            margin: auto;
            border-radius: 50%;
            position: absolute;
            background-color: #FFF;
        }
    }
`